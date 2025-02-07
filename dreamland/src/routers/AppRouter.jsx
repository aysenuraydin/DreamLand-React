import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Faqs } from '../pages/Faqs';
import { Dream } from '../pages/Dream';
import { NotFound } from '../pages/NotFound';
import { DreamLayout } from '../layouts/DreamLayout';

export const AppRouter = ({}) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <DreamLayout />,
          children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/dream",
              element: <Dream />
            },
          ]
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/faqs",
          element: <Faqs />
        },
        {
          path: "*",
          element: <NotFound />
        },
      ]
    }
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