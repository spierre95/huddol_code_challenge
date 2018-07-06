import React, { Component } from 'react';
import axios from 'axios';
import Resturant from './Resturant.jsx'
import Menu from './Menu.jsx'
import {connect} from "react-redux"

class ResturantList extends Component{
  constructor(props){
    super(props)
    this.state = {
      resturants:[]
    }
  }

 componentDidMount() {

    axios.get(`https://huddolapi-next.herokuapp.com/v1/challenge`)
      .then(res => {
        console.log(res)
        const resturants = res.data;
        this.setState({ resturants })
    })
}

render(){
console.log(this.state)

let resturantList = this.state.resturants.map((resturant,index) =>
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


export default ResturantList

