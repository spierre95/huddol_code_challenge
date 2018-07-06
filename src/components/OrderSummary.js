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
    <button>Submit</button>
  </div>

  )
}

function mapStateToProps(state){
  return {
    cart:state.order
  }
}

export default connect(mapStateToProps)(OrderSummary)