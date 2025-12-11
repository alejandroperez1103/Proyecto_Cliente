import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Buscador from './assets/components/Buscador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Buscador />
  </StrictMode>,
)
