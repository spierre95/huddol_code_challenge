import React, { Component } from 'react';
import {connect} from 'react-redux';
import MenuItem from './MenuItem.js';

const Menu = (props) => {
  let menuItems = props.menu.map((menuItem,index)=>
    <MenuItem addToCart={props.addToCart} menuItem={menuItem} cart={props.cart}/>)
  return(
    <li>
      {menuItems}
    </li>
  )
}

function mapStateToProps(state){
  return {
    cart:state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart:(item) =>{
      dispatch({type:"ADD", payload:item})
    },
    removeFromCart:(item) => {
      dispatch({type:"REMOVE", payload:item})
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Menu)


