import { SUBMIT_RATING } from './types';

// payload.ratingType
// payload.rating

export const submitRating = payload => dispatch => {
    dispatch({
        type: SUBMIT_RATING,
        payload
    });
}