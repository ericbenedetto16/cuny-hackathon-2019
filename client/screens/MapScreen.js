import React, { useState } from 'react';
import { 
    Text,
    // Platform,
    StyleSheet,
    View,
    Dimensions,
    Linking
} from 'react-native';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import redPin from '../assets/redPin.png';
import yellowPin from '../assets/yellowPin.png';
import greenPin from '../assets/greenPin.png';
import greyPin from '../assets/greyPin.png';

let markerRender = 'Loading...';

const MapScreen = (props) => {
    // _getLocationAsync = async () => {
    //     await Permissions.askAsync(Permissions.LOCATION);
    //     let loc = await Location.getCurrentPositionAsync({});
    //   };

    // if (Platform.OS === 'android' && !Constants.isDevice) {

    // } else {
    //     _getLocationAsync();
    // }

    const [location] = useState({
        coords: {
            latitude: 40.7410482,
            longitude: -73.9831567
        }
    });

    const [initialRegion] = useState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
    });

    const avgRating = (ratings, id) => {
        let sum = 0;
        let len = 0;
        ratings
            .filter(rating => rating.identifier === id)
            .map(rating => sum += rating.rating)
            len = ratings.length - 1;
            switch(parseInt(sum / len)) {
                case 1:
                case 2:
                case 3:
                    return redPin;
                case 4:
                case 5:
                case 6:
                case 7:
                    return yellowPin;
                case 8:
                case 9:
                case 10:
                    return greenPin;
                default:
                    return greyPin;

            }
    };

    const mapType = props.navigation.getParam('mapType', '');
    console.log(mapType);
  if(mapType == 'restroom') 
  {
    // console.log(mapType);
    const ratings = useSelector(state => state.restroomRating.ratings);

    const markers = useSelector(state => state.restrooms.restrooms.marker_list);
    markerRender = markers.map(({ marker: { oid }, marker: { lat }, marker: { lon }, marker: { category }, marker: { name } }) => (
        <Marker
            key = { oid }
            title = { name }
            description = { category }
            coordinate = { {
                latitude: parseFloat(lat),
                longitude: parseFloat(lon)
            } }
            image = { avgRating(ratings, oid) }
            onPress = {() => Linking.openURL(`http://maps.apple.com/?daddr=${parseFloat(lat)},${parseFloat(lon)}&z=10&dirflg=w`)}
        />
        ))
  }else if(mapType == 'water') {
      const ratings = useSelector(state => state.waterRating.ratings)

      const markers = useSelector(state => state.stations.stations);
      markerRender = markers.map(({ objectid, position, signname, the_geom: { coordinates } }) => (
        <Marker 
            key = { objectid }
            title = { signname }
            description = { position }
            coordinate = { {
                latitude: parseFloat(coordinates[1]),
                longitude: parseFloat(coordinates[0])
            } }
            image = { avgRating(ratings, objectid) }
        />

      ));
  }else{
      markerRender = <Text>Loading...</Text>
  }

    return(
        <View style= {styles.container} >
            <MapView 
                style = {styles.mapStyle}
                initialRegion = { initialRegion }
            >
                {markerRender}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default MapScreen;