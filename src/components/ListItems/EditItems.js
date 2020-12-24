import React, { useState ,useEffect} from 'react';
import { createOrder,updateOrder} from '../../actions/index';
// import { reducers }   from '../../reducers/index';
import { useDispatch,useSelector } from 'react-redux';

const EditItems = (props) => {
    
    const [orderData, setOrderData] = useState({  category: '', quantity: '', weight: '', description: ''});
    const dispatch = useDispatch();
    const currentId =props.match.params.id

    // fetch the data 
//     const order = useSelector((state) => currentId ? state.orders.find((p) => p.itemID === currentId) : null);
// console.log(order)
// console.log(orderData)
const orders = useSelector(state => state.orders)
// var item =local
// const filteredItems = orders.filter(order=> currentId === order.itemID)
// console.log(filteredItems)

    // we will use the useEffect to display the data
    // useEffect(() => {
    //     if (order) setOrderData(order);
    //   }, [currentId,order]);
   
      const onSubmit = async (e) => {
        e.preventDefault();
     
          dispatch(updateOrder(currentId,orderData));
          console.log("orderData",orderData)

        //   clear();
        
      };
      

      
    return (
        <div>
        <h1>Form</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Editing </p>
            <br />
                <div className="col">
                <label>Select Category</label>
                <select
                required="true"
                  className = "form-control"
                   value = {orderData.category}
                  onChange = {(e) => setOrderData({ ...orderData ,category : e.target.value})}
                  text-align = "center"
                 >
                     <option value = "Iron">Iron</option>
                    <option value = "wood">wood</option>
                    <option value = "glass">glass</option>
                    <option value = "plastic">plastic</option>
                    </select>
                    </div>
                     <br />
                <div className="col">
                <label>Quantity</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.quantity}
                  onChange = {(e) => setOrderData({ ...orderData ,quantity : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Quantity"/>
                </div>
                <br />
                <div className="col">
                <label>weight</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.wights}
                  onChange = {(e) => setOrderData({ ...orderData ,weight : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Wights"/>
                </div>
                <br />
                <div className = "col">
                  <label>Description  </label>
                  <input
                    type = "text"
                    required="true"
                    className = "form-control"
                     value = {orderData.description}
                  onChange = {(e) => setOrderData({ ...orderData ,description : e.target.value})}
                    placeholder = " Insert a description "/>
                </div>
                <br />
                {/* <div className = "col">
                            <label>Image</label>
                           <div  id='image' > <img src={this.state.url || "http://via.placeholder.com/50*50"}
                            alt="firebase"  /></div>
                           <input  type="file" onChange={this.handleChangeImage.bind(this)} className="btn btn-deep-orange darken-4" />
                           <button  onClick={this.handleUpload.bind(this)} className="btn btn-deep-orange darken-4">Upload</button>
                           </div>
                            <br />
                  <br /> */}
                {/* <div className = "col">
              <label>Image</label>
              <FileBase type="file" multiple={true}
               onDone={({ base64 }) => setOrderData({ ...orderData, selectedFile: base64 })} />
                </div> */}
              <br />
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Submit</button>
                </div>
                
          </form>
        </div>
        </div>
    )
    
}
export default EditItems;