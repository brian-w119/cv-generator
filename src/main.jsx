import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TestApp from './practiseFile.jsx'
import './App.css'
import Home from './Home.jsx'
import Form from './practise2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

