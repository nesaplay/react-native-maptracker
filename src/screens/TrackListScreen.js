import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { MaterialIcons } from "@expo/vector-icons";

const TrackListScreen = ({ navigation }) => {
  const { fetchTracks, state } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
              <ListItem 
                title={item.name} 
                subtitle={`${item.locations.length} location points`} 
                subtitleStyle={{ color: 'grey' }}
                leftIcon={<MaterialIcons name="directions-walk" size={30} />}
                chevron 
                bottomDivider 
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks',
};

const styles = StyleSheet.create({});

export default TrackListScreen;
