import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/globals.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
