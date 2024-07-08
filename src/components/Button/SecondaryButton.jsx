import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../../global/styles'
import colors from '../../theme/colors'
import icons from '../../theme/icons'

const SecondaryButton = ({ title, onPress, width, height, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, {
            width: style.width * width,
            height: style.height * height,
        }]}>
            <View style={[style.mainStyles.row,{justifyContent:'space-between', alignItems:'center'}]}>
                <Text style={[styles.title]}>{title}</Text>
                {
                    (icon != null) ?
                        <Image source={icons[icon]} style={{width:20, height:20}}/>
                        : null
                }
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.blue2,
        fontSize: 14
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: 2,

        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default SecondaryButton