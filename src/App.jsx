import Header from './components/shared/Header'
import Main from './components/shared/Main'
import Footer from './components/shared/Footer'
import Menu from './components/shared/Menu'
import { useState } from 'react'

function App() {
  const [arrowRotation, setArrowRotation] = useState("rotate-0");
  const [asideWidth, setAsideWidth] = useState("w-0");
  const [isHided, setIsHided] = useState(false);

  function hideMenu(e) {
    if (!isHided && e.target.nodeName !== 'MAIN') {
        setArrowRotation("rotate-180");
        setAsideWidth("w-60");
        setIsHided(true);
    }
    else {
        setArrowRotation("rotate-0");
        setAsideWidth("w-0");
        setIsHided(false);
    }
}

  return (
    <>
      <div className='-z-50 bg-gray-100 w-full h-screen fixed'></div>
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex h-full'>
          <Menu hideMenu={hideMenu} arrowRotation={arrowRotation} asideWidth={asideWidth}/>
          <Main hideMenu={hideMenu} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
