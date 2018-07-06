import React, { Component } from 'react';
import axios from 'axios';
import Resturant from './Resturant.jsx'
import Menu from './Menu.jsx'
import {connect} from "react-redux"

class ResturantList extends Component{
  constructor(props){
    super(props)
  }

render(){

let resturantList = this.props.resturants.map((resturant,index) =>
  <div>
  <Resturant resturant={resturant.name} key={index}/>
  <Menu menu={resturant.menu} key={index}/>
  </div>
)
return(
<div>
  <ul>
    {resturantList}
  </ul>
</div>
)
}

}

function mapStateToProps(reduxState){
console.log(reduxState.resturantList)
  return {
    resturants: reduxState.resturantList,
  }
}

export default connect(mapStateToProps)(ResturantList);

