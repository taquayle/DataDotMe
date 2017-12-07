// Author: Tyler Quayle
// File. Style.js
// Date: December 4, 2017
// Desc: Default style sheet for the app.

import { StyleSheet , BackHandler} from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  row1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  row2: {
    flex: 1,
    backgroundColor: 'green',
  },
  row3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  row4: {
    flex: 1,
    backgroundColor: 'yellow',
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
