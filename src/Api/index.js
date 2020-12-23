import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items1', newOrder);
export const updateOrder = (id, updateOrder) => axios.put(`${url}/items/${id}`, updateOrder);
export const deleteOrder = (id) => axios.delete(`${url}/delete/${id}`);