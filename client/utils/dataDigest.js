import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRestroomLocations, getRestroomRatings } from '../redux/actions/restroomActions';
import { getStationLocations, getStationRatings } from '../redux/actions/waterActions';

export const StoreInitializer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestroomLocations())
        dispatch(getRestroomRatings())
        dispatch(getStationLocations())
        dispatch(getStationRatings())
    },[])

    return(
        <React.Fragment />
    );
}