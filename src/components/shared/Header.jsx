import { useState } from 'react'
import logo from '../../assets/logo.svg'
import account from '../../assets/account.svg'

function Header() {

    return (
        <>
            <div className='h-xl flex justify-between shadow bg-white text-gray-700'>
                <div className='flex items-center pl-4'>
                    <img src={logo} alt="" className='mr-2 w-11 h-11' />
                    <a href="/" className='text-2xl font-bold'>Goals App</a>
                </div>
                <nav className='flex items-center pr-4'>
                    <a href="/perfil">
                        <img src={account} alt="" className='mr-2 w-10 h-10'/>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default Header
