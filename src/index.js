import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain="dev-pam16dh5o82w8z2q.us.auth0.com"
  clientId="S7H3JlrUlGkRhRKs2Q04aoJfGfPnl4gP"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <App />
    <ToastContainer/>
  </Auth0Provider>  
);


