import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { forwardRef, useCallback } from 'react'
import styles from '../global/styles';
import colors from '../theme/colors';
import icons from '../theme/icons';
import Line from '../components/Line';
import images from '../theme/images';
import navigator from '../navigation/navigator';
import RenderMenuItems from '../components/MenuItems/MenuItems';
import { ABOUT_US, CONTACT_US, WEATHER } from '../global/constants';

const SideBarMenuScreen = forwardRef(({ slideAnimation, componentId }, ref) => {

    function navigate(item){
        if(item===ABOUT_US){
            navigator.push('about-us',componentId);
        }
        else if(item===CONTACT_US){
            navigator.push('contact-us', componentId);
        }
        else if(item===WEATHER){
            navigator.push('weather-screen', componentId)
        }
        else{
            console.log("No screen")
        }
    }


    return (

        <View ref={ref} style={[sideBarMenuStyles.container, { width: slideAnimation }]}>
            {/* <View style={[{ width: styles.width * 0.4,},styles.height,{backgroundColor:'gray'}]}/> */}
            <View style={{ width: styles.width * 0.7, justifyContent: 'center', alignItems: 'center', top: styles.height * 0.05 }}>

                <View style={[styles.mainStyles.row,]}>
                    <Image source={icons['dubaiGuide']} />
                    <View>
                        <Text style={sideBarMenuStyles.dubaiText}>Dubai</Text>
                        <Text style={sideBarMenuStyles.guideText}>Guide</Text>
                    </View>
                </View>

                <FlatList
                    data={["Metro Map", "Things to Do", "Events", "Hotels"]}
                    renderItem={useCallback(({item})=><RenderMenuItems item={item} onPress={()=>navigate(item)}/>)}
                />

                <Line color={'#ededed'} width={0.65} />

                <FlatList
                    data={["Weather"]}
                    renderItem={useCallback(({item})=><RenderMenuItems item={item} onPress={()=>navigate(item)}/>)}
                />

                <Line color={'#ededed'} width={0.65} />

                <FlatList
                    data={["About", "Contact Us"]}
                    renderItem={useCallback(({item})=><RenderMenuItems item={item} onPress={()=>navigate(item)}/>)}
                />

                <Line color={'#ededed'} width={0.65} />

                <FlatList
                    data={["Instagram", "Facebook"]}
                    renderItem={useCallback(({item})=><RenderMenuItems item={item} onPress={()=>navigate(item)}/>)}
                />
            </View>

            <View style={{height: styles.height * 0.07}}/>
            <View style={{ width: styles.width * 0.7, height: styles.height * 0.07, justifyContent: 'center' }}>
                <View style={[{ justifyContent: 'space-between', alignItems: 'center' }, styles.mainStyles.row]}>
                    <View style={[styles.mainStyles.row, { width: styles.width * 0.3 }]}>
                        <Image style={{ left: styles.width * 0.05, }} source={images['flagMalaysia']} />
                        <Text style={[{ left: styles.width * 0.1, }, sideBarMenuStyles.itemText]}>{'English'}</Text>
                    </View>
                    <View>
                        <Image source={icons["downArrow"]} />
                    </View>
                </View>
            </View>

            
            <View style={{ width: styles.width * 0.7, height: styles.height * 0.07, justifyContent: 'center' }}>
                <View style={[{ justifyContent: 'space-between', alignItems: 'center' }, styles.mainStyles.row]}>
                    <View style={[styles.mainStyles.row, { width: styles.width * 0.3 }]}>
                        <Image style={{ left: styles.width * 0.05, }} source={icons['guard']} />
                        <Text style={[{ left: styles.width * 0.1, }, sideBarMenuStyles.itemText]}>{'Privacy Policy'}</Text>
                    </View>
                    
                </View>
            </View>

        </View>
    )
})

const sideBarMenuStyles = StyleSheet.create({
    container: {
        height: styles.height,
        width: styles.width,
        backgroundColor: colors.background,
    },
    dubaiText: {
        color: colors.black,
        fontSize: 22,
        fontWeight: '800'
    },
    guideText: {
        color: colors.blue2,
        fontSize: 22,
        fontWeight: '400'
    },
    itemText: {
        color: colors.black3,
        fontSize: 16
    }
})

export default SideBarMenuScreen

