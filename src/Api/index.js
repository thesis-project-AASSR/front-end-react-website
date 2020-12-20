import axios from 'axios';

const url = 'http://localhost:4000';

export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);