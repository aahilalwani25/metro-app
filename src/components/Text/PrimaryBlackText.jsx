import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'

const PrimaryBlackText = ({fontSize, fontWeight, children}) => {
  return (
    <Text style={{fontSize, fontWeight, color:colors.black}}>{children}</Text>
  )
}

export default PrimaryBlackText