import React from 'react';
import addItems from './AddItems';
// import  Item from './Item/Item';




// we need to feach the data from the globle redux store using selectors 
import {useSelector} from 'react-redux';

const ListItems =() =>{
    const ListItems = useSelector((state) =>state.ListItems)
   console.log(ListItems)    // this come from the redusres
   
   return (
     <>
        <h1>ListItems</h1>
     
      </>
    );
}
export default ListItems;