// Author: Tyler Quayle
// File. MoneyHome.js
// Date: December 5, 2017
// Desc: Homescreen for the money recorder


import React from 'react';
import Style  from '../../Styles/Main'
import { Text, View, StyleSheet, Image, BackHandler, Platform} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider } from 'react-native-elements'


export class MoneyHomeScreen extends React.Component{
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
