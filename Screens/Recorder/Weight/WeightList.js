// Author: Tyler Quayle
// Date: 12/12/2017
// File: Weight/WeightList.js
// Desc: Screen shown when swiped right, showing list of entered weight.

import React from 'react';
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'
import { Text, View, StyleSheet, Image, BackHandler, Platform, TextInput, ScrollView} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryBar } from "victory-native";


export class WeightListScreen extends React.Component{
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

  weightIcon(diff){
    var iColor = '#999999'
    var name = 'squared-minus'

    if(diff > 0){
      iColor = '#FF0000'
      name = 'arrow-bold-up'
    }
    if(diff < 0){
      iColor = '#00FF00'
      name = 'arrow-bold-down'
    }
    return ({name: name,
    type:'entypo',
    color:iColor,})
  }
  render() {
    var tempData = this.state.weightList.slice()
    console.log(tempData)
    return (
      <View style={Weight.wrapper}>
        {/********************************************************************/}
        {/*HEAD*/}
        <View style={Weight.header}>
          <Text style={Weight.text}>{this.props.navigation.state.routeName}</Text>

        </View>
        {/********************************************************************/}

        {/********************************************************************/}
        {/*BODY*/}
        <View style={Weight.listBody}>
          <ScrollView >
            <List>
            {
              this.state.weightList.map((k, i) => (
                <ListItem
                  hideChevron
                  key={i}
                  title={k['date']}
                  rightTitle={k['weight'] + " " + k['diff']}
                  rightIcon={this.weightIcon(parseInt(k['diff']))}
                  leftIcon={this.weightIcon(parseInt(k['diff']))}
                />
              ))
            }
            </List>
          </ScrollView>
        </View>
        {/********************************************************************/}



      </View>

    );
  }
}
