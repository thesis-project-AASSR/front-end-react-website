import * as api from '../Api/index.js';

// now we have create action 
 // Action creators
 export const getOrders = () => async (dispatch) => {
  // the idea of using async is : we work with async data to feach all the items so some time we have to pass it 
  // to do that we will use thunk it allow as to make additionall arrow function that will dispatch the action
  //to make every think /work as we want  by try and catch 

    try {
      const { data } = await api.fetchOrders();
      console.log(data)
      dispatch({ type: "FETCH_ALL", payload: data });
      console.log("data:",data)
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

  export const updateOrder = (id, order) => async (dispatch) => {
    try {
      const { data } = await api.updateOrder(id, order);
   
  
      dispatch({ type: "UPDATE", payload: id, order });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteOrder = (id) => async (dispatch) => {
    try {
     const {data}=await api.deleteOrder(id);
 
  
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  