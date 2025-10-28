import { StrictMode } from 'react'
import {  HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
      <footer className="footer">Your website 2025</footer>
    </HashRouter>
  </StrictMode>,
)
