import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

const BlueText = ({fontSize,fontWeight,children}) => {
  return (
    <Text style={{fontSize, fontWeight, color:colors.blue2}}>{children}</Text>
  )
}

export default BlueText