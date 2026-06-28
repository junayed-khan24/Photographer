import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/Router.jsx'
import { Route, RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="poppins-thin">
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)

