import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './comp/header/header.jsx';

// const router=createBrowserRouter([

// ])

ReactDOM.createRoot(document.getElementById('root')).render(

    <StrictMode>
      {/* <RouterProvider router={router}/> */}
      <App/>
    </StrictMode>
);
