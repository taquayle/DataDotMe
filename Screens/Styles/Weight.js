// Author: Tyler Quayle
// File: Styles/Weight.js
// Date: December 7, 2017
// Desc: Style guide for anything in the 'weight' sub-app.

import { StyleSheet } from 'react-native'
import { BG_COLOR, TEXT_COLOR } from './Colors'

export default StyleSheet.create({
  // Universal Layout
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: BG_COLOR,
  },
  header:{
    flex: .1,
    alignItems: 'center',
  },

  // Weight Home layout
  input:{
    flex: .15,
    alignItems: 'center',
  },
  body:{
    flex: .75,
  },

  // Weight List Layout
  listBody:{
    flex: .9,
  },

  // For weight input selections
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

  // Text styling
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
