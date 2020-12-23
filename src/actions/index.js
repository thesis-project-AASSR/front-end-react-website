import * as api from '../Api/index.js';
// I am retreiving all the items and Dispatching them
export const getALLItems = () => async (dispatch) => {
  try {
    const {data} = await api.fetchOrders();

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


  export const checkUser = (saveduser) => async (dispatch) => {
    try {
      const {data} = await api.checkUser(saveduser);
      dispatch({ type: "CHECK", payload: data });
      console.log("DISPATCH(CHECK) : ", dispatch({ type: "CHECK", payload: data}));
      localStorage.setItem('token',data.token )
      localStorage.setItem('UserId',data.result[0].userID )
      window.location = '/';
    } catch (error) {
      console.log(error.message);
      alert("email or password is incorrect");
    }
  };
  // getting the admin info

  
  

  export const createUser = (user) => async (dispatch) => {
    try {
      const {data} = await api.createUser(user);
      dispatch({ type: "ADD", payload: user});
      console.log("DISPATCH(ADD) : ", user )

  export const updateOrder = (id, order) => async (dispatch) => {
    try {
      const { data } = await api.updateOrder(id, order);
   
  
      dispatch({ type: "UPDATE", payload: id, order });

    } catch (error) {
      console.log(error.message);
    }
  };
  

  export const getPrice = () =>  {
    try {
      const costs = {Iron: 5,
                      wood:4,
                      glass:3,
                      plastic:2
                    }
  
      
     return costs

  
<
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    const { data } = await api.updateOrder(id, order);
    dispatch({ type: "UPDATE", payload: order });
    console.log(order)
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteOrder = (id) => async (dispatch) => {
  try {
    await await api.deleteOrder(id);
    dispatch({ type: 'DELETE', payload: id });
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

