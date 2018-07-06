import React from 'react';
import {connect} from 'react-redux';
import Order from './Order.js'

const OrderSummary = (props) => {

  let OrderSummary = props.cart.map((item,index)=>
    <Order cart={props.cart} item={item}/>)

  const total = () => {
   let total = 0
   props.cart.forEach((item)=>{
      total += item.price
   })
   return total
  }

  return(
  <div>
    <h2>Order Summary</h2>
      <ul>
        {OrderSummary}
      </ul>
    <p>total: {total()}</p>
    <button onClick= {() => props.placeOrder(props.cart)}>Submit</button>
  </div>

  )
}

function mapStateToProps(state){
  console.log(state)
  return {
    cart:state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    placeOrder:(item) =>{
      dispatch({type:"PLACE_ORDER", payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderSummary)