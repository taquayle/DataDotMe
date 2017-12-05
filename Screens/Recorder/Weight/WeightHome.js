// Author: Tyler Quayle
// File. WeightHome.js
// Date: December 5, 2017
// Desc: Homescreen for the weight recorder


import React from 'react';
import Style  from '../../Styles/Style'
import { Text, View, StyleSheet, Image, BackHandler, Platform} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider } from 'react-native-elements'


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
        <Text style={Style.wrapper}>{this.props.navigation.state.routeName}</Text>
      </View>
    );
  }
}
