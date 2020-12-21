import { combineReducers } from 'redux';
import orders from './index';
import user from './authReducer';
import saveduser from './authInReducer';
export default combineReducers({ orders, user, saveduser });