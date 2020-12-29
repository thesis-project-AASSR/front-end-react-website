import React, { useState ,useEffect} from 'react';
import {getALLItems} from '../../actions/index';
import { getPrice } from '../../actions';
import {updateOrder} from '../../actions/index';
import { useDispatch,useSelector } from 'react-redux';
var Total=0
const EditItems = (props) => {
console.log(props)
  const dispatch = useDispatch();
    const currentId = props.match.params.id
      const orders = useSelector( state => state.Items)
      console.log(orders)
      const Filter = orders.filter( items => items.itemID==currentId) 
      useEffect( () => {
        dispatch(getALLItems());
      }, [dispatch]);
    const [orderData, setOrderData] = useState({  category: Filter[0].category, quantity:  Filter[0].quantity , weight:Filter[0].weight, 
      description :Filter[0].description, price:''});
    const onSubmit =  (e) => {
          e.preventDefault();
          dispatch(updateOrder(currentId,orderData));
          window.location = '/SellerItems'   
      };
      var priceObj = getPrice();
      var category=orderData.category
      /// to get the price for the entered material
      for (var key in priceObj){
        if(category===key)
        var price = priceObj[key]
      }
      // to get the entered Quantity and Weight
      var Quantity=orderData.quantity
      var Weight=orderData.weight
      //To calculate the total price for the order
      Total = Weight*price*Quantity
      //add the order price to the orderData object to save it on the database
      orderData.price = Total
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
                    <option value = "">{Filter[0].category}</option>
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
                   value = {orderData.weight}
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
                Total: {Total}
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