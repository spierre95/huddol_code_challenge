import React, { Component } from 'react';

const MenuItem = (props) => {

  const itemsInCart = props.cart.filter((item) =>item.name === props.menuItem.name ).length

  const PriceTotal = () => {
    if(itemsInCart === 0){
      return props.menuItem.price
    }
    return props.menuItem.price * itemsInCart
  }
  return(
    <li>

      <p>{props.menuItem.name} x {itemsInCart}</p>
      <p>Price:{props.menuItem.price}</p>
      <p>Totol:{PriceTotal()}</p>
      <button onClick= {() => props.addToCart(props.menuItem)}>ADD
      </button>
    </li>
  )
}

export default MenuItem