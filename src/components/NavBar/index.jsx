import { View, Text, Animated } from 'react-native'
import React, { useRef } from 'react'
import styles from '../../global/styles';
import MenuButton from '../Button/MenuButton'
import BackButton from '../Button/BackButton';
import navigator from '../../navigation/navigator';
import PrimaryBlackText from '../Text/PrimaryBlackText';

const NavBar = ({ componentId, title }) => {

    const slideAnimation = useRef(new Animated.Value(0)).current;

    return (
        <View style={[styles.width, styles.height * 0.1, { alignItems: 'center', marginTop: styles.height * 0.05 }]}>
            <View style={[{ width: styles.width }, { justifyContent: 'center', alignItems: 'center', top: 10 }]}>
                <View style={[styles.mainStyles.row, { width: styles.width * 0.8 },
                { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <BackButton onPress={() => navigator.pop(componentId)} />
                    <PrimaryBlackText fontSize={20} fontWeight={600}>{title}</PrimaryBlackText>
                    <MenuButton onPress={() => toggle.toggleSideBar(setIsSideBarVisible, isSideBarVisible, slideAnimation)} />
                </View>
            </View>
        </View>
    )
}

export default NavBar