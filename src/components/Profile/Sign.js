import React, {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/index';
import { checkUser } from '../../actions/index';
import { storage } from './firbase'
const Sign = ({ currentId }) => {
    const [userData, setUserData] = useState({  username: '', email: '', password: '', phoneNumber: '', location: '',  iBan: ''});
    const [image, setUserImage] = useState(null)
    const [savedUserData, setSavedUserData] = useState({ email: '', password: ''});
    const dispatch = useDispatch();

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
    /// send the data to the backend
    const onSubmit = async (e) => {
     e.preventDefault();
     dispatch(createUser(userData));
     console.log("userDataBefore",userData)
     };
    
      console.log("username",userData)
      console.log("image",userData.image)
      const onSignIn = async (e) => {
        e.preventDefault();
          dispatch(checkUser(savedUserData));
          console.log("savedUserData",savedUserData)       
      };
    return (
        <div>
        <div>
        <h1>Sign Up</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Please register your Info</p>
            <br />
                <div className="col">
                <label>Username</label>
                <input
                required={true}
                  type = "text"
                  className = "form-control"
                   value = {userData.username}
                  onChange = {(e) => setUserData({ ...userData ,username : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Name"/>
                </div>
                <br />
                <div className="col">
                <label>Email</label>
                <input
                required={true}
                  type = "text"
                  className = "form-control"
                   value = {userData.email}
                  onChange = {(e) => setUserData({ ...userData ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Email"/>
                </div>
                <br />
                <div className = "col">
                  <label>Password</label>
                  <input
                    type = "text"
                    required={true}
                    className = "form-control"
                     value = {userData.password}
                  onChange = {(e) => setUserData({ ...userData ,password : e.target.value})}
                    placeholder = " Insert a password"/>
                </div>
                <br/>
                <div className="col">
                <label>Phone Number</label>
                <input
                required={true}
                  type = "text"
                  className = "form-control"
                   value = {userData.phoneNumber}
                  onChange = {(e) => setUserData({ ...userData ,phoneNumber : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Phone Number"/>
                </div>
              <br />
              <div className="col">
                <label>Location</label>
                <input
                required={true}
                  type = "text"
                  className = "form-control"
                   value = {userData.location}
                  onChange = {(e) => setUserData({ ...userData ,location : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert Location"/>
                </div>
                <br/>
                <div className="col">
                <label>image</label>
                <input 
                  required={true}
                  type='file' 
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
                   <button type="submit" onClick= {imageUpload} className="btn btn-deep-orange darken-4">upload Image</button>
                </div>
                <br/>
                <div className="col">
                <label>iBan</label>
                <input
                required={true}
                  type = "text"
                  className = "form-control"
                   value = {userData.iBan}
                  onChange = {(e) => setUserData({ ...userData ,iBan : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert iBan"/>
                </div>
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Sign Up</button>
                </div>
          </form>
        </div>
        </div>
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
                  type = "text"
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
                    type = "text"
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
//                 <div className="col">
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