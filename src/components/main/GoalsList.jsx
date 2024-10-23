import { useEffect, useRef, useState } from 'react';
import GoalCard from '../goals-list/GoalCard'
import EditGoal from '../goals-list/EditGoal';

function GoalsList({ goals = [], sendDataToMain }) {
    const [display, setDisplay] = useState(false);
    const [originalGoal, setOriginalGoal] = useState({});
    const [count, setCount] = useState(0);
    const resetCounterRef = useRef(null);

    function openMenu(originalGoal) {
        setDisplay(true);
        setOriginalGoal(originalGoal);
    }

    function closeMenu() {
        setDisplay(false);
    }

    function resetCounter(){
        resetCounterRef.current();
        closeMenu();
        }

    function handleDataFromEditGoal(form) {
        sendDataToMain(form);
    }

    function handleCount(count) {
        setCount(count);
    }

    return (
        <>
            <div className='w-11/12 mx-auto h-full lg:w-1/2'>
                <ul className='w-full h-full flex flex-col lg:mt-0 overflow-y-auto overflow-x-clip lg:px-8'>
                    {
                        goals.map(goal =>
                            <li key={goal.id} className='w-full my-2 flex justify-center last:mb-4 first:mt-4' onClick={() => openMenu(goal)}>
                                <GoalCard goal={goal.goal} frequency={goal.frequency} frequencyUnit={goal.frequencyUnit} target={goal.target} icon={goal.icon} id={goal.id} sendCount={handleCount} setResetCount={fn => resetCounterRef.current = fn}/>
                            </li>
                        )
                    }
                </ul>
            </div>
            <EditGoal closeMenu={closeMenu} display={display} originalGoal={originalGoal} goalsList={goals} sendDataToGoalsList={handleDataFromEditGoal} count={count} resetCount={resetCounter} />
        </>
    )
}

export default GoalsList
