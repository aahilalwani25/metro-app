import React, { useCallback, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Animated, FlatList } from 'react-native';
import colors from '../theme/colors';
import SideBarMenuScreen from './SideBarMenuScreen';
import styles from '../global/styles';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import NavBar from '../components/NavBar';
import toDoThingsData from '../data/thingsToDo.json';
import ThingsToDoListItemCard from '../components/ThingsToDoListItemCard/ThingsToDoListItem';

const ThingsToDoScreen = ({ componentId }) => {
    const sideBarMenuRef = useRef();
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const slideAnimation = useRef(new Animated.Value(0)).current;
    const { t } = useTranslation();

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
                    <NavBar
                        isSideBarVisible={isSideBarVisible}
                        toggleSideBar={toggleSideBar}
                        setIsSideBarVisible={setIsSideBarVisible}
                        slideAnimation={slideAnimation}
                        animatedWidth={animatedWidth}
                        title={'Things to do'} componentId={componentId}
                        style={{ position: 'absolute', zIndex: 2 }} />


                        <View style={[toDoThingsStyle.container]}>
                            <FlatList
                            data={toDoThingsData}
                            renderItem={useCallback(({item})=>{
                                return(
                                    <ThingsToDoListItemCard 
                                    title={item.title} 
                                    cost={item.cost}
                                    rating={5}
                                    duration={item.duration}
                                    number_of_reviews={item.number_of_reviews}/>
                                )
                            })}
                            />
                        </View>
                    {isSideBarVisible && (
                        <Animated.View style={[toDoThingsStyle.sideBar, { width: animatedWidth }]}>
                            <SideBarMenuScreen ref={sideBarMenuRef} componentId={componentId} />
                        </Animated.View>
                    )}
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    )
}

const toDoThingsStyle= StyleSheet.create({
    sideBar:{
        position: 'absolute',
        height: styles.height,
        right: 0,
        top: 0,
        backgroundColor: colors.background,
        overflow: 'hidden',
    },
    container:{
        width: styles.width,
        height: styles.height,
        top: styles.height*0.1,
        alignItems:'center'
    }
})

export default ThingsToDoScreen