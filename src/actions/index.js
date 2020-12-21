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
