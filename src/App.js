import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResturantList from './components/ResturantList.jsx'
import Router from "./Router"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Resturants</h1>
        <ResturantList/>
      </div>
    );
  }
}

export default App;
