import axios from 'axios';

export const index = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
});

index.interceptors.request.use(
  (config) => {
    console.info('calling api');
    return config;
  },
  (error) => {
    return error;
  }
);
