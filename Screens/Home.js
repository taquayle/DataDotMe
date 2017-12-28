// Author: Tyler Quayle
// File. Home.js
// Date: December 4, 2017
// Desc: Home screen for Data.me app


import React from 'react';
import { Router } from './Navigate/Router'
import Style  from './Styles/Main'
import UserWeight from './Stores/WeightStore'
import { Text, View, StyleSheet, Image, BackHandler, Platform, AsyncStorage} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, Header, Divider } from 'react-native-elements'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export class HomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
  }

  constructor(props){
    super(props)
  }

  /****************************************************************************/
  // _deleteAsync()
  //  Temp method to set all data to null.
  _deleteAsync = async() =>{
    console.log('Resetting All Data')
    UserWeight.resetData()
    await UserWeight.deleteData()
  }

  render() {

    const { navigate } = this.props.navigation;

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
          <View style={Style.grid}>
            <View style={Style.col}>

                <View style={Style.cell}>
                    <Button
                      large
                      icon={{name: 'trending-up', size: 32}}
                      buttonStyle={{ borderRadius: 40, marginVertical: 10}}
                      textStyle={{textAlign: 'center'}}
                      title={`Workout`}
                      onPress={() => navigate('WorkoutTrans')}
                    />
                  </View>

                <View style={Style.cell}>
                  <Button
                    large
                    icon={{name: 'trending-up', size: 32}}
                    buttonStyle={{ borderRadius: 40, marginVertical: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Food`}
                    onPress={() => navigate('FoodTrans')}
                  />
                </View>

            </View>

            <View style={Style.col}>
                <View style={Style.cell}>
                  <Button
                    large
                    icon={{name: 'trending-up', size: 32}}
                    buttonStyle={{ borderRadius: 40, marginVertical: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Money`}
                    onPress={() => navigate('SpendingTrans')}
                  />
                </View>

                <View style={Style.cell}>
                  <Button
                    large
                    icon={{name: 'trending-up', size: 32}}
                    buttonStyle={{ borderRadius: 40, marginVertical: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Weight`}
                    onPress={() => navigate('WeightTrans')}
                  />
                </View>

            </View>
            <Button
              large
              icon={{name: 'trending-up', size: 32}}
              buttonStyle={{ borderRadius: 40, marginVertical: 10}}
              textStyle={{textAlign: 'center'}}
              title={`reset`}
              onPress={() => this._deleteAsync()}
            />
          </View>
        </View>
        {/********************************************************************/}

        {/********************************************************************/}
        {/*FEED*/}
        <View style={Style.feed}>
          <Text style={Style.body}>Feeds</Text>
        </View>
        {/********************************************************************/}

      </View>

    );
  }
}
