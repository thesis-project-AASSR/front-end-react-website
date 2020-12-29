import React, { useState ,useEffect} from 'react';
import {updateUser,getUser} from '../../actions/index';
import { storage } from './firbase'
import { useDispatch,useSelector } from 'react-redux';
const EditUser = (props) => {
  const currentId = props.match.params.id
    const users = useSelector(state => state.Profiles)
    const Filtered = users.filter( user => user.userID == currentId) 
    console.log(Filtered)
    const [adminProfile, setAdminProfile] = useState({  username: Filtered[0].username , email:  Filtered[0].email, 
      phoneNumber: Filtered[0].phoneNumber, location: Filtered[0].location ,image:Filtered[0].image});
    const dispatch = useDispatch();
    const [image, setUserImage] = useState(null)
        const onSubmit = async (e) => {
          e.preventDefault();
          dispatch(updateUser(currentId,adminProfile));
          window.location = '/home'   
      }
      function handleChangeImage(e){
        e.preventDefault();
          setUserImage( e.target.files[0])
        }
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
                adminProfile.image = url
               })
             })
        }
        useEffect(() => {
          dispatch(getUser());
        }, [dispatch]);
    return (
        <div>
        <h1>Form</h1>
        <br />
        <div className = "container">
          <form className="text-center border border-light p-9" action="#!"  >
            <p className="h4 mb-4">Editing </p>
            <br />
            <div className="col">
                <label>image</label>
                <input
                  required={true}
                  type='file'
                  className = "form-control"
                  onChange = {handleChangeImage}
                  />
                   <button  onClick= {imageUpload} className="btn btn-deep-orange darken-4">upload Image</button>
                </div>
            <div className="col">
                <label>username</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {adminProfile.username}
                  onChange = {(e) => setAdminProfile({ ...adminProfile ,username : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert username"/>
                </div>
                     <br />
                <div className="col">
                <label>email</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {adminProfile.email}
                  onChange = {(e) => setAdminProfile({ ...adminProfile ,email : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert email"/>
                </div>
                <br />
                <div className="col">
                <label>phoneNumber</label>
                <input
                required="true"
                  type = "text"
                  className = "form-control"
                   value = {adminProfile.phoneNumber}
                  onChange = {(e) => setAdminProfile({ ...adminProfile ,phoneNumber : e.target.value})}
                  text-align = "center"
                  placeholder = "Insert phoneNumber"/>
                </div>
                <br />
                <div className = "col">
                  <label>location </label>
                  <input
                    type = "text"
                    required="true"
                    className = "form-control"
                     value = {adminProfile.location}
                  onChange = {(e) => setAdminProfile({ ...adminProfile ,location : e.target.value})}
                    placeholder = " Insert a location "/>
                </div>
                <br />
              <br />
                <div>
                <button type="submit" onClick= {onSubmit} className="btn btn-deep-orange darken-4">Submit</button>
                </div>
          </form>
        </div>
        </div>
    )
}
export default EditUser;