import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../global/styles'
import NavBar from '../components/NavBar'
import colors from '../theme/colors'
import DateFormatter from '../global/dateFormatter'
import images from '../theme/images'
import Helper from '../redux/Helper'

const dateFormatter = new DateFormatter();

const WeatherScreen = ({ componentId }) => {
    const date = new Date();
    const getDate = dateFormatter.formatDateToMMDDYYYY(date);
    const getDay = dateFormatter.getDay(date);

    async function fetchWeather(){
        let data= await Helper('/data/2.5/forecast',0,{
            "city":"Dubai"
        },'','GET')
        console.log(data)
    }

    useEffect(()=>{
        fetchWeather()
    })

    return (
        <View style={[styles.mainStyles.primaryBackgroundColor, styles.mainStyles.fullScreen, { alignItems: 'center' }]}>
            <NavBar title={'Weather'} componentId={componentId} />

            <View style={[{ width: styles.width * 0.9, height: styles.height * 0.2, alignItems: 'center', justifyContent: 'space-around' }, styles.mainStyles.row]}>

                <View style>
                    <Text style={[{
                        color: colors.blue2,
                        fontWeight: 600,
                        fontSize: 70
                    }]}>20°C</Text>

                    <Text style={weatherStyle.weatherTextStyle}>Thunderstorms</Text>
                    <Text style={weatherStyle.dateTextStyle}>{getDay}, {getDate}</Text>
                </View>

                <View>
                    <Image source={images["thunderstorm"]} />
                </View>
            </View>

            <View>
                <View style={[styles.mainStyles.row, {
                    width: styles.width * 0.9,
                    justifyContent:'center',
                    alignItems:'center'
                }]}>
                    <View style={{width: styles.width*0.6}}>
                        <Text style={[weatherStyle.weatherTextStyle,{
                            fontWeight:600
                        }]}>Daily</Text>
                    </View>

                    <View style={[styles.mainStyles.row, {
                        width: styles.width*0.3,
                        justifyContent: 'center'
                    }]}>
                        <Text style={[weatherStyle.weatherTextStyle,{
                            width: styles.width*0.15,
                            fontWeight:600
                        }]}>F</Text>
                        <Text style={[weatherStyle.weatherTextStyle,{
                            width: styles.width*0.15,
                            fontWeight:600
                        }]}>C</Text>
                    </View>


                </View>
            </View>
        </View>
    )
}

const weatherStyle = StyleSheet.create({
    mainWeatherCard: {
        width: styles.width * 0.9,
        height: styles.height * 0.2
    },
    weatherTextStyle: { fontSize: 20, color: colors.black2 },
    dateTextStyle: { fontSize: 14, color: colors.black2 },
})
export default WeatherScreen