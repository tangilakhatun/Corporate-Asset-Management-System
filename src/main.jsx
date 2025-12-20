import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
 <RouterProvider router={router} />,
 <Toaster position="top-right" />
    </AuthProvider>
    
    
  
)
