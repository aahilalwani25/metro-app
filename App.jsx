import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/SplashScreen'

const App = ({componentId}) => {
  return (
    <SplashScreen componentId={componentId}/>
  )
}

export default App