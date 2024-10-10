import logoIcon from '../../assets/logo-icon.svg'
import accountIcon from '../../assets/account-icon.svg'

function Header() {

    return (
        <>
            <header className='h-12 flex justify-between shadow backdrop-blur-sm text-gray-700 relative py-2'>
                <div className='flex items-center ml-4'>
                    <a href='/Goals-App' className='mr-2 '>
                        <img src={logoIcon} alt='logo' className='w-10 h-10' />
                    </a>
                    <p className='text-lg font-bold uppercase text-gray-200'>Goals App</p>
                </div>
                <nav className='flex items-center mr-4'>
                    <a href='/perfil'>
                        <img src={accountIcon} alt='Account Icon' className='w-8 h-8 p-1 hover:bg-gray-200 rounded-full hover:scale-125 transition duration-medium'/>
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header
