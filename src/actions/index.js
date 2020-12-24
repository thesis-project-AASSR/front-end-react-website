import * as api from '../Api/index.js';
// I am retreiving all the items and Dispatching them
export const getALLItems = () => async (dispatch) => {
  try {
 
    const {data} = await api.fetchOrders()
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

//action to add a new user
export const createUser = (user) => async (dispatch) => {
  try {
    const {data} = await api.createUser(user)
    dispatch({ type: "ADD", payload: user});
    console.log("DISPATCH(ADD) : ", dispatch({ type: "ADD", payload: user}))
    alert('Congrats, you are registered successfully, you can login now')
  } catch (error) {
    console.log(error.message);
    alert('email already exists') 
  }
};

//action to check if user is saved to sign in
export const checkUser = (saveduser) => async (dispatch) => {
  try {
    const {data} = await api.checkUser(saveduser);
    dispatch({ type: "CHECK", payload: data });
    console.log("DISPATCH(CHECK) : ", dispatch({ type: "CHECK", payload: data.result[0].userID}));
    localStorage.setItem('token',data.token )
    localStorage.setItem('UserId',data.result[0].userID )
    // window.location = '/';
  } catch (error) {
    console.log(error.message);
    alert("email or password is incorrect");
  }
};
// getting the admin info
export const getAdmin = () => async (dispatch) => {
  try {
    const {data} = await api.AdminProfile();

    dispatch({ type: 'AdminInfo', payload: data });
  
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const {data} = await api.UserProfile();
      
    dispatch({ type: 'UserInfo', payload: data });
  
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







