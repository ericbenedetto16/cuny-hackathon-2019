import React from 'react';
import { Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import OptionScreen from '../screens/OptionScreen'
import MapScreen from '../screens/MapScreen'

const MainNavigator = 
    createStackNavigator({
        Home: {
            screen: OptionScreen,
        },
        Map: {
            screen: MapScreen
        }
    })

const Nav = createAppContainer(MainNavigator);

export default Nav;