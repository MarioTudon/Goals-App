import Goal from '../list/Goal'

function Main({ hideMenu, mainRef }) {
    return (
        <>
            <main className='flex flex-col items-center justify-start w-full h-full overflow-scroll animate-gradient bg-gray-100 py-2 relative z-0' onClick={hideMenu} ref={mainRef}>
                <Goal goal={"Run 30 minutes"} icon={"🏆"} frequency={4} frequencyUnit={'week'} current={0} target={4} />
                <Goal goal={"Read a book"} icon={"📚"} frequency={1} frequencyUnit={'month'} current={0} target={12} />
            </main>
        </>
    )
}

export default Main
