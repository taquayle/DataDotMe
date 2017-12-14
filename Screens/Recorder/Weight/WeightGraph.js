/******************************************************************************/
/******************************************************************************/
// THIS FILE IS NOT BEING USED AT THE MOMENT, ALL LOGIC HAS BEEN PUT INTO
//  WEIGHTHOME UNTIL I FIGURE OUT HOW TO USE SWIPER ALONG WITH NAVIGATION/REF
/******************************************************************************/
/******************************************************************************/
// Author: Tyler Quayle
// Date: 12/13/2017
// File: Weight/WeightGraph.js
// Desc: Screen shown when swiped right twice, show a graph

import React from 'react';
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'
import { Text, View, StyleSheet, Image, BackHandler, Platform, TextInput, ScrollView} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryBar } from "victory-native";


export class WeightGraphScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
  }

  componentDidMount(){
    console.log(this.state.weightList)
  }
  constructor(props){
    super(props)
    this.state = {  addWeight: "",
                    weightList: [{'date': "NO DATA", 'weight': 0, 'diff': 0}],
                    runningWeight: 0,};
  }

  showChart(){
    if(this.state.newUser)
    {
      return(<Text>NO DATA</Text>)
    }
    else{
      return(
        <VictoryChart>
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            alignment="start"
            data={this.state.weightList}
            sortKey='time'
            x='date'
            y='weight'
          />
        </VictoryChart>
      )
    }
  }

  render() {
    var tempData = this.state.weightList.slice()
    console.log(tempData)
    return (
      <View style={Weight.wrapper}>
        {this.props.children}
        <Text>Hello, World</Text>
      </View>

    );
  }
}
