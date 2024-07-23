const { Animated } = require("react-native");

const toggleSideBar = ({isSideBarVisible,slideAnimation,setIsSideBarVisible}) => {
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

export default {
    toggleSideBar,
};
