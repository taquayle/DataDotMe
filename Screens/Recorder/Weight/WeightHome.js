// Author: Tyler Quayle
// File. WeightHome.js
// Date: December 5, 2017
// Desc: Homescreen for the weight recorder

/******************************************************************************/
// React-native includes
import React from 'react';
import { Text, View, StyleSheet, Image, BackHandler, Platform, TextInput, ScrollView} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryBar } from "victory-native";
import Swiper from 'react-native-swiper'

/******************************************************************************/
// Style Sheets
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'

/******************************************************************************/
import {WeightGraphScreen} from './WeightGraph'

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
                    weightList: [{'time': null, 'date': null, 'weight': 0, 'diff': 0}],
                    runningWeight: 0,};
  }


  submitWeight(){
    if(this.state.addWeight == 0) // Check if something has been entered
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
    var newTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    tempList.push({'time': newTime, 'date': newDate, 'weight': this.state.addWeight, 'diff': tempDiff})

    console.log(tempList)
    this.setState({
      runningWeight: tempWeight, // 'last' weight entered
      addWeight: 0,
      weightList: tempList,
      newUser: false
    })
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

  showList(){
    if(this.state.newUser)
    {
      return(<Text>NO DATA</Text>)
    }
    else{
      return(
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
      )
    }
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
              {this.showChart()}
              {this.showList()}
            </Swiper>

        </View>
        {/********************************************************************/}



      </View>

    );
  }
}
