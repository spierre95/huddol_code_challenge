import React, { Component } from 'react';

const Menu = ({menu}) => {
  let menuItems = menu.map((menuItem,index)=> <ul><li>{menuItem.name} price:{menuItem.price}</li></ul>)
  return(
    <li>
      {menuItems}
    </li>
  )

}

export default Menu
