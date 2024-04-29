import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// importar react router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Lenguajes from './datos/Lenguajes.js'
import VistaLenguaje from './vistas/vistaLenguaje.jsx'


const router = [
  { path:"/",
    element: <App />,
  }
];

Lenguajes.forEach((leng) => {
  router.push({
    path: leng.nombre,
    element: <VistaLenguaje leng={leng}/>,
  });
});

const routes = createBrowserRouter (router);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
