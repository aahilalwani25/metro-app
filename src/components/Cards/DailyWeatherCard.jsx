import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from '../../global/styles';
import colors from '../../theme/colors';
import images from '../../theme/images';
import icons from '../../theme/icons';

const DailyWeatherCard = ({ temp, weatherIcon, description, day }) => {

  function convertToFarenheit() {
    return Math.round(temp * (9 / 5) + 32);
  }

  function getDay(date){

  }

  return (
    <View style={[styles.mainStyles.row, cardStyle.container]}>
      <View style={[{ width: styles.width * 0.55 }, styles.mainStyles.row]}>
        <View style={{ width: styles.width * 0.15 }}>
          <Image source={icons[weatherIcon]} />
        </View>
        <View>
          <Text style={[cardStyle.weatherTextStyle, {
            fontWeight: '600'
          }]}>{day}</Text>
          <Text style={[cardStyle.descriptionText, {
            width: styles.width * 0.6,
            fontWeight: '300'
          }]}>{description}</Text>
        </View>
      </View>

      <View style={[styles.mainStyles.row, {
        width: styles.width * 0.3,
        justifyContent: 'center',
        alignItems: 'center'
      }]}>
        <Text style={[cardStyle.weatherTextStyle, {
          width: styles.width * 0.15,
          fontWeight: '600'
        }]}>{convertToFarenheit()}</Text>
        <Text style={[cardStyle.farenheitText, {
          width: styles.width * 0.15,
          fontWeight: '600'
        }]}>{Math.round(temp)}</Text>
      </View>
    </View>
  )
}

const cardStyle = StyleSheet.create({
  weatherTextStyle: { fontSize: 20, color: colors.black2 },
  farenheitText: { fontSize: 20, color: colors.grey },
  descriptionText: { fontSize: 14, color: colors.grey },
  container: {
    marginTop: 20,
    width: styles.width * 0.9,
    height: styles.height * 0.08,
    borderRadius: 5,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#fff', // Needed to display shadow correctly
    margin: 10, // Optional: Add margin to prevent shadow clipping
    padding: 10, // Optional: Add padding inside the card
  },
})

export default DailyWeatherCard