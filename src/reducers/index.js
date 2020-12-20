import { combineReducers } from 'redux';
import ListItems from './ListItems';

export default combineReducers({
    
    // ListItems: ListItems, -- now here the key and the value the same we can just do this 
    ListItems,

})

// now we are succesfully we did the exoprt for the main index js which we import reducer in it 