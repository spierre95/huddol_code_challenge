import React, { Component } from 'react';

const MenuItem = (props) => {
  return(
    <li>
      <p>{props.menuItem.name}</p>
      <p>{props.menuItem.price}</p>
      <button onClick= {() => props.addToCart(props.menuItem)}>ADD</button>
    </li>
  )
}

export default MenuItem