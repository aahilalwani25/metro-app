import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../global/styles'
import NavBar from '../components/NavBar'
import BlueText from '../components/Text/BlueText'
import Black2Text from '../components/Text/Black2Text'
import { useTranslation } from 'react-i18next';


const AboutUsScreen = ({ componentId }) => {

  const {t}= useTranslation();
  return (
    <View style={[styles.mainStyles.primaryBackgroundColor, styles.width,{height:styles.height}]}>

      <NavBar title={'About Us'} componentId={componentId} />
      <ScrollView>
        <View style={
          { marginHorizontal: styles.width * 0.1, marginTop: styles.height * 0.05, height: styles.height * 0.75, justifyContent: 'space-around' }}>

          <View style={{ alignItems: 'flex-start' }}>
            <BlueText fontSize={30} fontWeight={500}>About Us</BlueText>
          </View>

          <Black2Text fontSize={16} fontWeight={400}>
            {t('about-us-description-1')}
          </Black2Text>

          <Black2Text fontSize={16} fontWeight={400}>
          {t('about-us-description-2')}
          </Black2Text>

          <Black2Text fontSize={16} fontWeight={400}>
          {t('about-us-description-3')}
          </Black2Text>
        </View>
      </ScrollView>

    </View>
  )
}

export default AboutUsScreen