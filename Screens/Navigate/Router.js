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
import { WorkHomeScreen} from '../Recorder/Workout/WorkHome'
import { MoneyHomeScreen} from '../Recorder/Money/MoneyHome'
import { WeightHomeScreen } from '../Recorder/Weight/WeightHome'
  import { WeightListScreen } from '../Recorder/Weight/WeightList'
  import { WeightGraphScreen } from '../Recorder/Weight/WeightGraph'
import { FoodHomeScreen } from '../Recorder/Food/FoodHome'

export const Router = StackNavigator({
  Splash: { screen: SplashScreen, }, //Whatever is first in list will be automatically navigated too
  Home: { screen: HomeScreen, },
  FoodHome: { screen: FoodHomeScreen, },
  MoneyHome: { screen: MoneyHomeScreen, },
  WeightHome: { screen: WeightHomeScreen, },
    WeightList: { screen: WeightListScreen},
    WeightGraph: { screen: WeightGraphScreen},
  WorkHome: { screen: WorkHomeScreen, },
  },
  navigation = {
    headerMode: 'none'
  });
