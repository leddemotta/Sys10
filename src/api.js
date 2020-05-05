import axios from 'axios';

const api = axios.create({
  baseURL: `http://5eab0478a280ac00166570ca.mockapi.io/api`
});

api.interceptors.request.use(async config => {
  return config;
});

export default api;
