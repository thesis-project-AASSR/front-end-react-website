import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../actions/index';
import { getPrice } from '../../actions';
import { storage } from '../Profile/firbase'
import AddNav from '../Navbar/addNav';
import {withRouter} from 'react-router-dom';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import Background from '../../images/lake-irene-1679708_1280.webp';
import {Link} from "react-router-dom" ;
import image10 from '../../images/pexels-mali-maeder-802221.jpg';

var Total=0
const AddItems = (props) => {
    const [orderData, setOrderData] = useState({  category: '', quantity: '', weight: '', description: '', price:'',image:null, location:localStorage.getItem('location'),status:"Pending", user_id:localStorage.getItem('user_id')});
    const dispatch = useDispatch();
    const [image, setUserImage] = useState(null)

//
    const onSubmit = async (e) => {
        e.preventDefault();
    
          dispatch(createOrder(orderData));
          localStorage.removeItem('location');
         window.location='/SellerItems'

    }

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

       
        
   
    return (
        <div>

       
          <div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">Dawerha&copy; is a nonprofit website with free Membership. Everything posted must be free, legal and appropriate for all ages.
               Dawerha is a recycling website which aims to encourage people to recycle more and recycle more often. Our  mission is to protect the environment by converting waste materials into new materials and objects.</p>
            </div>
            
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
                <a href="https://m.facebook.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-facebook-f fa-1x"></i></a>
               <a href="https://twitter.com/?lang=en" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-twitter fa-1x"></i></a>
               <a href="https://www.youtube.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-youtube fa-1x"></i></a>
               <a href="https://mail.google.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fas fa-envelope fa-1x"></i></a>
               <a href="https://www.instagram.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-instagram fa-1x"></i></a> <br/><br/>
               <button onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('user_id'); window.location=('/')}}  style={{color:"white"}} className="btn btn-outline-success"> Sign out </button>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img src={image6} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"></img>
            <strong>Dawerha</strong>
          </a>
          <a href="/SellerProfile" style={{color:"white"}}> Profile </a>
          <a href="/SellerItems" style={{color:"white"}}> All Items </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>



       
        <div style={{backgroundColor:"rgba(40,40,40, 2)"}}>

        <div className = "container">
          <form className="text-center border border-light p-9" action="#!" style={{background: `url(${image10})`, backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
            <p className="h4 mb-4" style={{color:"white"}}>Add an item</p>
            <br />
            <Link to ={"/map/"} style={{ fontSize:"20px"}} className="btn btn-secondary">choose your location</Link>
                <div className="col">
                <br/>
                {/* <label>Select Category</label> */}
                <select
                required="true"
                  className = "form-control"
                   value = {orderData.category}
                  onChange = {(e) => setOrderData({ ...orderData ,category : e.target.value})}
                  text-align = "center"
                 >
                   <option value = "Iron">Select Category</option>
                     <option value = "Iron">Iron</option>
                    <option value = "wood">wood</option>
                    <option value = "glass">glass</option>
                    <option value = "plastic">plastic</option>
                    </select>
                    </div>
                     <br />
                <div className="col">
                {/* <label>Quantity</label> */}
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
                {/* <label>weight</label> */}
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {orderData.weight}
                  onChange = {(e) => setOrderData({ ...orderData ,weight : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Wights"/>
                </div>
                <br />
                <div className="col">
                {/* <label>image</label> */}
                <input
                  required={true}
                  type='file'
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
                   <button  onClick= {imageUpload} className="btn btn-dark btn-sm">upload Image</button>
                </div>

<br/>
                <div className = "col">
                  {/* <label>Description  </label> */}
                  <input
                    type = "text"
                    required="true"
                    className = "form-control"
                     value = {orderData.description}
                  onChange = {(e) => setOrderData({ ...orderData ,description : e.target.value})}
                    placeholder = " Insert a description "/>
                </div>
                <br/>
                <div style={{ color:"grey", fontSize:"30px"}}>
                Environment Support: {Total}
                </div>
                <br />
                
              <br />
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-dark btn-lg">Submit</button>
                </div>
          </form>
        </div>
        </div>


        </div>
    )
    
}
export default withRouter (AddItems);





