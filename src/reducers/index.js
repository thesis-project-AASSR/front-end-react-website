// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import { combineReducers } from 'redux';
import Items from './reducer.js';

const AllReducers = combineReducers({ Items });

export default  AllReducers;

