import React, { useEffect,useState } from 'react';
import { getALLItems, purchaseProcess,itemActions } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {Button} from 'react-bootstrap';
import AdminItemsNav from '../Navbar/adminItemsNav';
import $ from "jquery";
// import con from '../../../../server/app/models/db';
// we are retreiving all the admin items 
const AdminItems =() =>{
  const [status, setStatus] = useState({accepSelectorStat:false,selectorStat:false})
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    const Items = useSelector(state => state.Items)
console.log("Items:",Items)
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getALLItems());
    
    }, [dispatch]);
//       for(var i = 1; i < 5;i++){

//       var getStatus =localStorage.getItem(i)
//       var strToArr = getStatus.split(",")
//       // var strToArr = [true, false]
//       for(var i= 0; i < 2; i++){
//        if(strToArr[i]==="false") 
//         strToArr[i]=false
//       strToArr[i]=true 
//       }
//       console.log("strToArr:",strToArr)
//       var idToStr = i +""
//       console.log("idToStr:",idToStr)
//       var  accepSelector= "#"+idToStr
//       var selector= "."+idToStr
//       $(accepSelector).prop('disabled', strToArr[0]);
//       $(selector).prop('disabled', strToArr[1]);

// }

    function purchaseFunc(itemId,price){
      var purchaseInfo ={
        itemId : itemId,
        price: price,
        status:"Collected",
        acceptationStat: true,
        rejectionStat: true
      }
      var idToStr =purchaseInfo.itemId +""
      var accepSelector= "#"+idToStr
      var selector= "."+idToStr
      $(accepSelector).prop('disabled', true);
      $(selector).prop('disabled', true);
      dispatch(purchaseProcess(purchaseInfo));
      // window.location='/AdminItems'
    }

 

    function rejection(itemId){

      var rejectionInfo ={
        itemId : itemId,
        status:"Rejected",
        acceptationStat: false,
        rejectionStat: true
     
      }
   
      var idToStr =rejectionInfo.itemId +""
      var selector= "."+idToStr
      var accepSelector= "#"+idToStr
      // document.getElementByclassName(rejectionInfo.itemId +"").disabled = status;
      // $(selector).html("Rejected");
      $(selector).prop('disabled', true);
      $(accepSelector).prop('disabled', false);
      // $(accepSelector).html("Accept");
      dispatch(itemActions(rejectionInfo));
    }

    var butStatus = useSelector(state => state.Items)
    console.log("butStatussss:",butStatus[0])
    // var x= butStatus[0];
    // // console.log(x.status)
    // var y = butStatus[0];
    // console.log("falseeeeeeee",typeof(y));
    // console.log("yyyyyyyyy",y)
    // console.log("xxxxxxxxxxxxx",x)
    function acceptation(itemId,status){
      
    // if(status==="Accepted"){
    //   setStatus(true)
    //   }

      // console.log("strToArr:",strToArr[0])
      var acceptationInfo ={
        itemId : itemId,
        status:"Accepted",
        acceptationStat: true,
        rejectionStat: false
      }
      // setStatus(true)
      setStatus({ ...status ,acceptationStat : true})
      // var accepSelectorStat =true
      // var selectorStat = false
          // localStorage.setItem(itemId, [accepSelectorStat,selectorStat])
      // butStatus=true
      var idToStr =acceptationInfo.itemId +""
      var accepSelector= "#"+idToStr
      var selector= "."+idToStr
      // $(accepSelector).html("Accepted");
      $(accepSelector).prop('disabled', true);
      $(selector).prop('disabled', false);
      dispatch(itemActions(acceptationInfo));

      
    }



    // function acceptation(itemId,status){
    
    //   setStatus(true)
      
    //     console.log("status:",status)
    //     var acceptationInfo ={
    //       itemId : itemId,
    //       status:"Accepted"
    //     }
    //     // setStatus(true)
     
    //     // butStatus=true
    //     // var idToStr =acceptationInfo.itemId +""
    //     // var accepSelector= "#"+idToStr
    //     // var selector= "."+idToStr
    //     // $(accepSelector).html("Accepted");
    //     // $(accepSelector).prop('disabled', status);
    //     // $(selector).prop('disabled', false);
    //     dispatch(itemActions(acceptationInfo));
  
        
    //   }
    
    // console.log("out:",status)
    return (
         <div>
           <AdminItemsNav/>
          {Items.map((Item) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >

        category: {Item.category}
        <br></br>
        quantity:  {Item.quantity}
        <br></br>
        weight:  {Item.weight}
        <br></br>
        description:  {Item.description}
        <br></br>
        image:  <img src={Item.image}/>
        {/* <button className={Item.id} type="primary" onClick= {()=> {purchaseFunc(Item.id,Item.price)}} >Buy </button>
        <button className={Item.id} type="primary" onClick= {()=> {rejection(Item.id)}} > Reject </button>
        <button id={Item.id} type="primary"   onClick= {()=> {acceptation(Item.id,Item.status)}} > Accept </button> */}

        <button className={Item.id} type="primary" disabled={Item.rejectionStat} onClick= {()=> {purchaseFunc(Item.id,Item.price)}} >Buy </button>
        <button className={Item.id} type="primary" disabled={Item.rejectionStat} onClick= {()=> {rejection(Item.id)}} > Reject </button>
   
        <button id={Item.id} type="primary" disabled={Item.acceptationStat} onClick= {()=> {acceptation(Item.id,Item.status)}} > Accept </button>

        </div>
       
          ))}
           </div>
    )

}

export default AdminItems;

// disabled={status}
