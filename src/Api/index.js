import axios from 'axios';
import ReactDOM from 'react-dom';

 const url ='http://localhost:5000/ListItems';  // this url as like the backend 

  export const fetchItems =() => axios.get(url);
