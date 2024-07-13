import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Login /> }],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
