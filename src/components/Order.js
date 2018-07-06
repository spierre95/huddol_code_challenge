import React, { Component } from 'react';

const Order = (props) => {
const numberOfItems = props.cart.filter((item) =>item.name === props.item.name ).length

  const PriceTotal = () => {
    if(numberOfItems === 0){
      return props.item.price
    }
    return props.item.price * numberOfItems
  }

  return(
    <div>
      <li>
        <p>{props.item.name}</p>
        <p>Quantity:{numberOfItems}</p>
        <p>{PriceTotal()}</p>
      </li>
    </div>
  )
}

export default Order
