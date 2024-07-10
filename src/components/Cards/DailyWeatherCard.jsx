import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from '../../global/styles';
import colors from '../../theme/colors';
import images from '../../theme/images';
import icons from '../../theme/icons';

const DailyWeatherCard = ({temp, weatherIcon, description}) => {

  function convertToFarenheit(){
    return Math.round(temp*(9/5)+32);
  }
  return (
    <View style={[styles.mainStyles.row, {
      width: styles.width * 0.9,
      height: styles.height*0.1,
      justifyContent: 'center',
      alignItems: 'center'
  }]}>
      <View style={[{ width: styles.width * 0.6 }, styles.mainStyles.row]}>
        <View style={{width: styles.width*0.15}}>
          <Image source={icons[weatherIcon]}/>
        </View>
        <View>
          <Text style={[cardStyle.weatherTextStyle, {
              fontWeight: '600'
          }]}>Monday</Text>
          <Text style={[cardStyle.descriptionText, {
              width: styles.width * 0.6,
              fontWeight: '300'
          }]}>{description}</Text>
        </View>
      </View>

      <View style={[styles.mainStyles.row, {
          width: styles.width * 0.3,
          justifyContent: 'center',
          alignItems:'center'
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

const cardStyle= StyleSheet.create({
  weatherTextStyle: { fontSize: 20, color: colors.black2 },
  farenheitText: { fontSize: 20, color: colors.grey },
  descriptionText:{ fontSize:14, color: colors.grey}
})

export default DailyWeatherCard