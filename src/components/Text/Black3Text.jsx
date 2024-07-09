import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

const Black3Text = ({fontSize,fontWeight,children}) => {
  return (
    <Text style={{fontSize, fontWeight, color:colors.black3}}>{children}</Text>
  )
}

export default Black3Text