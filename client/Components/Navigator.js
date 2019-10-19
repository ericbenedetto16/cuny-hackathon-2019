import React from 'react'
import { Image } from 'react-native'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import OptionScreen from '../screens/OptionScreen.js'
import MapScreen from '../screens/MapScreen.js'

const MainNavigator = 
    createStackNavigator({
        Home:{
            screen: OptionScreen,
        },
        Map:{
            screen: MapScreen,
        }
    })