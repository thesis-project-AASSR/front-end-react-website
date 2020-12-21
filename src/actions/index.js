import * as api from '../Api/index.js';
// I am retreiving all the items and Dispatching them
export const getALLItems = () => async (dispatch) => {
  try {
    const {data} = await api.fetchOrders();

    dispatch({ type: 'FETCH_ALL', payload: data });
   
  } catch (error) {
    console.log(error.message);
  }
};

 
  export const createOrder = (order) => async (dispatch) => {
    try {
      const { data } = await api.createOrder(order);
  
      dispatch({ type: "CREATE", payload: order });
      console.log( "DISPAATCH(ACTION) :",dispatch({ type: "CREATE", payload: order }))
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createUser = (user) => async (dispatch) => {
    try {
      const {data} = await api.createUser(user);
      dispatch({ type: "ADD", payload: user});
      console.log("DISPATCH(ADD) : ", dispatch({ type: "ADD", payload: user}))
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const checkUser = (saveduser) => async (dispatch) => {
    try {
      const {data} = await api.checkUser(saveduser);
      dispatch({ type: "CHECK", payload: saveduser});
      console.log("DISPATCH(CHECK) : ", dispatch({ type: "CHECK", payload: saveduser}))
    } catch (error) {
      console.log(error.message);
    }
  };
  
