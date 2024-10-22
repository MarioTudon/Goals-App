import { useEffect, useState } from 'react';
import GoalCard from '../goals-list/GoalCard'
import EditGoal from '../goals-list/EditGoal';

function GoalsList({ goals = [], sendDataToMain }) {
    const [display, setDisplay] = useState(false);
    const [originalGoal, setOriginalGoal] = useState({});

    function openMenu(originalGoal) {
        setDisplay(true);
        setOriginalGoal(originalGoal);
    }

    function closeMnenu() {
        setDisplay(false);
    }

    function handleDataFromEditGoal(form) {
        sendDataToMain(form);
    }

    return (
        <>
            <div className='w-11/12 mx-auto'>
                <ul className='w-full h-full flex flex-col mt-2'>
                    {
                        goals.map(goal =>
                            <li key={goal.id} className='w-full my-2 flex justify-center' onClick={() => openMenu(goal)}>
                                <GoalCard goal={goal.goal} frequency={goal.frequency} frequencyUnit={goal.frequencyUnit} target={goal.target} icon={goal.icon} id={goal.id} />
                            </li>
                        )
                    }
                </ul>
            </div>
            <EditGoal closeMenu={closeMnenu} display={display} originalGoal={originalGoal} goalsList={goals} sendDataToGoalsList={handleDataFromEditGoal} />
        </>
    )
}

export default GoalsList
