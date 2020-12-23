import  axios from 'axios';
const url = 'http://localhost:5000';

export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items1', newOrder);
export const updateOrder = (id, updateOrder) => axios.put(`${url}/items/${id}`, updateOrder);
export const deleteOrder = (id) => axios.delete(`${url}/delete/${id}`);

export const fetchOrders = () => axios.get(url+'/ItemsList' );
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);



export const updateOrder = (id, updateOrder) => axios.patch(`${url}/${id}`, updateOrder);
// console.log(id)
export const deleteOrder = (id) => axios.delete(`${url}/${id}`);
export const createUser = (newUser) => axios.post(url+ '/signup', newUser);
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser);


