import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Errorpage from './Pages/Errorpage';
import Home from './Pages/Home';
import About from './Pages/About';
import Jobs from './Pages/Jobs';
import Internships from './Pages/Internships';
import Login from './Pages/Login';
import { Toaster } from 'react-hot-toast';
import Jobdetails from './Components/Shared/Jobdetails';
import Intdetails from './Components/Shared/Intdetails';
import Homejobdetails from './Components/Shared/Homejobdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    
      {
        path: "Jobs",
        element: <Jobs/>
      },
      {
        path: "Internships",
        element: <Internships/>
      },
      {
        path: "Aboutus",
        element: <About/>
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path : "/jobdetails/:id",
        element: <Jobdetails/>,
        loader : ()=> fetch(`/jobs.json`)
    },
      {
        path : "/homejobdetails/:id",
        element: <Homejobdetails/>,
        loader : ()=> fetch(`/jobs.json`)
    },
      {
        path : "/intdetails/:id",
        element: <Intdetails/>,
        loader : ()=> fetch(`/internships.json`)
    },
      
     
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
