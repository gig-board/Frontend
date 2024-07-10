import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
      ],
    },
  ]);

const Routers = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Routers;
