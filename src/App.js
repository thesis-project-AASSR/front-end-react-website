import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminProfile from './components/Profile/admin'
import SellerProfile from './components/Profile/user'
import AdminItems from './components/ListItems/admin'
import SellerItems from './components/ListItems/user'
import Homepage from './components/NavBar&homepage/homepage'
import AddItems from './components/ListItems/addItems'
import Sign from './components/Profile/Sign'




function App() {
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
