import React, { Component } from 'react';
import axios from 'axios';
import Resturant from './Resturant.jsx'
import {connect} from "react-redux"

class ResturantList extends Component{
  constructor(props){
    super(props);
  }

render(){
  console.log(this.props)
let resturantList = this.props.resturants.map((resturant,index) => <Resturant resturant={resturant.name} key={index}/>)
return(
<div>
  <ul>{resturantList}</ul>
</div>
)
}

}

function mapStateToProps(reduxState){
console.log(reduxState)
  return {
    resturants: reduxState.resturantList
  }
}

export default connect(mapStateToProps)(ResturantList)

