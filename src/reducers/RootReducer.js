import {ADD_ITEM,REMOVE_ITEM} from '../actions/actionCreators';
import axios from 'axios';

export default function rootReducer(state, action) {
  console.log(state)
  switch(action.type){
  case 'DATA_RECEIVED':
  debugger
  const resturantList = {
    "resturantList":action.data
  }
  return resturantList
  default:
    debugger
  return state
  }
}

  // case ADD_ITEM:
    //   let newState = {...state};
    //   newState.id++
    //   return {
    //     ...newState,

    //   }
    // case REMOVE_ITEM:
    //   return state