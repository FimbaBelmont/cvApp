import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import General from "./General.jsx"
import './index.css'
import Education from "./Education.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General/>
    <App />
  </React.StrictMode>,
)
