import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  (config) => {
    console.info('calling api');
    return config;
  },
  (error) => {
    return error;
  }
);
