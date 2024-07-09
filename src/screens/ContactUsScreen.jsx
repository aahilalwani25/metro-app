import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from '../global/styles'
import NavBar from '../components/NavBar'
import BlueText from '../components/Text/BlueText'
import Black2Text from '../components/Text/Black2Text'
import icons from '../theme/icons'
import colors from '../theme/colors'

const ContactUsScreen = ({ componentId }) => {
  return (
    <View style={[{backgroundColor:colors.white}, styles.width]}>
      <View style={[styles.width, styles.height * 0.1, { alignItems: 'center', marginTop: styles.height * 0.05 }]}>
        <NavBar title={'Contact Us'} componentId={componentId} />
      </View>

      <View style={
        { marginHorizontal: styles.width * 0.1, height: styles.height * 0.3, justifyContent: 'space-around' }}>
        <Black2Text fontSize={16} fontWeight={400}>
          Contact us at a convenient time for you and we will answer all your questions.
        </Black2Text>

        <TouchableOpacity
          onPress={() => { }}
          style={{ width: styles.width * 0.8, height: styles.height * 0.07, justifyContent: 'center', backgroundColor:'#effaff', borderRadius:8 }}>
          <View style={[{ justifyContent: 'space-around', alignItems: 'center' }, styles.mainStyles.row]}>
            <View style={[styles.mainStyles.row, { width: styles.width * 0.6 }]}>
              <Image style={{ left: styles.width * 0.05, }} source={icons["smsEdit"]} />
              <Text style={[{ left: styles.width * 0.1, }, contactUsStyle.itemText]}>Write to us</Text>
            </View>
            <View>
              <Image source={icons["downArrow"]} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const contactUsStyle = StyleSheet.create({
  itemText: {
    color: colors.black3,
    fontSize: 16
  }
})

export default ContactUsScreen