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
import { logout } from "../actions/authAction";


export const AppRouter = () => {
  const dispatch = useDispatch();
  dispatch(logout());
  useEffect(() => {
    dispatch(addTests()); 
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(listenForAuthChanges());
      await dispatch(getDreamsFromDatabase());

      await dispatch(getInfosFromDatabase());
      await dispatch(getReviewsFromDatabase());
      await dispatch(getMessagesFromDatabase());
      await dispatch(getHeadersFromDatabase());
      await dispatch(getFaqsFromDatabase());
      await dispatch(getUsersFromDatabase());
  };

  fetchData();
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
