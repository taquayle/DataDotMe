// Author: Tyler Quayle
// File. Home.js
// Date: December 4, 2017
// Desc: Home screen for Data.me app


import React from 'react';
import { Router} from './Navigate/Router'
import Style  from './Styles/Style'
import { Text, View, StyleSheet, Image, BackHandler, Platform} from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export class HomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.key)
  }

  constructor(props){
    super(props)
  }



  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.title}>
          Welcome to React Native!
        </Text>
        <Text style={Style.text}>
          To get started, edit App.js
        </Text>
        <Text style={Style.text}>
          {instructions}
        </Text>
      </View>
    );
  }
}
