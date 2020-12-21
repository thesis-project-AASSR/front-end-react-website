<<<<<<< HEAD
import { combineReducers } from 'redux';
import orders from './index';
import user from './authReducer';
import saveduser from './authInReducer';
export default combineReducers({ orders, user, saveduser });
=======
 const Items = (state = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
       return action.payload;
       case "CREATE":
      return [...state, action.payload];
        default:
        return state;
    }
  };

  export default Items;

>>>>>>> 2f299135a1ed1ae0763017f1159069fb19e7db48
