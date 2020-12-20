import React from 'react';
import ReactDOM from 'react-dom';

/// here the place when we start to initalize redux 
import {Provider} from 'react-redux'
// provider is going to keep track of that store which is globally state and allows us to access that store from any where inside of our app 
// we can access state from any where parent or child 
// store the plase where we store the state  
import {createStore ,applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers'


// now lets set redux --first we need to make store

const store = createStore(reducers,compose(applyMiddleware(thunk))) 


ReactDOM.render(
  <Provider store ={store}> 
   <App />
  </Provider>,
  document.getElementById('root')
);
