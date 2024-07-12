import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Animated, useAnimatedValue, Modal } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import images from '../theme/images';
import main from '../global/styles';
import colors from '../theme/colors';
import PrimaryButton from '../components/Button/PrimaryButton';
import SecondaryButton from '../components/Button/SecondaryButton';
import MenuButton from '../components/Button/MenuButton';
import SideBarMenuScreen from './SideBarMenuScreen';
import toggle from '../global/toggle';
import LanguageLists from '../components/LanguageList/LanguageLists';
import i18next from '../services/i18next';
import { useTranslation } from 'react-i18next';


const HomeScreen = ({ componentId }) => {
    const sideBarMenuRef = useRef();
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const slideAnimation = useRef(new Animated.Value(0)).current;
    const {t}= useTranslation();
    const [isLanguageListOpened, setLanguageListOpened] = useState(false)

    const animatedWidth = slideAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, main.width * 0.75]
    });

    return (
        <View style={[main.fullScreen, main.primaryBackgroundColor, { opacity: 1 }]}>
            <ImageBackground
                source={images["splashScreenImage"]}
                resizeMode='cover'
                style={[styles.backgroundImage]}
            >
                <ImageBackground
                    source={images['homeScreen']}
                    style={[styles.frontImage]}
                >
                    <View style={[{ width: main.width }, { justifyContent: 'center', alignItems: 'center', top: 10 }]}>
                        <View style={[main.mainStyles.row, { width: main.width * 0.9 }, { justifyContent: 'space-between', alignItems: 'center' }]}>
                            {
                                (isLanguageListOpened) ?
                                    <View style={{ height: 'auto', width: main.width * 0.2, backgroundColor: colors.white }}>
                                        <LanguageLists state={isLanguageListOpened} setState={setLanguageListOpened} i18next={i18next}/>
                                    </View>

                                    : <SecondaryButton title={'Eng'} width={0.2} height={0.04} icon={'globe'} onPress={() => {
                                        setLanguageListOpened(!isLanguageListOpened);
                                    }} />
                            }


                            <MenuButton onPress={() => toggle.toggleSideBar(setIsSideBarVisible, isSideBarVisible, slideAnimation)} />
                        </View>
                    </View>
                </ImageBackground>
                <BlurView
                    style={[styles.blurView]}
                    blurAmount={10}
                    blurType='light'
                >
                    <View style={styles.blurView}>
                        <View style={[{ width: main.width, height: main.height * 0.1, left: main.width * 0.05, marginTop: main.height * 0.02 }]}>
                            <Text style={[{ color: colors.white, fontSize: 25 }]}>{t('lets-explore')}</Text>
                            <Text style={[{ color: colors.white, fontWeight: 800, fontSize: 50 }]}>
                            {t('dubai')}
                                <Text style={[{ color: colors.blue2 }]}> {t('guide')}</Text>
                            </Text>
                        </View>

                        <View style={[{ width: main.width, height: main.height * 0.1, marginTop: main.height * 0.05 }]}>
                            <View style={[styles.buttonContainer]}>
                                <PrimaryButton title={t('metro-map')} width={0.4} height={0.08} />
                                <PrimaryButton title={t('things-to-do')} width={0.4} height={0.08} />
                            </View>

                            <View style={[styles.buttonContainer]}>
                                <PrimaryButton title={t('hotel-booking')} width={0.4} height={0.08} />
                                <PrimaryButton title={t('weather')} width={0.4} height={0.08} />
                            </View>

                            <View style={[styles.buttonContainer]}>
                                <PrimaryButton title={t('about')} width={0.4} height={0.08} />
                                <PrimaryButton title={t('contact')} width={0.4} height={0.08} />
                            </View>
                        </View>
                    </View>
                </BlurView>
            </ImageBackground>

            {isSideBarVisible && (
                <Animated.View style={[styles.sideBar, { width: animatedWidth }]}>
                    <SideBarMenuScreen ref={sideBarMenuRef}
                        componentId={componentId}
                    />
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: main.width,
        height: main.height,
        position: 'absolute',
    },
    frontImage: {
        width: main.width,
        height: main.height * 0.4,
    },
    blurView: {
        backgroundColor: 'transparent',
        width: main.width,
        height: main.height * 0.6,
        bottom: 0,
        position: 'absolute',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: main.height * 0.1,
    },
    sideBar: {
        position: 'absolute',
        height: main.height,
        right: 0, // Position the sidebar from the right
        top: 0,
        backgroundColor: colors.background,
        overflow: 'hidden'
    }
});

export default HomeScreen;
