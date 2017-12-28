// Author: Tyler Quayle
// Date: December 4, 2017
// File: Home.js
// Desc: Home screen for Data.me app

/******************************************************************************/
// React-native includes
import React from 'react';
import { Text, View, StyleSheet, Image, BackHandler,
  Platform, TextInput, ScrollView, AsyncStorage} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon,
  Header, Divider, FormInput, FormLabel } from 'react-native-elements'

/******************************************************************************/
// Style Sheets
import Style  from './Styles/Main'

/******************************************************************************/
// Stores
import UserSpending from './Stores/SpendingStore'
import UserWeight from './Stores/WeightStore'

export class HomeScreen extends React.Component{
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
  }

  componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', BackHandler.exitApp)
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
