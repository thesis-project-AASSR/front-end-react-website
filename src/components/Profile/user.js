/// the team member who is handiling this task  add delete update should add the required folders here 
import React, { useEffect} from 'react';
import { getUser } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';

import ProfileNav from '../Navbar/profileNav'
import {  Link} from "react-router-dom" ;

// we are retreiving all the admin items 
const UserProfile =() =>{
    // we are dipatching th state
    const dispatch = useDispatch();
    //we are declaring a new const called items which will save all the items in it 
    // authInreducers
    // const loggedin = useSelector(state => state.authInReducer)
    var Userb=localStorage.getItem('user_id')
   
  //   const [loggedin,setLoggedin] = useState(Userb)
  // console.log(loggedin)
    const UserProfile = useSelector(state => state.Profiles)
    
  
   
  
    // we are rendering the whole items instantly when we load our page 
    useEffect(() => {
      dispatch(getUser());
    }, [dispatch]);
    
    return (
         <div>
             < ProfileNav/>
              {UserProfile.filter (Users  => Users.userID == Userb
         ).map((Info) => (
        <div style={{ border: '1px solid black', margin: "6px" }} >
          profile picture : <img src =  {Info.image} alt =''/>
              <br></br>
         username: {Info.username}
        <br></br>
        email:   {Info.email}
        <br></br>
        phoneNumber:  {Info.phoneNumber}
        <br></br>
        location:   {Info.location}
        <br></br>
        
        <Link to ={"/EditUser/"+Info.userID} >Edit</Link>
        </div>
       
          ))}
           </div>
    )

}

export default UserProfile;
