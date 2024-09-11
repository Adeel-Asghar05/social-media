import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import App from './assets/route/App.jsx'
import Login from './components/Login';
import Signup from './components/Signup';

import './index.css'
import Adpost from './components/Adpost.jsx'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  { path : "/" , element : <App/>,
    children : 
  [ 
    { path : "/" , element : <Home/>},
    { path : "/create-post" , element : <Adpost/>},
    { path : "/login" , element : <Login/>},
    { path : "/sign-up" , element : <Signup/>},
  ]
},


])




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router ={router} />
  {/* <App/> */}
  </StrictMode>
)
