import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'
import SideMenu from './components/layout/SideMenu'
import { useRef, useState } from 'react'

function App() {

  return (
    <>
      <div className='flex flex-col h-screen overflow-hidden' >
        <Header />
        <div className='flex h-full relative'>
          <SideMenu />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
