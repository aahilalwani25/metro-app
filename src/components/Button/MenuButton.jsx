import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import style from '../../global/styles'
import colors from '../../theme/colors'
import icons from '../../theme/icons'

const MenuButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, {
            width: style.width*0.1,
            height: style.width*0.1,
            borderRadius:50
        }]}>
            <View style={[style.mainStyles.row, { justifyContent: 'space-around', alignItems: 'center' }]}>
                <Image source={icons["menu"]} />
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
        elevation:5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MenuButton