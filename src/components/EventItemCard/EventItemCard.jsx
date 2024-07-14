import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../global/styles';
import colors from '../../theme/colors';
import images from '../../theme/images';
import icons from '../../theme/icons';
import CircularButton from '../CircularButton/CircularButton';

const EventItemCard = ({ event_name, cost_per_sim_card, number_of_reviews, image, rating }) => {
  const starComponents = [];
  const renderRating = () => {
    for (let i = 0; i < rating; i++) {
      starComponents.push(
        <Image key={i} source={icons["starActive"]} style={eventItemCardStyle.star} />
      );
    }
  };

  renderRating();

  return (
    <View style={[eventItemCardStyle.container]}>
      <Image source={images[image]} style={eventItemCardStyle.image} />
      <Text style={[{ color: colors.black2, fontWeight: '600', fontSize: 12 }]}>{event_name}</Text>
      <View style={eventItemCardStyle.starsContainer}>
        {starComponents}
        <Text style={[{ color: colors.grey }]}>({number_of_reviews})</Text>
      </View>
      <Text style={[{ color: colors.grey }]}>From</Text>

      <View style={[styles.mainStyles.row,{justifyContent:'space-between'}]}>
        <View>
          <Text style={[{ color: colors.blue2, fontWeight: 600, fontSize: 16 }]}>$ {cost_per_sim_card}</Text>
          <Text style={[{ color: colors.grey }]}>Per SIM card</Text>
        </View>

        <CircularButton icon={"share"} backgroundColor={'#f6f6f6'}/>

      </View>

    </View>
  );
};

const eventItemCardStyle = StyleSheet.create({
  container: {
    marginTop:20,
    width: styles.width * 0.4,
    height: styles.height * 0.25,
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
  shareBtn:{
    borderRadius:50,
    width:30,
    height:30,
    backgroundColor:'#f6f6f6',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default EventItemCard;
