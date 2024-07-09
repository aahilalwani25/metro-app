import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../../global/styles'

const Line = ({color, width}) => {
  return (
    <View style={{
        width: styles.width*width,
        borderColor: color,
        borderWidth:1, justifyContent:'center'
    }}/>
  )
}

export default Line