import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import styles from '../global/styles';
import NavBar from '../components/NavBar';
import images from '../theme/images';

const MapScreen = ({ componentId }) => {
  return (
    <ScrollView scrollEnabled>
      <ScrollView horizontal scrollEnabled>
        <View
          style={[styles.mainStyles.primaryBackgroundColor, { width: styles.width*2.3, height: styles.height*1.2 }]}
        >
          <Image
            source={images['dubaiMap']}
            style={[
              styles.mainStyles.bg_image,
              {
                
              }
              // {
              //   width: styles.width,
              //   height: styles.height,
              // }
            ]}
          />
          <NavBar title={'Map'} componentId={componentId} />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const mapStyles = StyleSheet.create({

});

export default MapScreen;
