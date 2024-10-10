import logoIcon from '../../assets/logo-icon.svg'
import accountIcon from '../../assets/account-icon.svg'

function Header() {

    return (
        <>
            <header className='h-12 flex justify-between text-gray-700 relative py-2 bg-gray-200'>
                <div className='flex items-center ml-4'>
                    <a href='/Goals-App' className='mr-2 '>
                        <img src={logoIcon} alt='logo' className='w-10 h-10' />
                    </a>
                    <p className='text-lg font-bold uppercase text-gray-700'>Goals App</p>
                </div>
                <nav className='flex items-center mr-4'>
                    <a href='/perfil'>
                        <img src={accountIcon} alt='Account Icon' className='w-8 h-8 p-1 lg:hover:bg-gray-300 rounded-full hover:scale-125 transition duration-medium'/>
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header
