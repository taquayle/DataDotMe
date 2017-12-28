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
import { WorkoutHomeScreen} from '../Recorder/Workout/WorkoutHome'
  import { WorkoutTransitionScreen } from '../Recorder/Workout/WorkoutTransition'
import { SpendingHomeScreen} from '../Recorder/Spending/SpendingHome'
  import { SpendingTransitionScreen } from '../Recorder/Spending/SpendingTransition'
import { WeightHomeScreen } from '../Recorder/Weight/WeightHome'
  import { WeightTransitionScreen } from '../Recorder/Weight/WeightTransition'
  import { WeightListScreen } from '../Recorder/Weight/WeightList'
  import { WeightGraphScreen } from '../Recorder/Weight/WeightGraph'
  import { WeightNewScreen } from '../Recorder/Weight/WeightNew'
import { FoodHomeScreen } from '../Recorder/Food/FoodHome'
  import { FoodTransitionScreen } from '../Recorder/Food/FoodTransition'

export const Router = StackNavigator({
  Splash: { screen: SplashScreen, }, //Whatever is first in list will be automatically navigated too
  Home: { screen: HomeScreen, },
  FoodHome: { screen: FoodHomeScreen, },
    FoodTrans: {screen: FoodTransitionScreen, },
  SpendingHome: { screen: SpendingHomeScreen, },
    SpendingTrans: { screen: SpendingTransitionScreen, },
  WeightHome: { screen: WeightHomeScreen, },
    WeightTrans: {screen: WeightTransitionScreen, },
    WeightList: { screen: WeightListScreen, },
    WeightGraph: { screen: WeightGraphScreen, },
    WeightNew: { screen: WeightNewScreen, },
  WorkHome: { screen: WorkoutHomeScreen, },
    WorkoutTrans: { screen: WorkoutTransitionScreen,},
  },
  navigation = {
    headerMode: 'none'
  });
