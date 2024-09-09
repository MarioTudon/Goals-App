import { useState } from 'react'

function Header() {

    return (
        <>
            <div className='bg-black h-xl'>
                <div>
                    <a href="/">Goals App</a>
                </div>
                <nav>
                    <a href="/perfil">Perfil</a>
                </nav>
            </div>
        </>
    )
}

export default Header
