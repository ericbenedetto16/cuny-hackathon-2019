import React from 'react';
import { Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import OptionScreen from '../screens/OptionScreen'
import MapScreen from '../screens/MapScreen'
import QuestionScreen from '../screens/QuestionScreen'
import SurveyScreen from '../screens/SurveyScreen'

const MainNavigator = 
    createStackNavigator({
        Home: {
            screen: OptionScreen,
            navigationOptions: {
                title: 'Home',
                header: null
            }
        },
        Map: {
            screen: MapScreen
        },
        Question: {
            screen: QuestionScreen
        },
        Survey: {
            screen: SurveyScreen,
            navigationOptions: {
                title: 'Survey',
                header: null
            }
        }
    })

const Nav = createAppContainer(MainNavigator);

export default Nav;