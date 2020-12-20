// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const reducers = (orders = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
    
      return action.payload;
   case "CREATE":
      return [...orders, action.payload];
    default:
      return orders;
  }
};

export default reducers;