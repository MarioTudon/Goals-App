import GoalCard from '../goals-list/GoalCard'
import EditGoal from '../goals-list/EditGoal';
import { Route, Routes, useNavigate } from 'react-router';
import { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { requestGoals } from '../../services/requests';

function GoalsList() {
    const navigate = useNavigate();
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        const fetchGoals = async () => {
            const goals = await requestGoals();
            dispatch({ type: 'read', goals: goals });
        };
    
        fetchGoals();
    }, []);

    return (
        <>
            <div className='w-11/12 mx-auto h-full lg:w-1/2'>
                <ul className='w-full h-full flex flex-col lg:mt-0 overflow-y-auto overflow-x-clip lg:px-8'>
                    {
                        state?.order?.map(id =>
                            <li key={id} className='w-full my-2 flex justify-center last:mb-4 first:mt-4' onClick={() => { navigate(`/Goals-App/Goals-List/${id}`) }}>
                                <GoalCard
                                    goal={state.objects[id].goal}
                                    frequency={state.objects[id].frequency}
                                    frequencyUnit={state.objects[id].frequencyUnit}
                                    target={state.objects[id].target}
                                    icon={state.objects[id].icon}
                                    id={state.objects[id].id}
                                    count={state.objects[id].count}
                                />
                            </li>
                        )
                    }
                </ul>
            </div>
            <Routes>
                <Route path='/:id' element={<EditGoal />} />
            </Routes>
        </>
    )
}

export default GoalsList;