import { useEffect, useState } from 'react';
import GoalCard from '../goals-list/GoalCard'
import EditGoal from './EditGoal';

function GoalsList({ goals = [] }) {
    const [display, setDisplay] = useState(false);
    const [goal, setGoal] = useState({});

    function openMenu(goal) {
        setDisplay(true);
        setGoal(goal);
    }

    function closeMnenu() {
        setDisplay(false);
    }

    return (
        <>
            <div className='w-11/12 mx-auto'>
                <ul className='w-full h-full flex flex-col mt-2'>
                    {
                        goals.map(goal =>
                            <li key={goal.id} className='w-full my-2 flex justify-center' onClick={()=>openMenu(goal)}>
                                <GoalCard goal={goal.details} icon={goal.icon} frequency={goal.frequency} frequencyUnit={goal.frequencyUnit} target={goal.target} id={goal.id} />
                            </li>
                        )
                    }
                </ul>
            </div>
            <EditGoal closeMenu={closeMnenu} display={display} goal={goal}/>
        </>
    )
}

export default GoalsList
