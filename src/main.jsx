import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SplashScreen from './components/splashScreen.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SplashScreen>
      <App/>
    </SplashScreen>
  </StrictMode>,
)
