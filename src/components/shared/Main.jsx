import LinkButton from './LinkButton'
import addGoal from '../../assets/add-goal.svg'
import checklist from '../../assets/checklist.svg'
import { AnimatedBackground } from 'animated-backgrounds'

function Main({ children }) {
    return (
        <>
        <AnimatedBackground animationName='quantumField'/>
            <div className='flex items-center h-full'>
                <aside className='flex flex-col text-gray-700 backdrop-blur-sm shadow w-60 h-full'>
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
