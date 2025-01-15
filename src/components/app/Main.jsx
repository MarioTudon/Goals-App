import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'
import { Route, Routes } from 'react-router'

function Main() {
    return (
        <>
            <main className='h-full relative bg-gradient-to-t from-gray-400 to-gray-100 overflow-y-auto lg:flex'>
                <SideMenu />
                <Routes>
                    <Route path="/*" element={<GoalsList />} />
                    <Route path='/Goals-List/*' element={<GoalsList />} />
                    <Route path='/New-Goal' element={<NewGoal />} />
                </Routes>
            </main>
        </>
    )
}

export default Main