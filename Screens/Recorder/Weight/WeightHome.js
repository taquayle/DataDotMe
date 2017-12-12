// Author: Tyler Quayle
// File. WeightHome.js
// Date: December 5, 2017
// Desc: Homescreen for the weight recorder


import React from 'react';
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'
import { Text, View, StyleSheet, Image, BackHandler, Platform, TextInput, ScrollView} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryCandlestick } from "victory-native";


// Filler data so we can do some layout work
const candleData = [
  {x: 1, open: 9, close: 30, high: 56, low: 7},
  {x: 2, open: 80, close: 40, high: 120, low: 10},
  {x: 3, open: 50, close: 80, high: 90, low: 20},
  {x: 4, open: 70, close: 22, high: 70, low: 5},
  {x: 5, open: 20, close: 35, high: 50, low: 10},
  {x: 6, open: 35, close: 30, high: 40, low: 3},
  {x: 7, open: 30, close: 90, high: 95, low: 30},
  {x: 8, open: 80, close: 81, high: 83, low: 75}
];


export class WeightHomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.key)
  }

  constructor(props){
    super(props)
    this.state = {  addWeight: "",
                    weightList: [],
                    runningWeight: 0,};
  }


  submitWeight(){
    if(this.state.addWeight == "")
      return;
    var tempList = this.state.weightList.slice();
    var tempWeight = this.state.addWeight
    var tempDiff = parseInt(this.state.addWeight) - this.state.runningWeight
    if(this.state.runningWeight == 0)
      tempDiff = 0
    var today = new Date()
    var newDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    tempList.push({'date': newDate, 'weight': this.state.addWeight, 'diff': tempDiff})

    if(this.state.runningWeight == 0){
      this.state.runningWeight = this.state.addWeight
    }
    console.log(tempList)
    this.setState({
      runningWeight: tempWeight,
      addWeight: "",
      weightList: tempList,

    })
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
    return (
      <View style={Weight.wrapper}>
        {/********************************************************************/}
        {/*HEAD*/}
        <View style={Weight.header}>
          <Text style={Weight.text}>{this.props.navigation.state.routeName}</Text>

        </View>
        {/********************************************************************/}

        {/********************************************************************/}
        {/*INPUT*/}
        <View style={Weight.input}>
          <View style={Weight.inputWrap}>
            <Icon
              name='squared-minus'
              type='entypo'
              color='#000000'
              size={38}
              onPress={() => console.log('MINUS')}
            />
            <TextInput
              style={Weight.inputBox}
              keyboardType='numeric'
              onChangeText={(addWeight) => this.setState({addWeight})}
              value={this.state.addWeight}
            />

            <Icon
              name='squared-plus'
              type='entypo'
              color='#000000'
              size={38}
              onPress={() => console.log('ADD')}
            />
          </View>

          <Button
            icon={{name: 'check', size: 22}}
            buttonStyle={{backgroundColor: 'red', borderRadius: 10, marginVertical: 2}}
            textStyle={{textAlign: 'center'}}
            title={`Submit`}
            onPress={this.submitWeight.bind(this)}
          />

        </View>
        {/********************************************************************/}

        {/********************************************************************/}
        {/*BODY*/}
        <View style={Weight.body}>
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


            {/*{this.showUserKeys(keys)}*/}
          </ScrollView>
          {/*<VictoryChart><VictoryCandlestick data={candleData}/></VictoryChart>*/}
        </View>
        {/********************************************************************/}



      </View>

    );
  }
}
