// // To declare API versions
// const baseRequest = {
//     apiVersion: 2,
//     apiVersionMinor: 0
//   };

// //Determine the specification for the tokenization mechanism
// const tokenizationSpec = {
//     type: 'PAYMENT_GATEWAY',
//     parameters: {
//       gateway: 'aciworldwide',
//       gatewayMerchantId: '9952036207'
//     }
//   };

// //Define the card networks accepted by your site
// const allowedCardNetworks = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];

// //auth methods (PAN: plain card numbers, CRYPT_3DS: mobile-based tokenization)
// const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

// //To describe your allowed payment methods
// const baseCardPaymentMethod = {
//     type: 'CARD',
//     parameters: {
//       allowedAuthMethods: allowedCardAuthMethods,
//       allowedCardNetworks: allowedCardNetworks
//     }
//   };

//   const cardPaymentMethod = Object.assign(
//     {tokenizationSpecification: tokenizationSpecification},
//     baseCardPaymentMethod
//   );

// initialize a PaymentsClient object & Initial development uses a TEST environment
function onGooglePayLoaded() {
    window.googlePayClient = new google.payments.api.PaymentsClient({
      environment: "TEST"
    });
  }

// //Adding the allowed payment methods to the base request object.
// const isReadyToPayRequest = Object.assign({}, baseRequest);
//     isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

// //to determine if the Google Pay API is supported by the current device and browser for your specified payment methods
//     paymentsClient.isReadyToPay(isReadyToPayRequest)
//     .then(function(response) {
//       if (response.result) {
//         // add a Google Pay payment button
//         const button =
//         paymentsClient.createButton({onClick: () => console.log('TODO: click handler')});
//         document.getElementById('container').appendChild(button);
//       }
//     })
//     .catch(function(err) {
//       // show error in developer console for debugging
//       console.error(err);
//     });





// // Create a PaymentDataRequest object

// const paymentDataRequest = Object.assign({}, baseRequest);
// paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];


// paymentDataRequest.transactionInfo = {
//     totalPriceStatus: 'FINAL',
//     totalPrice: '123.45',
//     currencyCode: 'JOD',
//     countryCode: 'JO'
//   };
// //*****************************************
//   paymentDataRequest.merchantInfo = { 
//     merchantName: 'Example Merchant',
//     merchantId: '12345678901234567890'
//   };
// //****************************************