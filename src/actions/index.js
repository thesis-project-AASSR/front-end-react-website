


 // the besic syntax of action 
 // action take two things (type proparty for this action , data it self  where we store our items which called payload)
 //  const action ={type:'FETCH_ALL',payload:[]}

import * as api from '../Api/index.js';

// now we have create action 
 // Action creators
 export const getOrders = () => async (dispatch) => {
  // the idea of using async is : we work with async data to feach all the items so some time we have to pass it 
  // to do that we will use thunk it allow as to make additionall arrow function that will dispatch the action
  //to make every think /work as we want  by try and catch 

    try {
      const { data } = await api.fetchOrders();
  
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
  

