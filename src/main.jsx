import { StrictMode, useReducer } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import './output.css'
import Context from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  < StrictMode >
  <Context.Provider value={[]}>
    <BrowserRouter>
      <Routes>
        <Route path="/Goals-App/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Context.Provider>
  </StrictMode >,
)
