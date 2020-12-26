
import axios from 'axios';
//we  use the same port of our server port (heroku local)
const url = 'http://localhost:4000';
// const headers = {
//     'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
//   }
export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);
export const createUser = (newUser) => axios.post(url+ '/signup', newUser
// , {
//     headers:  {
//         'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
//       }
//   }

// , {
//     headers:  {
//         'Content-Type': 'application/json'
//       }
//   }
  );
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser)
export const payPal = (purchaseInfo) => axios.post(url+ '/purchase', purchaseInfo)
// export const fetchPrice = () => axios.get(url + '/ItemsList');
