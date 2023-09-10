import axios from 'axios';

export const index = axios.create({
  baseURL: 'https://wanted-backend-week3.vercel.app/',
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
