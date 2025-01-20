import { useContext, useEffect } from 'react';
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'
import { Route, Routes } from 'react-router'
import { requestGoals } from '../../services/requests';
import { Context } from '../../context/Context';
import Access from '../main/Access';
import Register from '../main/Register';
import ProtectedRoute from '../../services/ProtectedRoute';

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
            <SideMenu isAuthenticated={false}/>
                <Routes>
                    {/*Rutas publicas*/}
                    <Route path='/Access' element={<Access />} />
                    <Route path='/Register' element={<Register />} />
                    {/*Rutas privadas*/}
                    <Route path='/*' element={<ProtectedRoute element={GoalsList} isAuthenticated={false} />} />
                    <Route path='/Goals-List/*' element={<ProtectedRoute element={GoalsList} isAuthenticated={false} />} />
                    <Route path='/New-Goal' element={<ProtectedRoute element={NewGoal} isAuthenticated={true} />} />
                </Routes>
            </main>
        </>
    )
}

export default Main