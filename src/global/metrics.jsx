const { Dimensions, Platform } = require("react-native");

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const ratio= (size)=>
    Platform.select({
        ios: size,
        android: size
    });

const guidelineBaseWidth = 375;

const scale = size => (screenWidth / guidelineBaseWidth) * +size;


const generatedFontSize= fontSize =>
    Platform.select({
        ios: scale(fontSize),
        android: fontSize,
    })

export default {
    generatedFontSize,
    scale,
    ratio,
    screenWidth,
    screenHeight,
}