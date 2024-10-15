// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';  // Import the CartProvider
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>  {/* Wrap your App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

// For performance monitoring
reportWebVitals();
