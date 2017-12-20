// Author: Tyler Quayle
// Date: 12/13/2017
// File: Stores/WeightStore
// Desc: Store for holding user entered weight

import {observable } from "mobx"

class  WeightStore{
  @observable weightList = null

  resetData(){
    this.setWeightList(null)
  }

  /****************************************************************************/
  setWeightList(arrObj){ this.weightList = arrObj}

  getWeightList(){ return this.weightList}
  /****************************************************************************/
}

var UserWeight = new WeightStore()

export default UserWeight
