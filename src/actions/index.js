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
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const purchaseProcess = (purchaseInfo) => async (dispatch) => {
    try {
      const {data} = await api.payPal(purchaseInfo);
      
      dispatch({ type: 'PURCHASE', payload: data });
      console.log("DISPATCH(ADD) : ", purchaseInfo )
    } catch (error) {
      console.log(error.message);
    }
  };
  
  