import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Faqs } from '../pages/Faqs';
import { DreamDetail } from '../pages/DreamDetail';
import { NotFound } from '../pages/NotFound';
import { DreamLayout } from '../layouts/DreamLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { Dreams } from '../pages/Dreams';
import { Dashboard } from '../pages/Dashboard';
import { Informations } from '../pages/Informations';
import { Reviews } from '../pages/Reviews';
import { Messages } from '../pages/Messages';
import { Headers } from '../pages/Headers';
import { Login } from '../pages/Login';

export const AppRouter = ({}) => {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true,  element: <Dashboard/>  },
        { path: "informations",  element: <Informations/>  },
        { path: "dreams",  element: <Dreams/>  },
        { path: "reviews",  element: <Reviews/>  },
        { path: "messages",  element: <Messages/>  },
        { path: "headers",  element: <Headers/>  },
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <DreamLayout />,
          children: [
            { index: true, element: <Home /> },
            {  path: "/dream",  element: <DreamDetail/>  },
          ]
        },
        { path: "/about", element: <About />  },
        { path: "/contact",  element: <Contact /> },
        { path: "/faqs", element: <Faqs /> },
        {  path: "/login",  element: <Login />  },
        {  path: "*",  element: <NotFound />  },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};
// {
//   path: "/create",
//   element: <Create 
//             addNote={addNote} 
//             clearNote={clearNote} 
//             note={note} 
//           />
// }
// return <RouterProvider key={notes.length} router={router} />;