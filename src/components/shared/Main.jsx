function Main({ children, hideMenu }) {
    return (
        <>
            <main className='w-full h-full overflow-scroll  animate-gradient' onClick={hideMenu}>
                {children}
            </main>
        </>
    )
}

export default Main
