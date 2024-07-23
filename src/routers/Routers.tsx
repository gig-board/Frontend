import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import RecruitBand from '../pages/RecruitBand/RecruitBand';
import BandPromotion from '../pages/BandPromotion/BandPromotion';
import SearchPlace from '../pages/Place/SearchPlace';
import CreatePromotion from '../pages/BandPromotion/CreatePromotion';
import CreateRecruit from '../pages/RecruitBand/CreateRecruit';
import KakaoAuth from '../pages/Login/KakaoAuth';
import ApplyRecruit from '../pages/RecruitBand/ApplyRecruit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/api/kakao/callback', element: <KakaoAuth /> },
      { path: '/main', element: <Main /> },
      { path: '/recruitband', element: <RecruitBand /> },
      { path: '/applyrecruit/:recruitId', element: <ApplyRecruit /> },
      { path: '/createrecruit', element: <CreateRecruit /> },
      { path: '/bandpromotion', element: <BandPromotion /> },
      { path: '/createpromotion', element: <CreatePromotion /> },
      { path: '/map', element: <SearchPlace /> },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
