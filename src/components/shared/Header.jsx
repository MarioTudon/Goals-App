import logoIcon from '../../assets/logo-icon.svg'
import accountIcon from '../../assets/account-icon.svg'

function Header() {

    return (
        <>
            <header className='h-xl flex justify-between shadow bg-white text-gray-700 relative py-2'>
                <div className='flex items-center ml-4'>
                    <a href='/' className='mr-2 '>
                        <img src={logoIcon} alt='logo' className='w-10 h-10' />
                    </a>
                    <p className='text-lg font-bold uppercase'>Goals App</p>
                </div>
                <nav className='flex items-center mr-4'>
                    <a href='/perfil'>
                        <img src={accountIcon} alt='Account Icon' className='w-8 h-8 p-0.5 hover:bg-gray-200 rounded-full' />
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header
