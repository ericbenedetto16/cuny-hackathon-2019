import axios from 'axios';
import { GET_STATIONS, GET_STATION_RATINGS } from './types';

export const getStationLocations = () => dispatch => {
    axios.get('https://data.cityofnewyork.us/resource/bevm-apmm.json?featuresta=Active')
        .then(res =>
            dispatch({
                type: GET_STATIONS,
                payload: res.data
            })    
        )
        .catch(err => {
            console.log(err)
        })
}

export const getStationRatings = () => dispatch => {
    axios.get('http://10.38.128.80:5000/api/v1/refills')
        .then(res =>
            dispatch({
                type: GET_STATION_RATINGS,
                payload: res.data
            })
        )
        .catch(err => {
            console.log(err)    
        })
}