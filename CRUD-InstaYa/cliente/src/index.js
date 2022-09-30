import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Auth0Provider} from '@auth0/auth0-react'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider domain="dev-f8hrg51m.us.auth0.com" clientId="NFduVg5Pkw72XnxaFy1LJcU24QBsKrWk" redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
