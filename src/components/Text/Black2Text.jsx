import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

const Black2Text = ({fontSize,fontWeight,children, style}) => {
  return (
    <Text style={{fontSize, fontWeight, color:colors.black2, rowGap:10, ...style}}>{children}</Text>
  )
}

export default Black2Text