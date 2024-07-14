import { Dimensions, StyleSheet } from "react-native";
import colors from "../theme/colors";
import metrics from "./metrics";

const { width, height } = Dimensions.get('screen');

const mainStyles= StyleSheet.create({
    fullScreen:{
        flex:1
    },
    primaryBackgroundColor:{
        backgroundColor: colors.background
    },
    centerViewContent:{
        justifyContent:'center',
        alignItems:'center'
    },
    primaryTextColor:{
        color: colors.black3
    },
    weight_800:{
        fontWeight: 800
    },
    containerWidth:(factor)=>({
        width: width*factor
    }),
    containerHeight:(factor)=>({
        height: height*factor
    }),
    row:{
        flexDirection:'row'
    },
    column:{
        flexDirection:'column'
    },
    bg_image:{
        position:'absolute',
        
    }
    
})

export default {
    width,
    height,
    mainStyles
}