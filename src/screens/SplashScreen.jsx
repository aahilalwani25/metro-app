import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '../theme/images'

const SplashScreen = ({componentId}) => {
  return (
    <View>
        <Image source={images['splashScreenImage']}
        resizeMode='cover'
        style={[]}
        />
    </View>
  )
}

export default SplashScreen