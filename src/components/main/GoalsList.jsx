    import { useContext, useEffect, useRef, useState } from 'react';
    import GoalCard from '../goals-list/GoalCard'
    import EditGoal from '../goals-list/EditGoal';
    import { Route, Routes, useNavigate } from 'react-router';
    import Context from '../../context';

    function GoalsList() {
        const goals = [
            {
                goal: "Practicar programación",
                frequency: 20,
                frequencyUnit: "Month",
                target: 240,
                icon: "👨‍💻",
                id: 1
            },
            {
                goal: "Hacer ejercicio",
                frequency: 5,
                frequencyUnit: "Week",
                target: 50,
                icon: "🏃‍♂️",
                id: 2
            },
            {
                goal: "Leer un libro",
                frequency: 1,
                frequencyUnit: "Month",
                target: 8,
                icon: "📖",
                id: 3
            },
        ]
        const navigate = useNavigate();
        const test = useContext(Context);
        console.log(test);

        return (
            <>
                <div className='w-11/12 mx-auto h-full lg:w-1/2'>
                    <ul className='w-full h-full flex flex-col lg:mt-0 overflow-y-auto overflow-x-clip lg:px-8' onClick={()=>{navigate('/Goals-App/Goals-List/Edit-Goal')}}>
                        {
                            goals.map(goal =>
                                <li key={goal.id} className='w-full my-2 flex justify-center last:mb-4 first:mt-4'>
                                    <GoalCard
                                        goal={goal.goal}
                                        frequency={goal.frequency}
                                        frequencyUnit={goal.frequencyUnit}
                                        target={goal.target}
                                        icon={goal.icon}
                                        id={goal.id}
                                    />
                                </li>
                            )
                        }
                    </ul>
                </div>
                <Routes>
                    <Route path='/Edit-Goal' element={<EditGoal />} />
                </Routes>
            </>
        )
    }

    export default GoalsList;