import React from 'react';
import ReactDOM from 'react-dom/client';

/* Pages */
import Home from './Pages/Home';
import AboutPage from './Pages/About';
import ShopPage from './Pages/Shop';
import ContactPage from './Pages/Contact';

/* Styles */
import './Styles/globalRules.css';
import './Styles/allmin.css';
import './Styles/main.css';
import './Styles/mainButton.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element:<Home />},
  {path:"/deliciouss/src/Pages/About.js", element:<AboutPage />},
  {path:"/deliciouss/src/Pages/Shop.js", element:<ShopPage />},
  {path:"/deliciouss/src/Pages/Contact.js", element:<ContactPage />},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

