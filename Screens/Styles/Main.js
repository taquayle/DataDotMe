// Author: Tyler Quayle
// File. Style.js
// Date: December 4, 2017
// Desc: Default style sheet for the app.

import { StyleSheet , BackHandler} from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
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
    color: '#333333',
    marginBottom: 5,
  },
  logo:{
    resizeMode: 'contain',
    height: 45,
    backgroundColor: 'transparent'
  }
});
