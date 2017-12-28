// Author: Tyler Quayle
// Date: December 4, 2017
// File: Styles/Style.js
// Desc: Default style sheet for the app.

import { StyleSheet } from 'react-native'
import { BG_COLOR, TEXT_COLOR } from './Colors'
export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: BG_COLOR,
  },
  header:{
    flex: .08,
    alignItems: 'center',
  },
  body:{
    flex: .52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feed:{
    flex: .4,
    alignItems: 'center',
  },

  grid: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column'
  },
  cell:{
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    color: TEXT_COLOR,
    marginBottom: 5,
  },
  logo:{
    resizeMode: 'contain',
    height: 45,
    backgroundColor: 'transparent'
  }
});
