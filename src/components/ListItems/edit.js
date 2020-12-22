import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../../actions/index';



const editItems =({currentId}) =>{
    const dispatch = useDispatch();

    const [orderData, setOrderData] = useState({  category: '', quantity: '', wights: '', description: ''})

    const orders = useSelector(state => state.Items)
   
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);

    // useEffect(()=>{
    //     dispatch(getOrders());    // here we want to dispatch an action so we need to creat an action 
    //   })

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
                <button type="submit" onClick= {onSubmitupdate} className="btn btn-deep-orange darken-4">submit</button>
                {/* <button  type="submit" onClick={() => dispatch(deleteOrder(order._id))}>Delete</button> */}
                </div>







        </div>
       
          ))}
           </div>
    )

}

export default editItems;