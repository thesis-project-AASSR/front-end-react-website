import React, { useEffect , useState } from 'react';
import { getALLItems ,checkUser } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {  Link} from "react-router-dom" ;
import { updateOrder,deleteOrder } from '../../actions/index';

const SellerItems =({currentId}) =>{
    const dispatch = useDispatch();

    // const [orderData, setOrderData] = useState({  category: '', quantity: '', wights: '', description: ''})
    var Userb = localStorage.getItem('UserId')
    const [loggedin,setLoggedin] = useState(Userb)

    // useSelector(state => state.authInReducer[0])
    const orders = useSelector(state => state.Items)
    
   
    useEffect(() => {
      
      dispatch(getALLItems());
    }, [dispatch]);
   


   
   
    return (

<div>
          {orders.filter ( order  => order.user_id == loggedin
         ).map((post) => (
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
                <button  type="submit" onClick={() =>dispatch(deleteOrder(post.itemID))}>Delete</button>
                {/* <input type="submit" value="Update Admin" className="btn btn-primary" /> */}
                </div>

                





        </div>
       
          ))}
           </div>
    )

}

export default SellerItems;