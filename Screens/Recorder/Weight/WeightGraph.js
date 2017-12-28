// Author: Tyler Quayle
// Date: December 13, 2017
// File: Weight/WeightGraph.js
// Desc: Screen shown when swiped right twice, show a graph

import React from 'react';
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'
import { Text, View, StyleSheet, Image, BackHandler, Platform, TextInput, ScrollView} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import {  VictoryChart, VictoryBar } from "victory-native";

class WeightGraphDisplay {

  /****************************************************************************/
  // showGraph()
  //  Display the graph showing the users weight.
  //  @return react-victorybar
  /****************************************************************************/
  showGraph(listObj, newUser){
    if(newUser)
    {
      return(<Text>NO DATA</Text>)
    }
    else{
      var tempData = listObj
      return(

        <VictoryChart>
          <VictoryBar

            alignment="start"
            data={tempData}
            x='time'
            y='weight'
            style={{
              data: {
                fill: (tempData) => tempData.color,
                stroke: (tempData) => tempData.color,
                fillOpacity: 0.7,
                strokeWidth: 3
              },
              labels: {
                fontSize: 15,
                fill: (tempData) => tempData.color
              }
            }}

          />
        </VictoryChart>
      )
    }
  }
}

var WeightGraph = new WeightGraphDisplay()
export default WeightGraph
