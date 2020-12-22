// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const reducers = (orders = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
    
      return action.payload;
   case "CREATE":
      return [...orders, action.payload];
      case "UPDATE":
      return orders.map((order) => (order.itemID === action.payload.itemID ? action.payload : order));
      case "DELETE":
        return orders.filter((order) => order.itemID !== action.payload);
    default:
      return orders;
  }
};

export default reducers;