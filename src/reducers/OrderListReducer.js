const orderListReducer = (state=[],action)=>{
  switch(action.type){
    case "PLACE_ORDER":
    return [...state,action.payload]
    default:
    return state
  }
}

export default orderListReducer