// Author: Tyler Quayle
// File. Splash.js
// Date: December 4, 2017
// Desc: Simple SplashScreen that will send users to homescreen

import React from 'react';
import { View, StyleSheet, Image, Text, AsyncStorage} from 'react-native'
import Style from './Styles/Main'
import UserWeight from './Stores/WeightStore'
import { StackNavigator } from 'react-navigation'



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
    
    console.log("Done loading Async Storage")
    const { navigate } = this.props.navigation
    navigate('Home')
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
