import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/index';
import { storage } from './firbase';
import Background from '../../images/lake-irene-1679708_1280.webp';
import image6 from "../../images/1_x9sm3fjasQp8gXQp-Sd0pA.png";
import image10 from '../../images/pexels-mali-maeder-802221.jpg';
import image11 from '../../images/background-recycle-symbol-260nw-110941127.webp';
import image12 from '../../images/crumpled-2537807_1280.jpg';
import image13 from '../../images/42-18260830edit.jpg';
import image14 from '../../images/wp2529177.jpg';
import image15 from '../../images/wp2529191.jpg';

const Sign = ({ currentId }) => {
  ///this is for sign up
    const [userData, setUserData] = useState({  username: '', email: '', password: '', phoneNumber: '', location: '', image: null});
  ////this is for sign in
  const [image, setUserImage] = useState(null)
   

    const dispatch = useDispatch();
   ////sigin up button
    const onSubmit = async (e) => {
        e.preventDefault();
        /*
        Input Email conditions:
        @ should present
        .mysite@.com.my  [ can not start with dot "."]
        @you.me.net [ No character before @ ]
        mysite123@gmail.b [ ".b" is not a valid tld ]
        mysite@.org.org [ tld can not start with dot "." ]
        .mysite@mysite.org [ an email should not be start with "." ]
        mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
        mysite..1234@yahoo.com [double dots are not allowed]
         */
        if ( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)) ) {
          alert("You have entered an invalid email address!");
        }
        //Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
        if ( !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(userData.password)) ) {
          alert("You have entered weak password!");
        }
        //Input PhoneNumber should be 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number
        if ( !(/^\d{10}$/.test(userData.phoneNumber)) ) {
          alert("You have entered an invalid Phone Number!");
        }
         if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)) && (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(userData.password)) &&  (/^\d{10}$/.test(userData.phoneNumber))){
          dispatch(createUser(userData));
          window.location = '/login';
          console.log("userData",userData);
        }
      };

    

   function handleChangeImage(e){
    e.preventDefault();
      setUserImage( e.target.files[0])      
    }
    /// to get the image url and save it on the firebase 
    const imageUpload  = async (e) => {
      const imageLink = storage.ref(`images/${image.name}`).put(image)
      imageLink.on(
         "state_changed",
         snapshot => {},
         error => {
           console.log(error)
         },
         () => {
           
           storage
           .ref("images")
           .child(image.name)
           .getDownloadURL()
           .then(url => {
   
            userData.image = url
             console.log(url)
           })
         })
      
    }
   
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
        <div className = "container" >
          <form className="text-center border border-dark p-9" action="#!" style={{background: `url(${image10})`, backgroundSize: "center", backgroundRepeat: "no-repeat",backgroundSize:"cover"}}>
            <strong style={{color:"white",fontWeight: "700", fontSize:"50px"}}>Sign up</strong>
            <br/> <br/>
                <div className="col-lg-6 col-xl-6 mx-auto">
                {/* <label>Username</label> */}
                <input
                required={true}
                  type = "text"
                  className = "form-control"
                   value = {userData.username}
                  onChange = {(e) => setUserData({ ...userData , username : e.target.value})}
                  text-align = "center"
                  placeholder = "Username"
                  />
                </div>
                <br />
                <div className="col-lg-6 col-xl-6 mx-auto">
                {/* <label>Email</label> */}
                <input
                required={true}
                  type = "email"
                  className = "form-control"
                   value = {userData.email}
                  onChange = {(e) => setUserData({ ...userData ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Email - should be valid"/>
                </div>
                <br />
                <div className = "col-lg-6 col-xl-6 mx-auto">
                  {/* <label>Password</label> */}
                  <input
                    type = "password"
                    required={true}
                    className = "form-control"
                     value = {userData.password}
                  onChange = {(e) => setUserData({ ...userData ,password : e.target.value})}
                    placeholder = "Password 8-char, numbers, symbols, uppercase letter"/>
                </div>
                <br/>
                <div className="col-lg-6 col-xl-6 mx-auto">
                {/* <label>Phone number</label> */}
                <input
                required={true}
                  type = "tel"
                  className = "form-control"
                   value = {userData.phoneNumber}
                  onChange = {(e) => setUserData({ ...userData ,phoneNumber : e.target.value})}
                  text-align = "center"
                  placeholder = "Phone number - should be valid"/>
                </div>
                <br/>
                <div className="col-lg-6 col-xl-6 mx-auto">
                {/* <label>Image</label> */}
                <input 
                  required={true}
                  type='file' 
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
             <button type="submit" onClick= {imageUpload} className="btn btn-dark btn-sm">upload your profile picture</button>
                </div>
                <br/>
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-dark btn-lg">Sign Up</button>
                </div>
          </form>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Sign;





























// import React, {useState} from 'react';
// import {useSelector} from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { createUser } from '../../actions/index';
// import { checkUser } from '../../actions/index';

// const Sign = ({ currentId }) => {
//     const [userData, setUserData] = useState({  username: '', email: '', password: '', phoneNumber: '', location: '', image: '', iBan: ''});
//     ///////
//     const [savedUserData, setSavedUserData] = useState({ email: '', password: ''});

//     const dispatch = useDispatch();

//     const onSubmit = async (e) => {
//         e.preventDefault();
    
//           dispatch(createUser(userData));
//           console.log("userData",userData)       
//       };

//       /////
//       const onSignIn = async (e) => {
//         e.preventDefault();
    
//           dispatch(checkUser(savedUserData));
//           console.log("savedUserData",savedUserData)       
//       };

//     return (
//         <div>
//         <div>
//         <h1>Sign Up</h1>
//         <br />
//         <div className = "container">
//           <form className="text-center border border-light p-9" action="#!"  >
//             <p className="h4 mb-4">Please register your Info</p>
//             <br />
//                 <div className="col-lg-6 col-xl-6 mx-auto">
//                 <label>Username</label>
//                 <input
//                 required="true"
//                   type = "text"
//                   className = "form-control"
//                    value = {userData.username}
//                   onChange = {(e) => setUserData({ ...userData ,username : e.target.value})}
//                   text-align = "center"
//                   placeholder = "Insert Name"/>
//                 </div>
//                 <br />
//                 <div className="col">
//                 <label>Email</label>
//                 <input
//                 required="true"
//                   type = "text"
//                   className = "form-control"
//                    value = {userData.email}
//                   onChange = {(e) => setUserData({ ...userData ,email : e.target.value})}
//                   text-align = "center"
//                   placeholder = "Insert Email"/>
//                 </div>
//                 <br />
//                 <div className = "col">
//                   <label>Password</label>
//                   <input
//                     type = "text"
//                     required="true"
//                     className = "form-control"
//                      value = {userData.password}
//                   onChange = {(e) => setUserData({ ...userData ,password : e.target.value})}
//                     placeholder = " Insert a password"/>
//                 </div>
//                 <br/>
//                 <div className="col">
//                 <label>Phone Number</label>
//                 <input
//                 required="true"
//                   type = "text"
//                   className = "form-control"
//                    value = {userData.phoneNumber}
//                   onChange = {(e) => setUserData({ ...userData ,phoneNumber : e.target.value})}
//                   text-align = "center"
//                   placeholder = "Insert Phone Number"/>
//                 </div>
//               <br />
//               <div className="col">
//                 <label>Location</label>
//                 <input
//                 required="true"
//                   type = "text"
//                   className = "form-control"
//                    value = {userData.location}
//                   onChange = {(e) => setUserData({ ...userData ,location : e.target.value})}
//                   text-align = "center"
//                   placeholder = "Insert Location"/>
//                 </div>
//                 <br/>
//                 <div className="col">
//                 <label>image</label>
//                 <input
//                 required="true"
//                   type = "text"
//                   className = "form-control"
//                    value = {userData.image}
//                   onChange = {(e) => setUserData({ ...userData ,image : e.target.value})}
//                   text-align = "center"
//                   placeholder = "Insert Image"/>
//                 </div>
//                 <br/>
//                 <div className="col">
//                 <label>iBan</label>
//                 <input
//                 required="true"
//                   type = "text"
//                   className = "form-control"
//                    value = {userData.iBan}
//                   onChange = {(e) => setUserData({ ...userData ,iBan : e.target.value})}
//                   text-align = "center"
//                   placeholder = "Insert iBan"/>
//                 </div>
//                 <div>
//                 <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Sign Up</button>
//                 </div>
//           </form>
//         </div>
//         </div>
//         <div>
//         <h1>Sign In</h1>
//         <br />
//         <div className = "container">
//           <form className="text-center border border-light p-9" action="#!"  >
//             <p className="h4 mb-4">Please enter your Info</p>
//                 <br />
//                 <div className="col">
//                 <label>Email</label>
//                 <input
//                 required="true"
//                   type = "text"
//                   className = "form-control"
//                    value = {savedUserData.email}
//                   onChange = {(e) => setSavedUserData({ ...savedUserData ,email : e.target.value})}
//                   text-align = "center"
//                   placeholder = "Insert Email"/>
//                 </div>
//                 <br />
//                 <div className = "col">
//                   <label>Password</label>
//                   <input
//                     type = "text"
//                     required="true"
//                     className = "form-control"
//                      value = {savedUserData.password}
//                   onChange = {(e) => setSavedUserData({ ...savedUserData ,password : e.target.value})}
//                     placeholder = " Insert a password"/>
//                 </div>
//                 <div>
//                 <button type="submit" onClick= {onSignIn} className="btn btn-deep-orange darken-4">Sign In</button>
//                 </div>
//           </form>
//         </div>
//         </div>
//         </div>
//     )
// }

// export default Sign;