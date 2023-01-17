import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
       <Homepage />
  </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);