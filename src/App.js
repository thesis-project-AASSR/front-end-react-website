import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminProfile from './components/Profile/admin'
import SellerProfile from './components/Profile/user'
import AdminItems from './components/ListItems/admin'
import SellerItems from './components/ListItems/user'
import Homepage from './components/NavBar&homepage/homepage'
import AddItems from './components/ListItems/AddItems'
import Sign from './components/Profile/Sign'


import {useDispatch} from 'react-redux';  // what this allow uis to do  is dispatch an action (dispatch mean send )
import {getItems} from './actions/index.js'  // import the action 



function App() {

  // we need to define this dispatch using hoox
 const dispatch = useDispatch();
 // now we have access to this dispatch we need to find away where we will dispatch this action ---the best way inside use Effect  : it is like component didmount
useEffect(()=>{
  dispatch(getItems());    // here we want to dispatch an action so we need to creat an action 
},[dispatch])



  return (
    <Router className="container">
    <div>
      <Route path="/" component={Homepage} />
      <Route path="/SellerItems" component={SellerItems} />
      <Route path="/AdminItems" component={AdminItems} />
      <Route path = "/AdminProfile"  component = {AdminProfile} />
      <Route path="/SellerProfile" component={SellerProfile} />
      <Route path="/AddItems" component={AddItems} />
       <Route path="/sign"  component={Sign} />
    </div>
  </Router>
  );
}

export default App;
