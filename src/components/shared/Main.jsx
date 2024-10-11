function Main({ children, hideMenu }) {
    return (
        <>
            <main className='w-full h-full overflow-scroll  animate-gradient'>
                {children}
            </main>
        </>
    )
}

export default Main
