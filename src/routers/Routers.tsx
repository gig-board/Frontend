import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import RecruitBand from '../pages/RecruitBand/RecruitBand';
import BandPromotion from '../pages/BandPromotion/BandPromotion';
import SearchPlace from '../pages/Place/SearchPlace';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/main', element: <Main /> },
      { path: '/recruitband', element: <RecruitBand /> },
      { path: '/bandpromotion', element: <BandPromotion /> },
      { path: '/map', element: <SearchPlace /> },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
