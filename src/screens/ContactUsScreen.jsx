import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from '../global/styles'
import NavBar from '../components/NavBar'
import BlueText from '../components/Text/BlueText'
import Black2Text from '../components/Text/Black2Text'
import icons from '../theme/icons'
import colors from '../theme/colors'
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

const ContactUsScreen = ({ componentId }) => {

  const [contactUsToggle, toggleContactUs] = useState(false);
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
        <View style={[{ backgroundColor: colors.white }, styles.width, {
          height: styles.height
        }]}>

          <NavBar title={'Contact Us'} componentId={componentId} />


          <View style={
            { marginHorizontal: styles.width * 0.1, height: styles.height * 0.4 }}>


            <Black2Text fontSize={16} fontWeight={400}>
              Contact us at a convenient time for you and we will answer all your questions.
            </Black2Text>

            <TouchableOpacity
              onPress={() => toggleContactUs(!contactUsToggle)}
              style={{ width: styles.width * 0.8, height: styles.height * 0.07, justifyContent: 'center', backgroundColor: '#effaff', borderRadius: 8 }}>
              <View style={[{ justifyContent: 'space-around', alignItems: 'center' }, styles.mainStyles.row]}>
                <View style={[styles.mainStyles.row, { width: styles.width * 0.6 }]}>
                  <Image style={{ left: styles.width * 0.05, }} source={icons["smsEdit"]} />
                  <Text style={[{ left: styles.width * 0.1, }, contactUsStyle.itemText]}>Write to us</Text>
                </View>
                <View>
                  <Image source={icons["downArrow"]} />
                </View>
              </View>
            </TouchableOpacity>


            {
              (contactUsToggle) && (
                <View>
                  <TextInput placeholder='Enter your Email' />
                </View>
              )
            }
          </View>
        </View>
      </PanGestureHandler>

    </GestureHandlerRootView>
  )
}

const contactUsStyle = StyleSheet.create({
  itemText: {
    color: colors.black3,
    fontSize: 16
  }
})

export default ContactUsScreen