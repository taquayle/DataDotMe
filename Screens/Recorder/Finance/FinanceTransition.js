// Author: Tyler Quayle
// Date: 12.20.2017
// File: Finance/FinanceTransition
// Desc: Transition screen from home to Finance

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

/******************************************************************************/
// Stores

export class FinanceTransitionScreen extends React.Component {
  componentWillMount(){
    console.log("Current Screen: " + this.props.navigation.state.routeName)
    const { navigate } = this.props.navigation;
    navigate('FinanceHome')
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
          <Image source={require('../../Images/Finance.png')} style={Style.logo}/>
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
