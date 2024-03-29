import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeContext, ThemeProvider } from './context/ThemeContext';

//importe nameProvider
// passar app dentro dele

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App /> 
    </ThemeProvider>
  </React.StrictMode>
);

