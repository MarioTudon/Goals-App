import { useContext, useEffect } from 'react';
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import Aside from '../main/Aside';
import { Route, Routes } from 'react-router'
import { requestGoals } from '../../services/requests';
import { Context } from '../../context/Context';
import Login from '../main/Login';
import Signup from '../main/Signup';
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
            <Aside isAuthenticated={false}/>
                <Routes>
                    {/*Rutas publicas*/}
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
                    {/*Rutas privadas*/}
                    <Route path='/*' element={<ProtectedRoute element={GoalsList} isAuthenticated={false} />} />
                    <Route path='/Goals-List/*' element={<ProtectedRoute element={GoalsList} isAuthenticated={false} />} />
                    <Route path='/New-Goal' element={<ProtectedRoute element={NewGoal} isAuthenticated={false} />} />
                </Routes>
            </main>
        </>
    )
}

export default Main