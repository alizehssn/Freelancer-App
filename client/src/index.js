import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import Auth0Provider from './Components/auth0/auth0';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <Auth0Provider>
    <App />
    </Auth0Provider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
