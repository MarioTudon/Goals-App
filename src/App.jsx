import Header from './components/shared/Header'
import Main from './components/shared/Main'
import Footer from './components/shared/Footer'
import Menu from './components/shared/Menu'
import { useRef, useState } from 'react'

function App() {

  return (
    <>
      <div className='flex flex-col h-screen' >
        <Header />
        <div className='flex h-full relative'>
          <Menu />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
