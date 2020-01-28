import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3051'
});

export default api;