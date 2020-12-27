import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkUser } from '../../actions/index';
import { storage } from './firbase'

const Login = ({ currentId }) => {
  ///this is for sign up
  
    const [savedUserData, setSavedUserData] = useState({ email: '', password: ''});
    const dispatch = useDispatch();
  
    ////sigin in button
      const onSignIn = async (e) => {
        e.preventDefault();
          dispatch(checkUser(savedUserData));
          console.log("savedUserData",savedUserData);
      };  

   
    return (
        <div>

        <div>
        <h1>Sign In</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Please enter your Info</p>
                <br />
                <div className="col">
                <label>Email</label>
                <input
                required={true}
                  type = "email"
                  className = "form-control"
                   value = {savedUserData.email}
                  onChange = {(e) => setSavedUserData({ ...savedUserData ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Email"/>
                </div>
                <br />
                <div className = "col">
                  <label>Password</label>
                  <input
                    type = "password"
                    required={true}
                    className = "form-control"
                     value = {savedUserData.password}
                  onChange = {(e) => setSavedUserData({ ...savedUserData ,password : e.target.value})}
                    placeholder = " Insert a password"/>
                </div>
                <div>
                <button type="submit" onClick= {onSignIn} className="btn btn-deep-orange darken-4">Sign In</button>
                </div>
          </form>
        </div>
        </div>
        </div>
    )
}
export default Login;


























