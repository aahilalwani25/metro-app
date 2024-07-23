import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState, useMemo } from 'react'
import styles from '../global/styles'
import NavBar from '../components/NavBar'
import colors from '../theme/colors'
import DateFormatter from '../global/dateFormatter'
import images from '../theme/images'
import DailyWeatherCard from '../components/Cards/DailyWeatherCard'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../redux/WeatherFetchSlice'

const dateFormatter = new DateFormatter();

const WeatherScreen = ({ componentId }) => {
    const date = useMemo(() => new Date(), []);
    const getDate = useMemo(() => dateFormatter.formatDateToMMDDYYYY(date), [date]);
    const getDay = useMemo(() => dateFormatter.getDay(date), [date]);
    const dispatch = useDispatch();

    const [weatherForecast, setWeatherForecast] = useState(null);

    const fetchW = useCallback(async () => {
        try {
            const weatherResult = await dispatch(fetchWeather({
                endpoint: '/data/2.5/forecast',
                query: { city: 'Dubai' },
                method: 'GET'
            }));

            if (weatherResult.type === fetchWeather.fulfilled.toString()) {
                const loadedList = weatherResult.payload["list"];
                setWeatherForecast(loadedList);
            }
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    }, [dispatch]);

    useEffect(() => {
        fetchW();
    }, [fetchW]);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const renderWeatherItem = useCallback(({ item }) => {
        const dateString= item.dt_txt.split(' ')[0];

        const newDate = new Date(dateString);
        // Get the day of the week (0-6)
        const dayOfWeek = newDate.getDay();

        // Get the corresponding day name
        const dayName = daysOfWeek[dayOfWeek];

        return (
            <DailyWeatherCard
            day={dayName}
                temp={item.main.temp}
                weatherIcon={item.weather[0].main}
                description={item.weather[0].description}
            />
        )
    }, []);

    return (
        <View style={[styles.mainStyles.primaryBackgroundColor, styles.mainStyles.fullScreen, { alignItems: 'center' }]}>
            <NavBar title={'Weather'} componentId={componentId} />

            <View style={[{
                width: styles.width * 0.9,
                height: styles.height * 0.2,
                alignItems: 'center',
                justifyContent: 'space-around'
            }, styles.mainStyles.row]}>
                <View>
                    <Text style={[{
                        color: colors.blue2,
                        fontWeight: '600',
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
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    <View style={{ width: styles.width * 0.6 }}>
                        <Text style={[weatherStyle.weatherTextStyle, { fontWeight: '600' }]}>Daily</Text>
                    </View>
                    <View style={[styles.mainStyles.row, {
                        width: styles.width * 0.3,
                        justifyContent: 'center'
                    }]}>
                        <Text style={[weatherStyle.weatherTextStyle, {
                            width: styles.width * 0.15,
                            fontWeight: '600'
                        }]}>F</Text>
                        <Text style={[weatherStyle.weatherTextStyle, {
                            width: styles.width * 0.15,
                            fontWeight: '600'
                        }]}>C</Text>
                    </View>
                </View>
            </View>

            {weatherForecast ? (
                <FlatList
                    data={weatherForecast}
                    renderItem={renderWeatherItem}
                    keyExtractor={item => item.dt.toString()}
                />
            ) : (
                <ActivityIndicator color={colors.blue2} />
            )}
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
