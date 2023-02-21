import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { VetExpress } from './components/VetExpress';
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VetExpress />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

);
