import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import './index.css';

import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <AuthContextProvider>
  <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
    </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


