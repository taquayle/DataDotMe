// Author: Tyler Quayle
// Date: December 27, 2018
// File: Stores/SpendingStore.js
// Desc: Store to hold the Spending information

import {observable } from "mobx"
import {AsyncStorage} from "react-native"

class  SpendingStore{
  @observable spendingHistory = null
  @observable spendingCategory = null

  /****************************************************************************/

  /****************************************************************************/
  resetData(){
    this.setSpendingHistory(null)
    this.setSpendingCategory(null)
  }

  /****************************************************************************/

  /****************************************************************************/
  async deleteData(){
    await this.storageDeleteHandler('@SpendingHistory')
    await this.storageDeleteHandler('@SpendingCategory')
  }

  /****************************************************************************/

  /****************************************************************************/
  async storageDeleteHandler(key){
    try{
      console.log("Removing: " + key)
      await AsyncStorage.removeItem(key)
      console.log("Removed")
    } catch(e){
      console.log("Error while removing " + key + ": " + e)
    }
  }

  /****************************************************************************/

  /****************************************************************************/
  async loadAsync(){
    console.log("Starting SpendingStore Retrieval...")
    this.setSpendingHistory(JSON.parse(await this.storageGetHandler('@SpendingHistory')))
    this.setSpendingCategory(JSON.parse(await this.storageGetHandler('@SpendingCategory')))
    console.log("Ending SpendingStore Retrieval...")
  }

  /****************************************************************************/

  /****************************************************************************/
  async storageGetHandler(key){
    try{
      console.log("Retrieving: " + key)
      const temp = await AsyncStorage.getItem(key)
      if(temp !== null){
        console.log("Successfully Retrieved " + key)
        console.log(temp)
        return temp
      }
      else{
        console.log(key + " Not found, returning null")
        return null
      }
    } catch(e){
      console.log("Failed to retrieve " + key + ": " + e)
    }
  }

  /****************************************************************************/

  /****************************************************************************/
  async updateAsync(historyObj, categoryObj){
    console.log("Starting SpendingStore Retrieval...")
    await this.storageSetHandler('@SpendingHistory', JSON.stringify(historyObj))
    await this.storageSetHandler('@SpendingCategory', JSON.stringify(categoryObj))
  }

  /****************************************************************************/

  /****************************************************************************/
  async storageSetHandler(key, value){
    try{
      console.log("Setting: " + key)
      await AsyncStorage.setItem(key, value)
    } catch(e){
      console.log("Error while setting " + key + ": " + e)
    }
  }

  /****************************************************************************/
  setSpendingHistory(arrObj){ this.spendingHistory = arrObj}

  getSpendingHistory(){ return this.spendingHistory }
  /****************************************************************************/

  /****************************************************************************/
  setSpendingCategory(arrObj){ this.spendingCategory = arrObj}

  getSpendingCategory(){ return this.spendingCategory }
  /****************************************************************************/
}

var UserSpending = new SpendingStore()

export default UserSpending
