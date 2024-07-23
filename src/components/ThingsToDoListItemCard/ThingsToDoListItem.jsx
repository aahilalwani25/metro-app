import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from '../../global/styles';
import images from '../../theme/images';
import colors from '../../theme/colors';
import CircularButton from '../CircularButton/CircularButton';
import icons from '../../theme/icons';


const ThingsToDoListItemCard = ({ title, imageName, rating, number_of_reviews, duration, cost }) => {
  const starComponents = [];
  const renderRating = () => {
    for (let i = 0; i < rating; i++) {
      starComponents.push(
        <Image key={i} source={icons["starActive"]} style={thingsToDoItemCardStyle.star} />
      );
    }
  };

  renderRating();


  return (
    <View style={[thingsToDoItemCardStyle.container]}>
      <View>
        <Image source={images[imageName]} style={thingsToDoItemCardStyle.image} />
        <Text style={[{ color: colors.black2, fontWeight: '600', fontSize: 16 }]}>{title}</Text>
      </View>

      <View style={thingsToDoItemCardStyle.starsContainer}>
        {starComponents}
        <Text style={[{ color: colors.grey }]}>({number_of_reviews})</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={[{ color: colors.blue2, fontWeight: 600, fontSize: 16 }]}>{duration}</Text>
        <Text style={[{ color: colors.grey }]}>From</Text>
      </View>

      <View style={[styles.mainStyles.row, { justifyContent:'flex-end' }]}>
        <View>
          <Text style={[{ color: colors.blue2, fontWeight: 600, fontSize: 16 }]}>USD {cost}</Text>
        </View>
      </View>

    </View>

  )
}

const thingsToDoItemCardStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    width: styles.width * 0.8,
    height: styles.height * 0.13,
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
  image: {
    alignSelf: 'center',
    borderRadius: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center'
  },
  star: {
    // width: 10,
    // height: 10,
    marginRight: 2,
  },
  shareBtn: {
    borderRadius: 50,
    width: 30,
    height: 30,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default ThingsToDoListItemCard