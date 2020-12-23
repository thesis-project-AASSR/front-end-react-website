import React, { useEffect , useState } from 'react';

import { getOrders } from '../../actions';


import { useDispatch,useSelector } from 'react-redux';
import { updateOrder,deleteOrder } from '../../actions/index';
import {  Link} from "react-router-dom" ;
const SellerItems =({  }) =>{


    const dispatch = useDispatch();
    const [orderData, setOrderData] = useState({  category: '', quantity: '', wights: '', description: ''});

    const orders = useSelector(state => state.orders)


    console.log("orders",orders)

import { updateOrder,deleteOrder } from '../../actions/index';

const SellerItems =({currentId}) =>{
    const dispatch = useDispatch();

    const [orderData, setOrderData] = useState({  category: '', quantity: '', wights: '', description: ''})

    const orders = useSelector(state => state.Items)
   

    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);


 
      

  

    

    // useEffect(()=>{
    //     dispatch(getOrders());    // here we want to dispatch an action so we need to creat an action 
    //   })

    const onSubmitupdate = async (e) => {
      e.preventDefault();
      dispatch(updateOrder(currentId, orderData));
    //  window.location='/addItems'
    }

    return (

<div>
          {orders.map((post) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >
          

        category: {post.category}
        <br></br>
        quantity: {post.quantity}
        <br></br>
        weight:{post.weight}
        <br></br>
        description:{post.description}
        <br></br>
        image:{post.image}

        <div>

             
                <Link to ={"/EditItems/"+post.itemID} >update</Link>
                {/* <Link to ={"/delete/:id"} onClick={() => dispatch(deleteOrder(post.itemID))}>Delete</Link> */}
                {/* <button  type="submit" onClick={() => dispatch(deleteOrder(post.itemID))}>Delete</button> */}
                </div>
                



        <div>
                <button type="submit" onClick= {onSubmitupdate} className="btn btn-deep-orange darken-4">update</button>
                {/* <button  type="submit" onClick={() => dispatch(deleteOrder(order._id))}>Delete</button> */}
                </div>








        </div>
        
       
          ))}
           </div>
    )

}

export default SellerItems;