// Author: Tyler Quayle
// File: Styles/Weight.js
// Date: 12/7/2017
// Desc: Style guide for anything in the 'weight' sub-app.

import { StyleSheet } from 'react-native'
import { BG_COLOR, TEXT_COLOR } from './Colors'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: BG_COLOR,
  },
  header:{
    flex: .1,
    alignItems: 'center',
  },
  input:{
    flex: .15,
    alignItems: 'center',
  },
  body:{
    flex: .75,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputWrap:{
    flexDirection: 'row',
  },
  inputBox:{
    height: 40,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center'
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    color: TEXT_COLOR,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: TEXT_COLOR,
    marginBottom: 5,
  },
});
