import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Asteroids from "./Asteroids";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  
  <BrowserRouter>
  
    <Routes>
  
      <Route path="/" element={<App />} />
  
      <Route path="asteroids" element={<Asteroids />} />
  
    </Routes>
  
  </BrowserRouter>,
  
  document.getElementById('root')

  );
