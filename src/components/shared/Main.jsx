import LinkButton from './LinkButton'
import addCircle from '../../assets/addCircle.svg'
import checklist from '../../assets/checklist.svg'

function Main({ children }) {
    return (
        <>
            <div className='h-main flex'>
                <aside className='flex flex-col text-gray-700 bg-gray-100 shadow w-60 h-full'>
                    <LinkButton href={'/list'} text={'List'} imgSrc={checklist} imgAlt={'checklist'}/>
                    <LinkButton href={'/list'} text={'List'} imgSrc={addCircle} imgAlt={'addCircle'}/>
                </aside>
                <main className='w-full h-full overflow-scroll'>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Main
