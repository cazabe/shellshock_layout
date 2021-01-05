import axios from 'axios';
const api = axios.create({
    baseURL: 'http://167.172.153.27:8000',
    // timeout: 1000,  
  });

  export default api;