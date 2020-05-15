import axios from 'axios';


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequst';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
