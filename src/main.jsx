import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from "./context/AuthContext";
import DataContextProvider from "./context/DataContext";
import ThemeContextProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
    <DataContextProvider>
      <ThemeContextProvider>
        
        <BrowserRouter>
          <App />
        </BrowserRouter>

      </ThemeContextProvider>
    </DataContextProvider>
  </AuthContextProvider>
    
  </React.StrictMode>,
)
