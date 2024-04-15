import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import FirebaseProvider from './firebase/FirebaseProvider'
import { HelmetProvider } from 'react-helmet-async'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseProvider>

        <RouterProvider router={router} />

      </FirebaseProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
