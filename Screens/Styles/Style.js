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
