// Author: Tyler Quayle
// File. WeightHome.js
// Date: December 5, 2017
// Desc: Homescreen for the weight recorder


import React from 'react';
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'
import { Text, View, StyleSheet, Image, BackHandler, Platform, TextInput, ScrollView} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryBar } from "victory-native";


export class WeightHomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
  }

  componentDidMount(){
    console.log(this.state.weightList)
  }
  
  constructor(props){
    super(props)
    this.state = {  addWeight: "",
                    newUser: true,
                    weightList: [{'date': "NO DATA", 'weight': 0, 'diff': 0}],
                    runningWeight: 0,};
  }


  submitWeight(){
    if(this.state.addWeight == "") // Check if something has been entered
      return;
    var tempList = this.state.weightList.slice();
    if(this.state.newUser){
      tempList = []
    }
    var tempWeight = this.state.addWeight
    var tempDiff = parseInt(this.state.addWeight) - this.state.runningWeight

    if(this.state.runningWeight == 0)
      tempDiff = 0
    var today = new Date()
    var newDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    tempList.push({'date': newDate, 'weight': this.state.addWeight, 'diff': tempDiff})

    console.log(tempList)
    this.setState({
      runningWeight: tempWeight, // 'last' weight entered
      addWeight: "",
      weightList: tempList,
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
          <VictoryChart>
            <VictoryBar
              data={this.state.weightList}
              x="date"
              y="weight"
            />
          </VictoryChart>
        </View>
        {/********************************************************************/}



      </View>

    );
  }
}
