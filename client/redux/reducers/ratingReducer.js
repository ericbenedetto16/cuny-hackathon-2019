import { SUBMIT_RATING } from '../actions/types';
import axios from 'axios';

const initialState = {
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_RATING:
            if(action.payload.ratingType == 'restroom') {
                axios.post('http://192.168.1.246:5000/api/v1/restrooms',
                {
                    "rating": action.payload.rating,
                    "identifier": action.payload.id,
                    "accessible": action.payload.accessible,
                    "babychanger": action.payload.babychanger,
                    "customeronly": action.payload.customeronly,
                })
            }else{
                axios.post('http://192.168.1.246:5000/api/v1/refills',
                {
                    "rating": action.payload.rating,
                    "identifier": action.payload.id,
                    "accessible": action.payload.accessible,
                })
            }
            return state;
        default:
            return state;
    }
}