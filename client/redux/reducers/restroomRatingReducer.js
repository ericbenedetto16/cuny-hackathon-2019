import { GET_RESTROOM_RATINGS } from '../actions/types';

const initialState = {
    loading: true,
    ratings: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RESTROOM_RATINGS:
            return {
                ...state,
                ratings: action.payload,
                loading: false
            }
        default:
            return state;
    }
}