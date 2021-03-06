// Author: Tyler Quayle
// Date: December 5, 2017
// File: Weight/WeightHome.js
// Desc: Homescreen for the weight recorder

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
import Weight from '../../Styles/Weight'

/******************************************************************************/
// Stores
import UserWeight from '../../Stores/WeightStore'

/******************************************************************************/
// Display Helpers
import WeightGraph from './WeightGraph'
import WeightList from './WeightList'

export class WeightHomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
  }

  componentDidMount(){
    if(UserWeight.getWeightList() != null){
      temp = UserWeight.getWeightList()
      this.setState({
        weightArray: temp.peek(),
        newUser: false,
        runningWeight: UserWeight.getRunningWeight(),
        targetWeight: UserWeight.getTargetWeight()
      })
    }

    BackHandler.addEventListener('hardwareBackPress', function() {
      this.props.navigation.navigate('Home');
      return true //Tell react-navigation that back button is handled
    }.bind(this));
  }

  /****************************************************************************/
  // addWeight: input from user that will be inserted into weight List
  // newUser: Just set to true by default to display 'no data'
  // weightArray: array containing the weight data
  // runningWeight: last weight entered.
  // targetWeight: user entered goal to weight.
  /****************************************************************************/
  constructor(props){
    super(props)
    this.state = {  addWeight: "",
                    newUser: true,
                    weightArray: null,
                    runningWeight: 0,
                    targetWeight: null};
  }


  /****************************************************************************/
  // SubmitWeight
  //  Grab weight from textinput and insert it into this.state.weightArray
  //  @return updated states
  /****************************************************************************/
  submitWeight(){
    if(this.state.addWeight == 0) // Check if something has been entered
      return;
    var tempList = this.state.weightArray
    if(this.state.newUser){
      tempList = []
    }
    var tempWeight = this.state.addWeight
    var tempDiff = parseInt(this.state.addWeight) - this.state.runningWeight

    if(this.state.runningWeight == 0)
      tempDiff = 0
    var today = new Date()
    var newDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    var newTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var color = "#999999"
    if(tempDiff > 0)
      color = "#FF0000"
    if(tempDiff < 0)
      color = "#00FF00"
    tempList.push({'time': newTime, 'date': newDate,
                    'weight': parseInt(this.state.addWeight), 'diff': tempDiff,
                    'color': color
                  })

    UserWeight.updateAsync(tempList, tempWeight)
    this.setState({
      runningWeight: tempWeight, // 'last' weight entered
      addWeight: 0,
      weightArray: tempList,
      newUser: false
    })


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
              onSubmit={this.submitWeight.bind(this)}
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
          <Swiper>

            {WeightGraph.showGraph(this.state.weightArray, this.state.newUser)}
            {WeightList.showList(this.state.weightArray, this.state.newUser)}
          </Swiper>
        </View>
        {/********************************************************************/}

      </View>

    );
  }
}
