import Header from './components/shared/Header'
import Main from './components/shared/Main'
import Footer from './components/shared/Footer'
import Aside from './components/shared/Aside'
import { useState } from 'react'

function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex h-full'>
          <Aside />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
