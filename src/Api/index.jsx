import axios from 'axios';
import { useCookies } from 'react-cookie'; // Import the cookies object directly

const Api = axios.create({
  baseURL: 'http://localhost:4000/tax/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// const getToken = () => {
//   // Use the cookies object directly
// //   console.log('----------------------cookies', cookies);
//   return useCookies.get('jwt');
// };

// // Create an interceptor to add the bearer token to outgoing requests
// Api.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     console.log(token);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default Api;
