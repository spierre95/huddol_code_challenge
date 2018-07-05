import {ADD_ITEM,REMOVE_ITEM} from '../actions/actionCreators';
import axios from 'axios';

const initialState = () => {

axios.get("https://huddolapi-next.herokuapp.com/v1/challenge")
  .then((res)=>{
    setInitialState(res.data)
  })
  .catch((err)=>{
    console.error(err)
  })
}

const setInitialState = (response) =>{
  return {"resturantList":response}
}

export default function rootReducer(state = setInitialState(),action){
  console.log(state)
  switch(action.type){
    case ADD_ITEM:
      let newState = {...state};
      newState.id++
      return {
        ...newState,

      }
    case REMOVE_ITEM:
      return state
    default:
    return state
  }
}
