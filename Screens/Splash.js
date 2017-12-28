// Author: Tyler Quayle
// Date: December 4, 2017
// File: Splash.js
// Desc: Simple SplashScreen that will send users to homescreen

/******************************************************************************/
// React and Addons
import React from 'react'
import { View, StyleSheet, Image, Text, AsyncStorage, Platform} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Router } from './Navigate/Router'

/******************************************************************************/
// Stores
import UserWeight from './Stores/WeightStore'
import SpendingStore from './Stores/SpendingStore'

/******************************************************************************/
// Styles
import Style from './Styles/Main'


const androidBuild = 'V 0.1'
const iosBuild = 'V 0.1'

const build = Platform.select({
  ios: 'iOS Build: ' + iosBuild,
  android: 'Android Build: ' + androidBuild
});

export class SplashScreen extends React.Component {
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)}

  componentDidMount(){
    this._loadAsync()
  }

  /****************************************************************************/
  // _loadAsync()
  //  Attempt to load async data
  /****************************************************************************/
  _loadAsync = async()=>{

    console.log("Attempting to load Async Storage")

    await UserWeight.loadAsync()
    await SpendingStore.loadAsync()

    console.log("Done loading Async Storage")
    const { navigate } = this.props.navigation
    setTimeout(() => { // Execute ONCE
        this.setState(previousState => {navigate('Home')});
    }, 1000); //Milliseconds before switch
  }



  constructor(props) {
    super(props);
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
          <Text style={Style.text}>{build}</Text>
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
