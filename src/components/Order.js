import React, { Component } from 'react';

const Order = (props) => {
const itemsInCart = props.cart.filter((item) =>item.name === props.item.name ).length

  const PriceTotal = () => {
    if(itemsInCart === 0){
      return props.item.price
    }
    return props.item.price * itemsInCart
  }

  return(
    <div>
    <p>{props.item.name}</p>
    <p>Quantity:{itemsInCart}</p>
    <p>{PriceTotal()}</p>
    </div>
  )
}

export default Order
