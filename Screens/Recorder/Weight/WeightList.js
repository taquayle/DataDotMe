// Author: Tyler Quayle
// Date: December 12, 2017
// File: Weight/WeightList.js
// Desc: Screen shown when swiped right, showing list of entered weight.

import React from 'react';
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'
import { Text, View, StyleSheet, Image, BackHandler, Platform, TextInput, ScrollView} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryBar } from "victory-native";


class WeightListDisplay{
  /****************************************************************************/
  // weightIcon(diff)
  //  Given the current [diff] between last weight and current. return
  //  corresponding icon, green for weightloss or red for weightgain
  //  @input diff, the current difference of array
  //  @return react-native-elements icon
  /****************************************************************************/
  weightIcon(diff, color){
    var name = 'squared-minus'

    if(diff > 0){
      name = 'arrow-bold-up'
    }
    if(diff < 0){
      name = 'arrow-bold-down'
    }
    return ({name: name,
    type:'entypo',
    color: color,})
  }

  /******************************************************************************/
  // showList()
  //  Displays a react-native-elements list.
  // @return react-native-elements list
  /******************************************************************************/
  showList(listObj, newUser){
    if(newUser)
    {
      return(<Text>NO DATA</Text>)
    }
    else{
      return(
        <ScrollView >
          <List>
          {
            listObj.map((k, i) => (
              <ListItem
                hideChevron
                key={i}
                title={k['date']}
                rightTitle={k['weight'] + " " + k['diff']}
                rightIcon={this.weightIcon(parseInt(k['diff']), k['color'])}
                leftIcon={this.weightIcon(parseInt(k['diff']), k['color'])}
              />
            ))
          }
          </List>
        </ScrollView>
      )
    }
  }
}

var WeightList = new WeightListDisplay()

export default WeightList
