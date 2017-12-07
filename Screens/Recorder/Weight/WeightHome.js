// Author: Tyler Quayle
// File. WeightHome.js
// Date: December 5, 2017
// Desc: Homescreen for the weight recorder


import React from 'react';
import Style  from '../../Styles/Main'
import { Text, View, StyleSheet, Image, BackHandler, Platform} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider } from 'react-native-elements'
import {  VictoryChart, VictoryCandlestick } from "victory-native";


// Filler data so we can do some layout work
const candleData = [
  {x: 1, open: 9, close: 30, high: 56, low: 7},
  {x: 2, open: 80, close: 40, high: 120, low: 10},
  {x: 3, open: 50, close: 80, high: 90, low: 20},
  {x: 4, open: 70, close: 22, high: 70, low: 5},
  {x: 5, open: 20, close: 35, high: 50, low: 10},
  {x: 6, open: 35, close: 30, high: 40, low: 3},
  {x: 7, open: 30, close: 90, high: 95, low: 30},
  {x: 8, open: 80, close: 81, high: 83, low: 75}
];


export class WeightHomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.key)
  }

  constructor(props){
    super(props)
  }



  render() {
    return (
      <View style={Style.wrapper}>
      <View style={Style.wrapper}>
        <Text style={Style.body}>{this.props.navigation.state.routeName}</Text>
      </View>
      <View style={Style.wrapper}>
        <VictoryChart><VictoryCandlestick data={candleData}/></VictoryChart>
      </View>

      </View>
    );
  }
}
