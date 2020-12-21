// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import { combineReducers } from 'redux';
import Items from './reducer.js';
import AuthReducer from './authReducer'
import authInReducer from './authInReducer'
const AllReducers = combineReducers({ Items,AuthReducer,authInReducer });

export default  AllReducers;

