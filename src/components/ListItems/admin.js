// import React, { useEffect } from 'react';
// import { getALLItems } from '../../actions';
// import { useDispatch,useSelector } from 'react-redux';
// import {Button} from 'react-bootstrap'
// import GooglePayButton from '@google-pay/button-react'
// // we are retreiving all the admin items 
// const AdminItems =() =>{
// /// Payment GW
//   function onPaymentAuthorized(paymentData) {
//     return new Promise(function(resolve, reject){
//       // handle the response
//       processPayment(paymentData)
//       .then(function() {
//         resolve({transactionState: 'SUCCESS'});
//       })
//       .catch(function() {
//         resolve({
//           transactionState: 'ERROR',
//           error: {
//             intent: 'PAYMENT_AUTHORIZATION',
//             message: 'Insufficient funds',
//             reason: 'PAYMENT_DATA_INVALID'
//           }
//         });
//       });
//     });
//   }
//   ///////////
//   function processPayment(paymentData) {
//     // show returned data in developer console for debugging
//       console.log(paymentData);
//     // @todo pass payment token to your gateway to process payment
//    var paymentToken = paymentData.paymentMethodData.tokenizationData.token;
//   }

//     // we are dipatching th state
//     const dispatch = useDispatch();
//     //we are declaring a new const called items which will save all the items in it 
//     const Items = useSelector(state => state.Items)
//     // we are rendering the whole items instantly when we load our page 
//     useEffect(() => {
//       dispatch(getALLItems());
//     }, [dispatch]);

//     return (
//          <div>
//           {Items.map((Item) => (
//         <div style={{ border: '1px solid black', margin: "6px" }} >

//         category: {Item.category}
//         <br></br>
//         quantity: {Item.quantity}
//         <br></br>
//         weight:{Item.weight}
//         <br></br>
//         description:{Item.description}
//         <br></br>
//         image:{Item.image}
//         <div>
//         <Button variant="primary" >hey </Button>
//         </div>
//             <div>
//             <GooglePayButton
//         environment="TEST"
//         paymentRequest={{
//           apiVersion: 2,
//           apiVersionMinor: 0,
//           allowedPaymentMethods: [
//             {
//               type: 'CARD',
//               parameters: {
//                 allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                 allowedCardNetworks: ['MASTERCARD', 'VISA'],
//               },
//               tokenizationSpecification: {
//                 type: 'PAYMENT_GATEWAY',
//                 // parameters: {
//                 //   gateway: 'example',
//                 //   gatewayMerchantId: 'exampleGatewayMerchantId',
//                 // },
//               },
//             },
//           ],
//           merchantInfo: {
//             merchantId: '12345678901234567890',
//             merchantName: 'Demo Merchant',
//           },
//           transactionInfo: {
//             totalPriceStatus: 'FINAL',
//             totalPriceLabel: 'Total',
//             totalPrice: '0.1',
//             currencyCode: 'JOD',
//             countryCode: 'JO',
//           },
//           shippingAddressRequired: true,
//           callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
//         }}
//         onLoadPaymentData={paymentRequest => {
//           console.log('Success', paymentRequest);
//         }}
//         onPaymentAuthorized={paymentData => {
//             console.log('Payment Authorised Success', paymentData)
//             return { transactionState: 'SUCCESS'}
//           }
//         }
//         onPaymentDataChanged={paymentData => {
//             console.log('On Payment Data Changed', paymentData)
//             return { }
//           }
//         }
//         existingPaymentMethodRequired='false'
//         buttonColor='black'
//         buttonType='Buy'
//       />
// </div>
//         </div>
       
//           ))}
//            </div>
//     )

// }

// export default AdminItems;


// const dispatch = useDispatch();
//   // // now we have access to this dispatch we need to find away where we will dispatch this action ---the best way inside use Effect  : it is like component didmount
//   useEffect(()=>{
//     dispatch(getALLItems());    // here we want to dispatch an action so we need to creat an action 
//   },[dispatch])



///***************************************************** */



// import React, { useEffect } from 'react';
// import { getALLItems } from '../../actions';
// import { useDispatch,useSelector } from 'react-redux';
// import {Button} from 'react-bootstrap'
// const { googlePayClient } = window;


// // we are retreiving all the admin items 
// const AdminItems =() =>{
  
//   const [gPayBtn, setGPayBtn] = useState(null);

//   function createAndAddButton() {
//     if (googlePayClient) {
//       const googlePayButton = googlePayClient.createButton({
//         buttonColor: "default",
  
//         buttonType: "long",
  
//         onClick: processPayment
//       });
  
//       setGPayBtn(googlePayButton);
//     }
//   }
//   const baseCardPaymentMethod = {
//     type: "CARD",
//     parameters: {
//       allowedCardNetworks: ["VISA", "MASTERCARD"],
//       allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"]
//     }
//   };

//   const googlePayBaseConfiguration = {
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowedPaymentMethods: [baseCardPaymentMethod]
//   };
//     // we are dipatching th state
//     const dispatch = useDispatch();
//     //we are declaring a new const called items which will save all the items in it 
//     const Items = useSelector(state => state.Items)
//     // we are rendering the whole items instantly when we load our page 
//     useEffect(() => {
//       dispatch(getALLItems());
//       ////// GPay
//       googlePayClient
//       .isReadyToPay(googlePayBaseConfiguration)
//       .then(res => {
//         if (res.result) {
//           createAndRenderPayButton();
//         } else {
//           alert("Unable to pay using Google Pay");
//         }
//       })
//       .catch(function (err) {
//         console.error("Error determining readiness to use Google Pay: ", err);
//       });      
//     }, [dispatch]);

//     return (
//          <div>
//           {Items.map((Item) => (
//         <div style={{ border: '1px solid black', margin: "6px" }} >

//         category: {Item.category}
//         <br></br>
//         quantity: {Item.quantity}
//         <br></br>
//         weight:{Item.weight}
//         <br></br>
//         description:{Item.description}
//         <br></br>
//         image:{Item.image}
//         <div>
//         <Button variant="primary" >hey </Button>
//         </div>
//         <div
//           onClick={processPayment}
//           dangerouslySetInnerHTML={{ __html: gPayBtn && gPayBtn.innerHTML }}
//         />
//       </div>
        
       
//           ))}
//            </div>
//     )

// }

// export default AdminItems;


// const dispatch = useDispatch();
//   // // now we have access to this dispatch we need to find away where we will dispatch this action ---the best way inside use Effect  : it is like component didmount
//   useEffect(()=>{
//     dispatch(getALLItems());    // here we want to dispatch an action so we need to creat an action 
//   },[dispatch])




//**************************************************************************************/


import React, { useEffect } from 'react';
import { getALLItems, purchaseProcess } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import {Button} from 'react-bootstrap'
import GooglePayButton from '@google-pay/button-react'
// we are retreiving all the admin items 
const AdminItems =() =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    const Items = useSelector(state => state.Items)
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
    }
    return (
         <div>
          {Items.map((Item) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >

        category: {Item.category}
        <br></br>
        quantity: {Item.quantity}
        <br></br>
        weight:{Item.weight}
        <br></br>
        description:{Item.description}
        <br></br>
        image:{Item.image}
        <div>
        <Button variant="primary" >hey </Button>
        </div>
        <button type="primary" onClick= {()=> {purchaseFunc(Item.id,Item.price)}} >Buy </button>
            
        
            
        </div>
       
          ))}
           </div>
    )

}

export default AdminItems;


