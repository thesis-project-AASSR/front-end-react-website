import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminProfile from './components/Profile/admin'
import SellerProfile from './components/Profile/user'
import AdminItems from './components/ListItems/admin'
import SellerItems from './components/ListItems/SellerItems'
import Homepage from './components/NavBar&homepage/homepage'
import AddItems from './components/ListItems/addItems'
import Sign from './components/Profile/Sign'
import Form from './components/Profile/form'
import { getALLItems } from './actions';
import ProtectedRoute from './ProtectedRoute';
import {useState} from 'react';

// import { useDispatch } from 'react-redux';
// import {useSelector} from 'react-redux';

function App() {
//   // we need to define this dispatch using hooks
//   const dispatch = useDispatch();
// //   // now we have access to this dispatch we need to find away where we will dispatch this action ---the best way inside use Effect  : it is like component DidMount
//   useEffect(()=>{
//     dispatch(getAllItems());    // here we want to dispatch an action so we need to creat an action 
//   },[dispatch])

console.log(localStorage.getItem('token'))
const [token, setToken] = useState(localStorage.getItem('token'));
return (
  <div>
    <Router className="container">
    <div>
      <Route path="/" component={Homepage} />
      <Route path="/form" component={Form} />
      <ProtectedRoute path="/SellerItems" component={SellerItems} token = {token}/>
      <ProtectedRoute path="/AdminItems" component={AdminItems} />
      <ProtectedRoute path = "/AdminProfile"  component = {AdminProfile} />
      <ProtectedRoute path="/SellerProfile" component={SellerProfile} token = {token}/>
      {/* <Route path="/AddItems" component={AddItems} /> */}
      <Route path="/sign" exact component={Sign} />
      <ProtectedRoute path = "/AddItems" component = {AddItems} token = {token}/>
    </div>
  </Router>
</div>
);
}
export default App;