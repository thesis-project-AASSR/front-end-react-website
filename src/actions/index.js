import * as Api from "../Api";
// this import * Api -- mean import every thing from the actions as api  


 // now we have create action 
 // Action creators
 export const getItems =() => async (dispatch)=>{

 // the idea of using async is : we work with async data to feach all the items so some time we have to pass it 
 // to do that we will use thunk it allow as to make additionall arrow function that will dispatch the action
 //to make every think /work as we want  by try and catch 
 try {
 const {data} = await Api.fetchItems();    // we feach the data from api 'back end 'as response and then send that data'dispatch'  as like payload
       dispatch ({type:'FETCH_ALL',payload:[]});
    }catch(error){
      console.log(error.message)
   }  
 }



 
























 // the besic syntax of action 
 // action take two things (type proparty for this action , data it self  where we store our items which called payload)
 //  const action ={type:'FETCH_ALL',payload:[]}