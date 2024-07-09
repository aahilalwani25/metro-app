import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../global/styles'
import NavBar from '../components/NavBar'
import BlueText from '../components/Text/BlueText'
import Black2Text from '../components/Text/Black2Text'

const AboutUsScreen = ({ componentId }) => {
  return (
    <View style={[styles.mainStyles.primaryBackgroundColor, styles.width]}>
      <View style={[styles.width, styles.height * 0.1, { alignItems: 'center',  marginTop: styles.height*0.05}]}>
        <NavBar title={'About Us'} componentId={componentId} />
      </View>

      <ScrollView>
        <View style={
          { marginHorizontal:styles.width*0.1, marginTop: styles.height*0.05, height: styles.height*0.75, justifyContent:'space-around'}}>

          <View style={{alignItems:'flex-start'}}>
            <BlueText fontSize={30} fontWeight={500}>About Us</BlueText>
          </View>

          <Black2Text fontSize={16} fontWeight={400}>
            Welcome to the Dubai Guide Metro App,
            your essential tool for seamless navigation across
            Dubai's bustling metropolis. Our app is meticulously
            crafted to provide you with all the necessary information
            to maximize your metro travel experience in this vibrant
            city. From detailed route planning to real-time updates
            on train schedules and fares, we've got you covered every
            step of the way.
          </Black2Text>

          <Black2Text fontSize={16} fontWeight={400}>
            But our app is more than just a practical travel companion.
            It's your gateway to exploring the rich tapestry of culture,
            entertainment, and culinary delights that Dubai has to offer.
            With our curated recommendations and insider tips, you'll
            discover hidden gems and must-visit attractions conveniently
            located near metro stations, ensuring that every journey is
            an adventure waiting to unfold.
          </Black2Text>

          <Black2Text fontSize={16} fontWeight={400}>
            At Dubai Guide Metro App, we're committed to
            delivering excellence and ensuring that your experience
            with us is nothing short of exceptional. Whether you're a
            local commuter, a tourist, or a first-time visitor, our
            user-friendly interface and comprehensive features make
            exploring Dubai's metro system a breeze. Join us on this
            exciting journey and let's discover the magic of Dubai together!
          </Black2Text>
        </View>
      </ScrollView>

    </View>
  )
}

export default AboutUsScreen