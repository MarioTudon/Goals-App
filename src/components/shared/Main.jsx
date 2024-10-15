function Main({ children, hideMenu }) {
    return (
        <>
            <main className='flex justify-center w-full h-full overflow-scroll animate-gradient bg-gray-100' onClick={hideMenu}>
                {children}
            </main>
        </>
    )
}

export default Main
