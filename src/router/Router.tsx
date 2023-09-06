import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import MainPage from '../pages/MainPage';

interface IRouter {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  loader?: (() => any) | ((props: any) => any);
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MainPage />,
        // loader: async () =>
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
