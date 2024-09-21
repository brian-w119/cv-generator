import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import CV from './App2.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)

