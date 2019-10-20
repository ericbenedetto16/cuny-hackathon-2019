import React, { useState } from 'react';
import { 
    Text,
    // Platform,
    Image,
    StyleSheet,
    View,
    Dimensions,
    Linking
} from 'react-native';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import axios from 'axios';

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
        const filtRate = ratings.filter(rating => rating.identifier === id)
        const average = filtRate.reduce((total, next) => total + next.rating, 0 ) / filtRate.length;
            switch(parseInt(average)) {
                case 1:
                    return 'red';
                case 2:
                    return 'red';
                case 3:
                    return 'red';
                case 4:
                    return 'yellow';
                case 5:
                    return 'yellow';
                case 6:
                    return 'yellow';
                case 7:
                    return 'yellow';
                case 8:
                    return 'green';
                case 9:
                    return 'green';
                case 10:
                    return 'green';
                default:
                    return 'grey';
        }
    };

    let lastTap = null;

    const { navigate } = props.navigation;

    const handleDoubleTap = (id,mapType,lat,lon) => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 800;
        if(lastTap && ( now - lastTap ) < DOUBLE_PRESS_DELAY) {
            navigate('Question', {mapType ,id});
            Linking.openURL(`http://maps.apple.com/?daddr=${lat},${lon}&z=10&dirflg=w`)
            setTimeout(() => {
                axios.post('https://exp.host/--/api/v2/push/send', 
                {
                    "to" : "ExponentPushToken[L88dXHP8F2sAMpQCmyggwX]",
                    "title": "Don't Forget to Leave a Rating",
                    "body": "Tell Us How Your Experience Was!"
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                })
            },2000
            );
        }else {
            lastTap = now;
        }
    }

    const accessible = description => (
        description.includes('Wheelchair') ? '♿' : ''
    )

    const mapType = props.navigation.getParam('mapType', '');
  if(mapType == 'restroom') 
  {
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
            pinColor = { avgRating(ratings, oid) }
            onPress = {() => handleDoubleTap(oid, 'restroom', parseFloat(lat), parseFloat(lon))}
        />
        ))
  }else if(mapType == 'water') {
      const ratings = useSelector(state => state.waterRating.ratings)
      const markers = useSelector(state => state.stations.stations);
      markerRender = markers.map(({ objectid, position, descriptio, signname, the_geom: { coordinates } }) => (
        <Marker 
            key = { objectid }
            title = { signname + ' ' + accessible(descriptio) }
            description = { position }
            coordinate = { {
                latitude: parseFloat(coordinates[1]),
                longitude: parseFloat(coordinates[0])
            } }
            pinColor = { avgRating(ratings, objectid) }
            onPress = {() => handleDoubleTap(objectid, 'water', coordinates[1], coordinates[0])}
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