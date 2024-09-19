import logoIcon from '../../assets/logo-icon.svg'
import accountIcon from '../../assets/account-icon.svg'

function Header() {

    return (
        <>
            <header className='h-xl flex justify-between shadow bg-white text-gray-700 relative'>
                <div className='flex items-center pl-4'>
                    <img src={logoIcon} alt='logo' className='mr-2 w-10 h-10' />
                    <a href='/' className='text-2xl font-bold'>Goals App</a>
                </div>
                <nav className='flex items-center pr-4'>
                    <a href='/perfil'>
                        <img src={accountIcon} alt='Account Icon' className='mr-2 w-10 h-10'/>
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header
