// Author: Tyler Quayle
// File. Router.js
// Date: December 4, 2017
// Desc: Default Router for Data.me

import {StackNavigator} from 'react-navigation'
import React from 'react'

/******************************************************************************/
//  SCREENS
import { HomeScreen } from '../Home';
import { SplashScreen } from '../Splash';

export const Router = StackNavigator({
  Splash: { screen: SplashScreen, },
  Home: { screen: HomeScreen, },
  },
  navigation = {
    headerMode: 'none'
  });
