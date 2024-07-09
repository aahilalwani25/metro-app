const { Animated } = require("react-native");

const toggleSideBar = (setState,state,slideAnimation) => {
    setState(!state);
    Animated.timing(slideAnimation, {
        toValue: state ? 0 : 1,
        duration: 1000,
        useNativeDriver: false
    }).start();
};


export default {
    toggleSideBar,
    
}