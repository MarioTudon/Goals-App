import LinkButton from './LinkButton'
import addGoal from '../../assets/add-goal.svg'
import checklist from '../../assets/checklist.svg'

function Main({ children }) {
    return (
        <>
            <div className='h-main flex items-center'>
                <aside className='flex flex-col text-gray-700 bg-gray-100 shadow w-60 h-full'>
                    <LinkButton href={'/list'} text={'Goals List'} imgSrc={checklist} imgAlt={'checklist'}/>
                    <LinkButton href={'/list'} text={'New Goal'} imgSrc={addGoal} imgAlt={'addCircle'}/>
                </aside>
                <main className='w-full h-full overflow-scroll'>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Main
