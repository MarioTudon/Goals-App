import { useContext, useEffect } from 'react';
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import Aside from '../main/Aside';
import { Route, Routes } from 'react-router'
import { requestGoals } from '../../services/requests';
import { GoalsContext } from '../../context/GoalsContext';
import Login from '../main/Login';
import Signup from '../main/Signup';
import ProtectedRoute from '../main/ProtectedRoute';
import { AuthContext } from '../../context/AuthContext';

function Main() {
    const [, goalsDispatch] = useContext(GoalsContext);
    const [authState] = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const goals = await requestGoals();
            goalsDispatch({ type: 'read', goals: goals });
        })();
    }, []);

    return (
        <>
            <main className='h-full relative bg-gradient-to-t from-gray-400 to-gray-100 overflow-y-auto lg:flex'>
                <Aside isAuthenticated={authState.authenticated} />
                <Routes>
                    {/*Rutas publicas*/}
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
                    {/*Rutas privadas*/}
                    <Route path='/*' element={<ProtectedRoute element={GoalsList} isAuthenticated={authState.authenticated} />} />
                    <Route path='/Goals-List/*' element={<ProtectedRoute element={GoalsList} isAuthenticated={authState.authenticated} />} />
                    <Route path='/New-Goal' element={<ProtectedRoute element={NewGoal} isAuthenticated={authState.authenticated} />} />
                </Routes>
            </main>
        </>
    )
}

export default Main