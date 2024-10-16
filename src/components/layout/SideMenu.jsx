import { useRef, useState } from 'react';
import MenuButton from '../side-menu/MenuButton'

function SideMenu({}) {
    const [arrowRotation, setArrowRotation] = useState("rotate-0");
    const [arrowDirection, setArrowDirection] = useState("rightBounce");
    const [asideWidth, setAsideWidth] = useState("w-0");
    const [isHided, setIsHided] = useState(false);
    const screen = useRef(null);
    const screenChild = useRef(null);

    function hideMenu(e) {
        if (!isHided && e.target !== screen.current && e.target !== screenChild.current) {
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
            <aside className={`flex flex-col justify-start text-gray-700 bg-gray-200 h-full lg:w-60 ${asideWidth} transition-all duration-slow shadow-md shadow-gray-400 absolute z-10 md:relative`}>
                <MenuButton href={'#'} text={'Goals List'}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-6 min-h-6 w-6 h-6 ml-4 mr-3 lg:group-hover:scale-110">
                        <path d="M6 15.8L7.14286 17L10 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className='stroke-gray-700' />
                        <path d="M6 8.8L7.14286 10L10 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className='stroke-gray-700' />
                        <path d="M13 9L18 9" strokeWidth="1.5" strokeLinecap="round" className='stroke-gray-700  ' />
                        <path d="M13 16L18 16" strokeWidth="1.5" strokeLinecap="round" className='stroke-gray-700  ' />
                        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" strokeWidth="1.5" strokeLinecap="round" className='stroke-gray-700' />
                    </svg>
                </MenuButton>
                <MenuButton href={'#'} text={'New Goal'}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-6 min-h-6 w-6 h-6 ml-4 mr-3 lg:group-hover:scale-110">
                        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" strokeWidth="1.5" strokeLinecap="round" className='stroke-gray-700' />
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" strokeWidth="1.5" strokeLinecap="round" className='stroke-gray-700' />
                    </svg>
                </MenuButton>
                <button onClick={hideMenu} className='absolute top-1/2 right-0 bg-gray-200 translate-x-full w-8 h-16 flex items-center justify-center bg-gray rounded-r-full transition-all duration-medium md:hidden z-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed" className={`fill-gray-700 ml-auto w-8 h-8 ${arrowRotation} transition-all duration-medium animate-${arrowDirection} relative`} >
                        <path d="M490-480 342-628q-18-18-18-41.5t18-41.5q18-18 41.5-18t41.84 18.34L614-522q8 8.4 13 19.7 5 11.3 5 22.5t-5 22.5q-5 11.3-13 19.3L425.34-249.34Q407-231 384-231.5q-23-.5-41-18.5t-18-41.5q0-23.5 18-41.5l147-147Z" />
                    </svg>
                </button>
                <div className='absolute z-10 -right-full w-full h-full md:hidden' onClick={hideMenu} ref={screen}>
                    <div className='absolute z-10 -right-full w-full h-full md:hidden' ref={screenChild}>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideMenu;