import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose} from "redux"
import rootReducer from "./reducers/RootReducer"
import {Provider} from "react-redux"
import dataService from './services/data-service'



const store = createStore(rootReducer,{resturantList:[]},applyMiddleware(dataService))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

store.dispatch({ type: 'GET_DATA' })
