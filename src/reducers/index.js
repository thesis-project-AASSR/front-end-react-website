// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';


const reducers = (orders = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
    
      return action.payload;
   case "CREATE":
      return [...orders, action.payload];
      case "UPDATE":
      return action.payload;
      case "DELETE":
        return action.payload;
    default:
      return orders;
  }
};

import { combineReducers } from 'redux';
import Items from './reducer.js';
import Profiles from './profiles.js';
import AuthReducer from './authReducer'
import authInReducer from './authInReducer'
const AllReducers = combineReducers({ Items,AuthReducer,authInReducer,Profiles });

export default  AllReducers;


