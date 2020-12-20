import axios from 'axios';


const url = 'http://localhost:4000';// this url as like the backend 

export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);

