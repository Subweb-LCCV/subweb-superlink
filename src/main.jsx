import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PortalAuth from './components/PortalAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortalAuth>
      <App />
    </PortalAuth>
  </StrictMode>,
)
