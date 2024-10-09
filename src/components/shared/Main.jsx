import LinkButton from './LinkButton'
import addGoal from '../../assets/add-goal.svg'
import checklist from '../../assets/checklist.svg'

function Main({ children }) {
    return (
        <>
            <div className='flex items-center h-full'>
                <aside className='flex flex-col text-gray-700 bg-gray-100 shadow w-60 h-full'>
                    <LinkButton href={'#'} text={'Goals List'} imgSrc={checklist} imgAlt={'checklist'}/>
                    <LinkButton href={'#'} text={'New Goal'} imgSrc={addGoal} imgAlt={'addCircle'}/>
                </aside>
                <main className='w-full h-full overflow-scroll'>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Main
