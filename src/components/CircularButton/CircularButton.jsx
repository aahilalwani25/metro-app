import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../theme/images'
import icons from '../../theme/icons'

const CircularButton = ({onPress, backgroundColor, icon}) => {
  return (
    <TouchableOpacity onPress style={[circularButtonStyle.btn, {backgroundColor}]}>
          <Image source={icons[icon]}/>
        </TouchableOpacity>
  )
}

const circularButtonStyle= StyleSheet.create({
    btn:{
        borderRadius:50,
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center'
      }
})

export default CircularButton