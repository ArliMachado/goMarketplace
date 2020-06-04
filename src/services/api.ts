import axios from 'axios';

const api = axios.create({
  baseURL: 'http://arch.bob:3333',
});

export default api;
