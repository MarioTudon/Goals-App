import logoIcon from '../../assets/logo-icon.svg'
import accountIcon from '../../assets/account-icon.svg'
import { Link } from 'react-router'

function Header({ isAuthenticated }) {
    return (
        <>
            <header className='h-12 flex justify-between text-gray-700 relative py-2 bg-gray-200 shadow-md shadow-gray-400 z-40 mb-auto'>
                <div className='flex items-center ml-4'>
                    <Link to={'/Goals-App'} className='mr-2'>
                        <img src={logoIcon} alt='logo' className='w-10 h-10' />
                    </Link>
                    <p className='text-lg font-bold uppercase text-gray-700'>Goals App</p>
                </div>
                <nav className='flex items-center mr-4'>
                    {
                        isAuthenticated ?
                            (<Link to={'/Goals-App'}>
                                <img src={accountIcon} alt='User Icon' className='w-8 h-8 p-1 rounded-full hover:scale-125 transition duration-medium' />
                            </Link>)
                            :
                            (<Link to={'/Goals-App/Access'}>
                                <img src={accountIcon} alt='Account Icon' className='w-8 h-8 p-1 rounded-full hover:scale-125 transition duration-medium' />
                            </Link>)
                    }
                </nav>
            </header>
        </>
    )
}

export default Header
