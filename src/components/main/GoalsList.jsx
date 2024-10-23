import { useEffect, useRef, useState } from 'react';
import GoalCard from '../goals-list/GoalCard'
import EditGoal from '../goals-list/EditGoal';

function GoalsList({ goals = [], sendDataToMain }) {
    const [display, setDisplay] = useState(false);
    const [originalGoal, setOriginalGoal] = useState({});
    const [count, setCount] = useState(0);
    const resetCounterRefs = useRef({}); // Un objeto para manejar múltiples referencias

    function openMenu(originalGoal) {
        setDisplay(true);
        setOriginalGoal(originalGoal);
    }

    function closeMenu() {
        setDisplay(false);
    }

    function resetCounter(goalId) {
        // Verifica si existe una referencia para el contador de esa meta en particular
        if (resetCounterRefs.current[goalId]) {
            resetCounterRefs.current[goalId]();
        }
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
                                <GoalCard 
                                    goal={goal.goal} 
                                    frequency={goal.frequency} 
                                    frequencyUnit={goal.frequencyUnit} 
                                    target={goal.target} 
                                    icon={goal.icon} 
                                    id={goal.id} 
                                    sendCount={handleCount}
                                    setResetCount={fn => resetCounterRefs.current[goal.id] = fn} // Asigna la función de reset a la referencia específica de la meta
                                />
                            </li>
                        )
                    }
                </ul>
            </div>
            <EditGoal 
                closeMenu={closeMenu} 
                display={display} 
                originalGoal={originalGoal} 
                goalsList={goals} 
                sendDataToGoalsList={handleDataFromEditGoal} 
                count={count} 
                resetCount={() => resetCounter(originalGoal.id)} // Resetea solo el contador de la meta que está siendo editada
            />
        </>
    )
}

export default GoalsList;