import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
//? layouts
import { MainLayout } from '../layouts/MainLayout';
import { DreamLayout } from '../layouts/DreamLayout';
import { AdminLayout } from '../layouts/AdminLayout';
//? pages 
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Faqs } from '../pages/Faqs';
import { DreamDetail } from '../pages/DreamDetail';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
//? admin
import { Dreams, } from '../admin/Dreams';
import { Dashboard } from '../admin/Dashboard';
import { Informations } from '../admin/Informations';
import { Reviews } from '../admin/Reviews';
import { Messages } from '../admin/Messages';
import { Headers } from '../admin/Headers';
import { ForgotPassword } from "../pages/forgotPassword";
import { Admins } from "../admin/Admins";
import { Settings } from "../admin/Settings";
//? error pages
import GlobalErrors from '../errors/GlobalErrors';
import DreamsError from '../errors/DreamsError';
//? actions
import { addTests } from "../actions/dataTests";
import { getDreamsFromDatabase } from "../actions/dreamAction";
import { getInfosFromDatabase } from "../actions/infoAction";
import { getReviewsFromDatabase } from "../actions/reviewAction";
import { getMessagesFromDatabase } from "../actions/messageAction";
import { getHeadersFromDatabase } from "../actions/headerAction";
import { getFaqsFromDatabase } from "../actions/faqAction";
import { getUsersFromDatabase, listenForAuthChanges } from "../actions/userAction";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";


export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTests()); 
  }, [dispatch]);

  useEffect(() => {
    dispatch(listenForAuthChanges());
    dispatch(getDreamsFromDatabase());

    //EĞER ADMİN İSE
    dispatch(getInfosFromDatabase());
    dispatch(getReviewsFromDatabase());
    dispatch(getMessagesFromDatabase());
    dispatch(getHeadersFromDatabase());
    dispatch(getFaqsFromDatabase());
    dispatch(getUsersFromDatabase());
}, []);
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: (<ProtectedRoute><AdminLayout /></ProtectedRoute>),
      errorElement: <GlobalErrors/>,
      children: [
        { index: true,  element: <Dashboard/>  },
        { path: "informations",  element: <Informations  /> },
        { path: "dreams", element: <Dreams/> },
        { path: "reviews", element: <Reviews /> },
        { path: "messages", element: <Messages /> },
        { path: "headers",  element: <Headers /> },
        { path: "admins",  element: <Admins /> },
        { path: "settings",  element: <Settings /> },
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <GlobalErrors/>,
      children: [
        {
          path: "", 
          element: <DreamLayout />,
          errorElement: <DreamsError/>,
          children: [
            {  index: true, element: <Home /> },
            {  path: "dream/:id", element: <DreamDetail /> },
          ]
        },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/faqs", element: <Faqs /> },
        { path: "/login",  element: <Login /> },
        { path: "/forgotPassword",  element: <ForgotPassword /> },
        { path: "*",  element: <NotFound />  },
      ]
    }
  ]);
  return <RouterProvider router={router} fallbackElement={
    <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1}/> } />;
};

/*
import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
//? layouts
import { MainLayout } from '../layouts/MainLayout';
import { DreamLayout } from '../layouts/DreamLayout';
import { AdminLayout } from '../layouts/AdminLayout';
//? pages 
import { Home, homeLoader } from '../pages/Home';
import { About, aboutLoader } from '../pages/About';
import { Contact, contactAction, contactLoader } from '../pages/Contact';
import { Faqs, faqsLoader } from '../pages/Faqs';
import { DreamDetail, dreamLoader } from '../pages/DreamDetail';
import { NotFound } from '../pages/NotFound';
import { Login, loginAction } from '../pages/Login';
//? admin
import { Dreams, dreamsAction, dreamsLoader } from '../admin/Dreams';
import { Dashboard } from '../admin/Dashboard';
import { Informations, informationsLoader } from '../admin/Informations';
import { Reviews, reviewsLoader } from '../admin/Reviews';
import { Messages, messagesLoader } from '../admin/Messages';
import { Headers, headersAction, headersLoader } from '../admin/Headers';
//? error pages
import GlobalErrors from '../errors/GlobalErrors';
import DreamsError from '../errors/DreamsError';
import { Settings } from '../admin/Settings';
import { forgotPassword } from '../pages/forgotPassword';

export const AppRouter = ({}) => {

  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <GlobalErrors/>,
      children: [
        { index: true,  element: <Dashboard/>  },
        { path: "informations",  element: <Informations  />,  loader: informationsLoader },
        { path: "dreams", element: <Dreams/>, action: dreamsAction, loader: dreamsLoader },
        { path: "reviews", element: <Reviews />, loader: reviewsLoader },
        { path: "messages", element: <Messages />, oader: messagesLoader },
        { path: "headers",  element: <Headers />, action: headersAction, loader: headersLoader },
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <GlobalErrors/>,
      children: [
        {
          path: "", 
          element: <DreamLayout />,
          errorElement: <DreamsError/>,
          children: [
            {  index: true, element: <Home /> , loader: homeLoader  },
            {  path: "dream/:id", element: <DreamDetail />, loader: dreamLoader },
            // loader: usersLoader → Sayfa Açılmadan Önce Veri Çek
          ]
        },
        { path: "/about", element: <About />, loader: aboutLoader  },
        { path: "/contact", element: <Contact />,  action: contactAction, loader: contactLoader },
        // Bir form veya veri gönderimi (POST, PATCH, DELETE vs.) olursa, çalıştırılır
        { path: "/faqs", element: <Faqs />, loader: faqsLoader },
        { path: "/login",  element: <Login />, action: loginAction   },
        { path: "*",  element: <NotFound />  },
      ]
    }
  ]);
  return <RouterProvider router={router} fallbackElement={
    <SyncLoader  color="#9d9d9d" size={12} speedMultiplier={1}/> } />;
};

*/