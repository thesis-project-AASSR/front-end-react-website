import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkUser } from '../../actions/index';
import { storage } from './firbase';
import Background from '../../images/lake-irene-1679708_1280.webp';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image10 from '../../images/pexels-mali-maeder-802221.jpg';
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
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">Dawerha&copy; is a nonprofit website with free Membership. Everything posted must be free, legal and appropriate for all ages.
               Dawerha is a recycling website which aims to encourage people to recycle more and recycle more often. Our  mission is to protect the environment by converting waste materials into new materials and objects.</p>
            </div>
            
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
                <a href="https://m.facebook.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-facebook-f fa-1x"></i></a>
               <a href="https://twitter.com/?lang=en" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-twitter fa-1x"></i></a>
               <a href="https://www.youtube.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-youtube fa-1x"></i></a>
               <a href="https://mail.google.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fas fa-envelope fa-1x"></i></a>
               <a href="https://www.instagram.com/" className="text-white" class="contact" style={{color:"rgba(124,252,0)"}}><i class="fab fa-instagram fa-1x"></i></a> 
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img src={image6} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"></img>
            <strong>Dawerha</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>


        <div style={{backgroundColor:"rgba(40,40,40, 2)"}}>
        <div>

        <div className = "container">
          <form className="text-center border border-dark p-9" action="#!" style={{background: `url(${image10})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",backgroundSize:"cover"}}>
          <br/> 
           <strong style={{color:"white",fontWeight: "700", fontSize:"50px"}}>Sign in</strong>
                <br/> <br/> <br/> <br/>
                <div className="col-lg-6 col-xl-6 mx-auto">
     
                
                <input
                required={true}
                  type = "email"
                  className = "form-control"
                   value = {savedUserData.email}
                  onChange = {(e) => setSavedUserData({ ...savedUserData ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Email"/>
                </div>
                <br />
                <div className = "col-lg-6 col-xl-6 mx-auto">
             
                  <input
                    type = "password"
                    required ={true}
                    className = "form-control"
                     value = {savedUserData.password}
                  onChange = {(e) => setSavedUserData({ ...savedUserData ,password : e.target.value})}
                    placeholder = "Password"/>
                </div>
                <div>
                    <br/><br/>
                <button type="submit" onClick= {onSignIn} className="btn btn-dark">Sign In</button>
                </div>
                <div className="col-lg-6 col-xl-6 mx-auto">
                  <br/><br/><br/><br/><br/>


                  <br/><br/><br/><br/>
                </div>
          </form>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Login;


























