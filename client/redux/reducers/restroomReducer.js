import { GET_RESTROOMS } from '../actions/types';

const initialState = {
    loading: true,
    restrooms: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RESTROOMS:
            return {
                ...state,
                restrooms: action.payload,
                loading: false
            };
        default:
            return state;
    }
}