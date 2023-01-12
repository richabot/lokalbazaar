import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { categoryReducer } from "./categoryReducer"

import thunk from "redux-thunk"
const Rootreducer=combineReducers({
  
    categoryReducer

})


// const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
// export const store=legacy_createStore(Rootreducer,composeEnhancer(applyMiddleware(thunk) ))
// when displaying redux devtools using else use below line 

export const store=legacy_createStore(Rootreducer,applyMiddleware(thunk) )