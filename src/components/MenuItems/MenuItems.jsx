import navigator from "../../navigation/navigator";
import colors from "../../theme/colors";
import icons from "../../theme/icons";

const { useCallback } = require("react");
const { TouchableOpacity, View, Image, Text, StyleSheet } = require("react-native");
const { default: styles } = require("../../global/styles");

const RenderMenuItems = ({ item, onPress }) => {

    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{ width: styles.width * 0.7, height: styles.height * 0.07, justifyContent: 'center' }}>
            <View style={[{ justifyContent: 'space-between', alignItems: 'center' }, styles.mainStyles.row]}>
                <View style={[styles.mainStyles.row, { width: styles.width * 0.3 }]}>
                    <Image style={{ left: styles.width * 0.05, }} source={icons[item]} />
                    <Text style={[{ left: styles.width * 0.1, }, menuItemStyles.itemText]}>{item}</Text>
                </View>
                <View>
                    <Image source={icons["rightArrow"]} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const menuItemStyles = StyleSheet.create({
    container: {
        height: styles.height,
        width: styles.width,
        backgroundColor: colors.background,
    },
    dubaiText: {
        color: colors.black,
        fontSize: 22,
        fontWeight: '800'
    },
    guideText: {
        color: colors.blue2,
        fontSize: 22,
        fontWeight: '400'
    },
    itemText: {
        color: colors.black3,
        fontSize: 16
    }
})

export default RenderMenuItems