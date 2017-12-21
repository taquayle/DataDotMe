// Author: Tyler Quayle
// Date: 12/13/2017
// File: Stores/WeightStore
// Desc: Store for holding user entered weight

import {observable } from "mobx"
import {AsyncStorage} from "react-native"

class  WeightStore{
  @observable weightList = null
  @observable runningWeight = null
  @observable targetWeight = null

  /****************************************************************************/

  /****************************************************************************/
  resetData(){
    this.setWeightList(null)
    this.setRunningWeight(null)
  }

  /****************************************************************************/

  /****************************************************************************/
  async deleteData(){
    await this.storageDeleteHandler('@WeightList')
    await this.storageDeleteHandler('@RunningWeight')
    await this.storageDeleteHandler('@TargetWeight')
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
    this.setWeightList(JSON.parse(await this.storageGetHandler('@WeightList')))
    this.setRunningWeight(parseInt(await this.storageGetHandler('@RunningWeight')))
    this.setTargetWeight(parseInt(await this.storageGetHandler('@TargetWeight')))
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
  async updateAsync(listObj, runValue){
    await this.storageSetHandler('@WeightList', JSON.stringify(listObj))
    await this.storageSetHandler('@RunningWeight', runValue.toString())
  }
  async updateAsync(listObj, runValue, targetValue){
    await this.storageSetHandler('@WeightList', JSON.stringify(listObj))
    await this.storageSetHandler('@RunningWeight', runValue.toString())
    await this.storageSetHandler('@TargetWeight', targetValue.toString())
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
  setWeightList(arrObj){ this.weightList = arrObj}

  getWeightList(){ return this.weightList }
  /****************************************************************************/

  /****************************************************************************/
  setRunningWeight(obj){ this.runningWeight = obj}

  getRunningWeight(){ return this.runningWeight }
  /****************************************************************************/

  /****************************************************************************/
  setTargetWeight(obj){ this.targetWeight = obj}

  getTargetWeight(){ return this.targetWeight }
  /****************************************************************************/
}

var UserWeight = new WeightStore()

export default UserWeight
