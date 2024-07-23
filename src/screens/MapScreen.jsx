import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from '../global/styles';
import NavBar from '../components/NavBar';
import images from '../theme/images';
import colors from '../theme/colors';
import { useTranslation } from 'react-i18next';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import SideBarMenuScreen from './SideBarMenuScreen';


const MapScreen = ({ componentId }) => {

  const sideBarMenuRef = useRef();
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const { t } = useTranslation();
  const [isLanguageListOpened, setLanguageListOpened] = useState(false);

  const animatedWidth = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, styles.width * 0.75],
  });

  const toggleSideBar = () => {
    if (isSideBarVisible) {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsSideBarVisible(false));
    } else {
      setIsSideBarVisible(true);
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const onPanGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: slideAnimation } }],
    { useNativeDriver: false }

  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = event.nativeEvent;
      if (translationX > 50) {
        toggleSideBar();
      } else if (translationX < -50) {
        toggleSideBar();
      } else {
        Animated.timing(slideAnimation, {
          toValue: isSideBarVisible ? 1 : 0,
          useNativeDriver: false,
        }).start();
      }
    }
  };

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        onGestureEvent={onPanGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <View style={[styles.mainStyles.fullScreen, { backgroundColor: colors.white }]}>
          <NavBar isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} setIsSideBarVisible={setIsSideBarVisible} slideAnimation={slideAnimation} animatedWidth={animatedWidth} title={'Map'} componentId={componentId} style={{ position: 'absolute', zIndex: 2 }} />
          <ScrollView>
            <Image
              source={images['dubaiMap']}
            />
          </ScrollView>
          {isSideBarVisible && (
            <Animated.View style={[mapStyle.sideBar, { width: animatedWidth }]}>
              <SideBarMenuScreen ref={sideBarMenuRef} componentId={componentId} />
            </Animated.View>
          )}
        </View>

      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const mapStyle= StyleSheet.create({
  sideBar: {
    position: 'absolute',
    height: styles.height,
    right: 0,
    top: 0,
    backgroundColor: colors.background,
    overflow: 'hidden',
},
})


export default MapScreen;
