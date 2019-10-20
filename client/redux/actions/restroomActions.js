import axios from 'axios';
import { GET_RESTROOMS, GET_RESTROOM_RATINGS } from './types';

export const getRestroomLocations = () => dispatch => {
    axios.get('http://m3.mappler.net/dechr/class/point_data_web_fn.php?blogid=nyrestroom&is_blog_user_group_allow_yn=N&latMax=40.804810597615614&lngMax=-73.82408551713354&latMin=40.699738152409935&lngMin=-74.15367536088354')
        .then(res =>
            dispatch({
                type: GET_RESTROOMS,
                payload: res.data
            })
        )
        .catch(err => {
            console.log(err)
        });
}

export const getRestroomRatings = () => dispatch => {
    // axios.get('http://10.38.128.80:5000/api/v1/restrooms')
    axios.get('http://192.168.1.246:5000/api/v1/restrooms')
        .then(res =>
            dispatch({
                type: GET_RESTROOM_RATINGS,
                payload: res.data
            })
        )
        .catch(err => {
            console.log(err)    
        })
}