// Author: Tyler Quayle
// File. FoodHome.js
// Date: December 5, 2017
// Desc: Workout Home screen for Data.me app


import React from 'react';
import Style  from '../../Styles/Main'
import { Text, View, StyleSheet, Image, BackHandler, Platform} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider } from 'react-native-elements'


export class FoodHomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
  }

  constructor(props){
    super(props)
  }



  render() {
    return (
      <View style={Style.wrapper}>
        <Text style={Style.wrapper}>{this.props.navigation.state.routeName}</Text>
      </View>
    );
  }
}
