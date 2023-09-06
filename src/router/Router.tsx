import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/ErrorPage';
import FindList from '../pages/finder/FindList';

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
        element: <FindList />,
        // loader: async () =>
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
