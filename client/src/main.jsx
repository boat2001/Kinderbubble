import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../../assets/css/main.css';
import '../../assets/css/template-fixes.css';
import './assets/kinderbubble.css';
import './assets/kinderbubble-gallery.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
