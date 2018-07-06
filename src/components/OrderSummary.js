import React from 'react';
import {connect} from 'react-redux';
import Order from './Order.js'

const OrderSummary = (props) => {
  let OrderSummary = props.cart.map((item,index)=>
    <Order cart={props.cart} item={item}/>)
  return(
    <li>
      {OrderSummary}
      <button>Submit</button>
    </li>
  )
}

function mapStateToProps(state){
  return {
    cart:state.order
  }
}

export default connect(mapStateToProps)(OrderSummary)