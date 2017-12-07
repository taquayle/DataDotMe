// Author: Tyler Quayle
// File. Splash.js
// Date: December 4, 2017
// Desc: Simple SplashScreen that will send users to homescreen

import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native'
import Style from './Styles/Main'
import { StackNavigator } from 'react-navigation'



export class SplashScreen extends React.Component {
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.key)}

  constructor(props) {
    super(props);

    const { navigate } = this.props.navigation;
    setTimeout(() => { // Execute ONCE
        this.setState(previousState => {navigate('Home')});
    }, 1000); //Milliseconds before switch
  }
  render() {
    return (
      <View style={Style.wrapper}>
        {/********************************************************************/}
        {/*HEAD*/}
        <View style={Style.header}>
          <Text style={Style.body}>{this.props.navigation.state.routeName}</Text>
        </View>
        {/********************************************************************/}

        {/********************************************************************/}
        {/*BODY*/}
        <View style={Style.body}>
          <Image source={require('./Images/Logo.png')} style={Style.logo}/>
        </View>
        {/********************************************************************/}

        {/********************************************************************/}
        {/*FEED*/}
        <View style={Style.feed}>

        </View>
        {/********************************************************************/}

      </View>
    );
  }
}
