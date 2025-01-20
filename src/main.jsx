import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import './output.css'
import ContextProvider from './context/Context.jsx'
import NotFound from './components/app/NotFound'

createRoot(document.getElementById('root')).render(
  < StrictMode >
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/Goals-App/*" element={<App />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode >,
)
