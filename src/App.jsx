import Header from './components/shared/Header'
import Main from './components/shared/Main'
import Footer from './components/shared/Footer'
import Menu from './components/shared/Menu'
import { useState } from 'react'
import { AnimatedBackground } from 'animated-backgrounds'

function App() {
  return (
    <>
      <AnimatedBackground animationName="auroraBorealis"/>
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex h-full'>
          <Menu />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
