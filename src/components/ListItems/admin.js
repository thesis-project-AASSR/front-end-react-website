import React, { useEffect , useState } from 'react';
import { getALLItems, purchaseProcess } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {  Link} from "react-router-dom" ;
// import { updateOrder,deleteOrder } from '../../actions/index';
// import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import ItemsNav from '../Navbar/itemsNav';
import AdminItemsNav from '../Navbar/adminItemsNav';
const TableItems = props => (
                <tr>
                     <td>{props.Item.category}</td>
                     <td>{props.Item.quantity}</td>
                     <td class="form-row justify-content-center">{props.Item.weight}</td>
                     <td>{props.Item.description}</td>
                     <td>
                     <img src= {props.Item.image} width="120" height="120" class="w3-round" />
                     {console.log(props.Item.image)}
                     </td>
                     <td class="form-row justify-content-center">{props.Item.price}</td>
                     <td>
                      <Link class="btn btn-primary btn-xs">Accept</Link> &nbsp;
                      <Link class="btn btn-primary btn-xs" >Reject</Link>&nbsp;&nbsp;
                      <Link class="btn btn-primary btn-xs"  >Pay</Link></td>
                      </tr>
                     /* <Link herf = "#"  onClick={() => onSubmit(Item.itemID) }>Reject</Link></td> */
        // <a href="#" onClick={() => { props.deleteStudent(props.student.studentId) }}>delete</a>
)
const AdminItems =({currentId}) =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    const Items = useSelector(state => state.Items)
    const [itemData, setItemData] = useState({  category: ''})
    const [filteredData, setFilterData] = useState({ filteredItems: [] })
    console.log(itemData)
    console.log(filteredData.filteredItems)
    // const Items = useSelector(state => state.Items)
    // const filters = ["Iron", "wood", "glass","plastic"]
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);
    function purchaseFunc(itemId,price){
      var purchaseInfo ={
        sender_item_id : itemId,
        price: price
      }
      dispatch(purchaseProcess(purchaseInfo));
      window.location='/AdminItems'
    }
    function itemsList() {
      let listedItems = (filteredData.filteredItems.length > 0)? filteredData.filteredItems : Items 
      console.log(filteredData.filteredItems)
      return listedItems.map(currentItem => {
          return <TableItems Item = { currentItem } key = { currentItem._id }/>; 
      })
  }
  function onChangeCategory(e) {
    let string = e.target.value
    setItemData({category: e.target.value }
    ) 
    let filteredItems = Items.filter(item => item.category.includes(string))
    setFilterData({filteredItems:filteredItems})
    console.log(filteredItems)
}
//     const onSubmit = async (e) => {
//       dispatch(deleteOrder(e))
//       window.location.href = '/SellerItems'
//  };
   return (
<div>
<AdminItemsNav/>
<br />
                <div className="col">
                <label>Select Category</label>
                <select
                required="true"
                  className = "form-control"
                  onChange = {onChangeCategory }
                  // onChange = {(e) =>setItemData({category: e.target.value}) }
                  text-align = "center"
                 >
                   <option value = "">Select</option>
                    <option value = "Iron">Iron</option>
                    <option value = "wood">wood</option>
                    <option value = "glass">glass</option>
                    <option value = "plastic">plastic</option>
                    </select>
                    </div><br></br>
      <table className = "table" >
               <thead className = "thead">
                   <tr>
                       <th>Category</th>
                       <th>Quantity</th>
                       <th>Weight</th>
                       <th>Description</th>
                       <th>Image</th>
                       <th>Enviroment support</th>
                       <th>Action</th> 
                   </tr>
               </thead>
               <tbody>
               {itemsList()}
              </tbody>
               </table>
           </div>
    )
}
export default withRouter(AdminItems);