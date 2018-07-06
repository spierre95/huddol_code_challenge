const orderReducer = (state=[],action)=>{
  switch(action.type){
    case "ADD":
    return [...state,action.payload]
    case 'REMOVE':
    const firstIndex = state.indexOf(action.payload)
    return state.filter((item,index) => index !== firstIndex)
    default:
    return state
  }
}

export default orderReducer