import { View, Text, Image, Animated, useAnimatedValue, Easing, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import images from '../theme/images'
import styles from '../global/styles'
import colors from '../theme/colors'
import navigator from '../navigation/navigator'


const SplashScreen = ({ componentId }) => {

  const trainSlideAnimationX = useAnimatedValue((styles.width / 2)-50);
  const trainSlideAnimationY = useAnimatedValue(0);
  const dubaiMetroTranslationX = useAnimatedValue(styles.width / 2);
  const dubaiMetroOpacity = useAnimatedValue(0);



  useEffect(() => {
    Animated.timing(trainSlideAnimationY, {
      toValue: (styles.height / 2)-50,
      duration: 1000,
      useNativeDriver: true,

    }).start(
      () => {
        setTimeout(() => {

          Animated.parallel([
            Animated.timing(trainSlideAnimationX, {
              toValue: -((styles.width / 2) - 300),
              duration: 500,
              useNativeDriver: true
            }).start(),
            Animated.timing(dubaiMetroTranslationX, {
              toValue: ((styles.width / 2) + 10),
              duration: 500,
              useNativeDriver: true,

            }).start(),
            Animated.timing(dubaiMetroOpacity, {
              toValue: 1,
              useNativeDriver: true,
              duration: 500
            }).start(()=>{
              setTimeout(async() => {
                await navigator.push('home-screen',componentId)
              }, 1000);
            })
          ])

        }, 500);

        
      }
    );

    
  })


  return (
    <View style={[styles.fullScreen, styles.mainStyles.primaryBackgroundColor,{
      height: styles.height
    }]}>
      <Animated.Image
        style={[{
          transform: [
            { translateX: trainSlideAnimationX },
            { translateY: trainSlideAnimationY }
          ],

        }, styles.centerViewContent]}
        source={images['logo']}
      />

      <View>
        <Animated.Text style={[
          styles.primaryTextColor, style.dubaiText,
          {
            transform: [
              { translateX: dubaiMetroTranslationX },
              { translateY: (styles.height / 2)- 150}
            ],
            opacity: dubaiMetroOpacity
          }]}>Dubai</Animated.Text>
        <Animated.Text style={[style.metroText, {
          transform: [
            { translateX: dubaiMetroTranslationX },
            { translateY: (styles.height / 2)- 150}
          ],
          opacity: dubaiMetroOpacity
        }]}>Metro</Animated.Text>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  dubaiText: {
    fontSize: 42,
    fontWeight: 800,
    color: colors.black
  },
  metroText: {
    fontSize: 42,
    fontWeight: 400,
    color: colors.primaryColor
  }
})

export default SplashScreen