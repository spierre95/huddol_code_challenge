
import {createStore,applyMiddleware,compose,combineReducers} from "redux"
import dataService from '../services/data-service'
import orderReducer from '../reducers/OrderReducer.js'


const rootReducer = combineReducers({
  order:orderReducer

})

const store = createStore(rootReducer)

export default store