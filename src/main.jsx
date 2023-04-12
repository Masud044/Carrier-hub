import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './component/Statistics/Statistics';
import Home from './component/Home/Home';
import Applied from './component/Applied/Applied';
import Blog from './component/Blog/Blog';
import First from './component/First/First';
import JobDetails from './component/JobDetails/JobDetails';
import Error from './component/Error/Error';




const router = createBrowserRouter([
      {
        path:'/',
        element:<Home></Home>,
        errorElement:<Error></Error>,
        children: [
          {
            path:'/',
            element:<First></First>
            
          },
           {
             path:'statistics',
             element:<Statistics></Statistics>,
            
           },
           {
            path:'applied',
            element:<Applied></Applied>
          },
          {
            path:'blog',
            element:<Blog></Blog>
          },
          {
            path:'jobdetailes/:jobdetailesId',
            element:<JobDetails></JobDetails>,
            loader:({params})=>fetch(`/Feature.json`),
            
          }
         

        ]
      }
   ]);
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
