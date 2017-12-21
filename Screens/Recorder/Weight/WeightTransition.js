// Author: Tyler Quayle
// Date: December 20, 2017
// File: Weight/WeightTransition
// Desc: Transition screen for the weight sub-app.

/******************************************************************************/
// React & Add-ons
import  React  from 'react'
import { Text, View, StyleSheet, Image, BackHandler,
  Platform, TextInput, ScrollView, AsyncStorage} from 'react-native'
import { Button, SideMenu, List, ListItem, Icon,
  Header, Divider, FormInput, FormLabel } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
/******************************************************************************/
// Style Sheets
import Style  from '../../Styles/Main'
import Weight from '../../Styles/Weight'

/******************************************************************************/
// Stores
import UserWeight from '../../Stores/WeightStore'

export class WeightTransitionScreen extends React.Component {
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
    const { navigate } = this.props.navigation;
    if(UserWeight.getWeightList() == null){ //User has no info yet
      navigate('WeightNew')}
    else{
      navigate('WeightHome')
    }
  }

  componentDidMount(){

  }

  constructor(props) {
    super(props);
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
          <Image source={require('../../Images/WeightScale.png')} style={Style.logo}/>
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
