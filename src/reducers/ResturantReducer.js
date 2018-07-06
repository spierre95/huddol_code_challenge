import axios from 'axios';

export default function resturantReducer(state=[], action) {
  switch(action.type){
  case 'DATA_RECEIVED':
  debugger
return  {
    "resturantList":action.data
  }

  default:
  debugger
  return {"resturantList":state}
  }
}

