function Main({ children }) {
    return (
        <>
            <div className='flex items-center h-full bg-gray-100 w-full'>
                <main className='w-full h-full overflow-scroll'>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Main
