import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainScreen from './components/MainScreen.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainScreen />
  </React.StrictMode>,
)
