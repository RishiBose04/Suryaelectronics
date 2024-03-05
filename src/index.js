import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousal from './Carousal';
import Navbar from './Navbar';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
   <Carousal />
  </React.StrictMode>
);

reportWebVitals();
