import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import Loader from './components/loader/loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <RouterProvider 
    router={router} 
    fallbackElement={<Loader/>}
  />);