import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/* 

React Specific:

createRoot().render();

JavaScript Universal:

document.getElementById('root')

Babel:

  <StrictMode>
    <App />
  </StrictMode>,
)

These are being translated by Babel in to regular JS that React can understand

*/
