import { combineReducers } from 'redux';
import waterRatingReducer from './waterRatingReducer';
import restroomRatingReducer from './restroomRatingReducer';
import waterReducer from './waterReducer';
import restroomReducer from './restroomReducer';
import loadingReducer from './loadingReducer';
import ratingReducer from './ratingReducer';

export default combineReducers({
    loading: loadingReducer,
    waterRating: waterRatingReducer,
    restroomRating: restroomRatingReducer,
    stations: waterReducer,
    restrooms: restroomReducer,
    ratings: ratingReducer
})