import Header from './components/shared/Header'
import Main from './components/shared/Main'
import Footer from './components/shared/Footer'
import Menu from './components/shared/Menu'
import { useRef, useState } from 'react'

function App() {
  const [arrowRotation, setArrowRotation] = useState("rotate-0");
  const [arrowDirection, setArrowDirection] = useState("rightBounce");
  const [asideWidth, setAsideWidth] = useState("w-0");
  const [isHided, setIsHided] = useState(false);
  const mainRef = useRef(null);

  function hideMenu(e) {
    if (!isHided && e.target !== mainRef.current) {
      setArrowRotation("rotate-180");
      setArrowDirection("leftBounce");
      setAsideWidth("w-40");
      setIsHided(true);
    }
    else {
      setArrowRotation("rotate-0");
      setArrowDirection("rightBounce");
      setAsideWidth("w-0");
      setIsHided(false);
    }
  }

  return (
    <>
      <div className='-z-50 bg-gray-100 w-full h-screen fixed'></div>
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex h-full relative'>
          <Menu hideMenu={hideMenu} arrowDirection={arrowDirection} arrowRotation={arrowRotation} asideWidth={asideWidth} />
          <Main hideMenu={hideMenu} mainRef={mainRef}/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
