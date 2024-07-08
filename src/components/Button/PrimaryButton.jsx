import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import style from '../../global/styles'
import colors from '../../theme/colors'

const PrimaryButton = ({ title, onPress, width, height }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, {
            width: style.width * width,
            height: style.height * height,
        }]}>
            <Text style={[styles.title]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: colors.white,
        fontSize: 22
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderColor: colors.white,
        borderWidth: 2,

        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PrimaryButton
