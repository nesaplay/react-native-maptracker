import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);

  const track = state.find(t => t._id === _id);

  return (
    <>
      <Text style={styles.title}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...track.locations[0].coords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    margin: 20,
  },
  map: {
    height: 300,
  }
});

export default TrackDetailScreen;
