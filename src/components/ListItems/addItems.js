import React, { useState ,useEffect} from 'react';
// import { render } from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../actions/index';
import  { useEffect } from 'react';
  import { getPrice } from '../../actions';
// import FileBase from 'react-file-base64';
// import { reducers }   from '../../reducers/index';
import { storage } from '../Profile/firbase'


import { createOrder,updateOrder} from '../../actions/index';
// import FileBase from 'react-file-base64';
// import { reducers }   from '../../reducers/index';
import { useDispatch,useSelector } from 'react-redux';



const AddItems = ({ currentId  ,setCurrentId}) => {
  console.log(currentId)
    const [orderData, setOrderData] = useState({  category: '', quantity: '', weight: '', description: ''});



var Total 
// var Quantity
// var Weight
// var price 
const AddItems = ({ currentId }) => {
    const [orderData, setOrderData] = useState({  category: '', quantity: '', weight: '', description: ''});

    const [image, setUserImage] = useState(null)
    const dispatch = useDispatch();
    const order = useSelector(state => state.Items)
    // console.log("order:",order)
    function handleChangeImage(e){
      e.preventDefault();
        setUserImage( e.target.files[0])      
      }

      const imageUpload  = async (e) => {
        const imageLink = storage.ref(`images/${image.name}`).put(image)
        imageLink.on(
           "state_changed",
           snapshot => {},
           error => {
             console.log(error)
           },
           () => {
             
             storage
             .ref("images")
             .child(image.name)
             .getDownloadURL()
             .then(url => {
     
              orderData.image = url
               console.log(url)
             })
           })
        
      }
    /// to get the object of costs for each material(category) 
    var priceObj = getPrice();
    var category=orderData.category
    /// to get the price for the entered material
    for (var key in priceObj){
      if(category===key)
      var price = priceObj[key]         
    }
    console.log("price:",price)
    // to get the entered Quantity and Weight 
    var Quantity=orderData.quantity
    var Weight=orderData.weight
    //To calculate the total price for the order
    Total = Weight*price*Quantity
    //add the order price to the orderData object to save it on the database
    orderData.price = Total
    console.log("Total2:",Total)

    const onSubmit = async (e) => {
      e.preventDefault();
  
        dispatch(createOrder(orderData));
        console.log("orderData",orderData)
      //   clear();
      
    };
=======

    const dispatch = useDispatch();
    
    const order = useSelector((state) => currentId ? state.orders.find((p) => p._id === currentId) : null);
    // const order = useSelector(state => state.reducers)
    useEffect(() => {
        if (order) setOrderData(order);
      }, [order]);
   
      const onSubmit = async (e) => {
        e.preventDefault();
        console.log(currentId)
      if (currentId){
        dispatch(updateOrder(currentId,orderData));
      }else{
        dispatch(createOrder(orderData));
        console.log("orderData",orderData)
      }
        
      };
      
     
      

    return (
        <div>
        <h1>Form</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Help your environment by recycling trash</p>
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
                <div className="col">
                <label>image</label>
                <input 
                  required={true}
                  type='file' 
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
                   <button type="submit" onClick= {imageUpload} className="btn btn-deep-orange darken-4">upload Image</button>
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
                
                  Total: {Total}
               
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
export default AddItems;
