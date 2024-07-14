import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import styles from '../global/styles'
import NavBar from '../components/NavBar'
import event_data from '../data/events.json'
import EventItemCard from '../components/EventItemCard/EventItemCard'

const EventsScreen = ({ componentId }) => {

  return (

    <ScrollView nestedScrollEnabled>

    
    <View
      style={[styles.mainStyles.primaryBackgroundColor,
      { width: styles.width,  alignItems: 'center' }]}
    >
      <View>
        <NavBar title={'Events'} componentId={componentId} />
      </View>



      <FlatList
        numColumns={2}
        key={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ justifyContent: 'space-around' }} />}
        data={event_data}
        renderItem={useCallback(({ item }) =>
          <EventItemCard
            event_name={item.event_name}
            image={item.image}
            rating={item.rating}
            number_of_reviews={item.number_of_reviews}
            cost_per_sim_card={item.cost_per_sim_card} />)}
      />
    </View>
    </ScrollView>
  )
}

export default EventsScreen