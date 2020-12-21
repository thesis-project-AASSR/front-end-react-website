
<<<<<<< HEAD
//we use the same port of our heroku local server port
=======
import axios from 'axios';
//we  use the same port of our server port (heroku local)
>>>>>>> 2f299135a1ed1ae0763017f1159069fb19e7db48
const url = 'http://localhost:5000';

//requests to routes
export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);
export const createUser = (newUser) => axios.post(url+ '/signup', newUser);
<<<<<<< HEAD
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser);
=======
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser);
>>>>>>> 2f299135a1ed1ae0763017f1159069fb19e7db48
