import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import images from '../theme/images'
import main from '../global/styles'
import { BlurView } from '@react-native-community/blur'
import colors from '../theme/colors'
import PrimaryButton from '../components/Button/PrimaryButton'
import SecondaryButton from '../components/Button/SecondaryButton'
import MenuButton from '../components/Button/MenuButton'

const HomeScreen = ({ componentId }) => {
    return (
        <View style={[main.fullScreen, main.primaryBackgroundColor, { opacity: 1 }]}>
            <ImageBackground
                source={images["splashScreenImage"]}
                resizeMode='cover'
                style={[styles.backgroundImage]}
            >
                <ImageBackground
                    source={images['homeScreen']}
                    style={[styles.frontImage]}>

                    <View style={[{ width: main.width }, { justifyContent: 'center', alignItems: 'center', top: 10 }]}>


                        <View style={[main.mainStyles.row, { width: main.width * 0.9 }, { justifyContent: 'space-between', alignItems: 'center' }]}>
                            <SecondaryButton title={'Eng'} width={0.2} height={0.04} icon={'globe'} />
                            <MenuButton />
                        </View>
                    </View>

                </ImageBackground>
            </ImageBackground>

            <BlurView
                style={[styles.blurView]}
                blurAmount={10} blurType='light'>
                    
                <View style={[{ height: main.height * 0.5, justifyContent: 'space-around', }]}>
                    <View style={[{ height: main.height * 0.1, width: main.width * 0.9, justifyContent: 'center', alignSelf: 'center' }]}>
                        <Text style={[{ color: colors.white, fontSize: 25 }]}>Let's Explore</Text>
                        <Text style={[{ color: colors.white, fontWeight: 800, fontSize: 50 }]}>
                            Dubai
                            <Text style={[{ color: colors.blue2 }]}> Guide</Text>
                        </Text>
                    </View>

                    <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }]}>
                        <PrimaryButton title={'Metro Map'} width={0.4} height={0.08} />
                        <PrimaryButton title={'Things To Do'} width={0.4} height={0.08} />
                    </View>

                    <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }]}>
                        <PrimaryButton title={'Hotel Booking'} width={0.4} height={0.08} />
                        <PrimaryButton title={'Weather'} width={0.4} height={0.08} />
                    </View>

                    <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }]}>
                        <PrimaryButton title={'About'} width={0.4} height={0.08} />
                        <PrimaryButton title={'Contact'} width={0.4} height={0.08} />
                    </View>
                </View>
            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: main.width,
        height: main.height,
        position: 'absolute',
        //opacity:0
    },
    frontImage: {
        width: main.width,
        height: main.height * 0.4,
        //opacity: 12
    },
    blurView: {
        backgroundColor: 'transparent',
        width: main.width,
        height: main.height * 0.6,
        bottom: 0,
        top: main.height * 0.4,
        position: 'absolute',

    }
})

export default HomeScreen