// Author: Tyler Quayle
// Date: December 5, 2017
// File: Spending/SpendingHome.js
// Desc: Homescreen for the Spending recorder


/******************************************************************************/
// React-native includes
import React from 'react';
import { Text, View, StyleSheet, Image, BackHandler,
  Platform, TextInput, ScrollView, AsyncStorage} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon,
  Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryBar } from "victory-native";
import Swiper from 'react-native-swiper'

/******************************************************************************/
// Style Sheets
import Style  from '../../Styles/Main'

/******************************************************************************/
// Stores
import UserSpending from '../../Stores/SpendingStore'


export class SpendingHomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
  }

  componentDidMount(){

  }

  constructor(props){
    super(props)
    this.state = {  addSpending: "",
                    spendingHistory: null,
                    spendingCategory: 0,
                  };
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
          <Image source={require('../../Images/Spending.png')} style={Style.logo}/>
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
