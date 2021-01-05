import axios from 'axios';
const api = axios.create({
  baseURL: 'https://167.172.153.27:8000',
    // timeout: 1000,  
  });

  export default api;