import { useContext, useEffect } from 'react';
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'
import { Route, Routes } from 'react-router'
import { requestGoals } from '../../services/requests';
import { Context } from '../../context/Context';

function Main() {
    const [, dispatch] = useContext(Context);

    useEffect(() => {
        (async () => {
            const goals = await requestGoals();
            dispatch({ type: 'read', goals: goals });
        })();
    }, []);

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