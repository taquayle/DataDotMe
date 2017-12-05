/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router} from './Screens/Navigate/Router'
import { StackNavigator } from 'react-navigation';

export default class App extends Component<{}> {
  render() {
      return ( <Router /> );
  }
}
