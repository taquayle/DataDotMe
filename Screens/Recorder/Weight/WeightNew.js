// Author: Tyler Quayle
// File. Weight/WeightNew.js
// Date: December 20, 2017
// Desc: Screen that will popup if the user is new to ask for intial details,
//

/******************************************************************************/
// React & Add-ons
import  React  from 'react'
import { Text, View, StyleSheet, Image, BackHandler,
  Platform, TextInput, ScrollView, AsyncStorage} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon, FormValidationMessage,
  Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import {observable} from "mobx"
import {observer} from "mobx-react"
/******************************************************************************/
// Style Sheets
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'

/******************************************************************************/
// Stores
import UserWeight from '../../Stores/WeightStore'

@observer
export class WeightNewScreen extends React.Component {


  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)}


  @observable addWeightError = ''
  @observable targetWeightError = ''
  componentDidMount(){

  }

  constructor(props) {
    super(props);
    this.state = {  addWeight: "",
                    newUser: true,
                    weightList: null,
                    runningWeight: 0,
                    targetWeight: null};
  }

  /****************************************************************************/
  // SubmitWeight
  //  Grab weight from textinput and insert it into this.state.weightList
  //  @return updated states
  /****************************************************************************/
  async _submit(){
    if(this.state.addWeight <= 0) // Check if something has been entered
      return;
    var tempList = []
    var tempWeight = this.state.addWeight
    var tempTarget = this.state.targetWeight
    var today = new Date()
    var newDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    var newTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    tempList.push({'time': newTime, 'date': newDate,
                    'weight': parseInt(this.state.addWeight), 'diff': 0,
                    'color': "#999999"
                  })

    await UserWeight.updateAsync(tempList, tempWeight, tempTarget)
    UserWeight.setTargetWeight(tempTarget)
    UserWeight.setWeightList(tempList)
    UserWeight.setRunningWeight(tempWeight)
    const { navigate } = this.props.navigation;
    navigate('WeightHome')
  }


  render() {
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


        {/******************************************************************/}
        {/* Username Field */}
        <FormLabel>Current Weight</FormLabel>
        <FormValidationMessage>{this.addWeightError}</FormValidationMessage>
        <FormInput
          defaultValue = {this.state.addWeight}
          keyboardType='numeric'
          onChangeText={(addWeight) => this.setState({addWeight})}
        />
        {/******************************************************************/}




          {/******************************************************************/}
          {/* Email Field */}
          <FormLabel>TargetWeight</FormLabel>
          <FormValidationMessage>{this.targetWeightError}</FormValidationMessage>
          <FormInput
            defaultValue = {this.state.targetWeight}
            keyboardType='numeric'
            onChangeText={(targetWeight) => this.setState({targetWeight})}
          />

        <Button
          icon={{name: 'check', size: 22}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10, marginVertical: 2}}
          textStyle={{textAlign: 'center'}}
          title={`Submit`}
          onPress={this._submit.bind(this)}
        />
        </View>
        {/********************************************************************/}

        {/********************************************************************/}
        {/*FEED*/}
        <View style={Style.feed}>

        </View>
        {/********************************************************************/}

      </View>
    );
  }
}
