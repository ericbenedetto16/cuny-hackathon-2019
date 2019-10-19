import { SET_LOADING } from '../actions/types';

const initialState = true;

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_LOADING:
            return action.payload;
        default:
            return state;
    }
}