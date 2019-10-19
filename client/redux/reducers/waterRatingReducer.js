import { GET_STATION_RATINGS } from '../actions/types';

const initialState = {
    loading: true,
    ratings: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_STATION_RATINGS:
            return {
                ...state,
                ratings: action.payload,
                loading: false
            }
        default:
            return state;
    }
}