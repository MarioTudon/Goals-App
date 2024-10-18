import { useEffect, useState } from 'react';
import GoalCard from '../goals-list/GoalCard'

function GoalsList({ dataFromMain }) {
    const [goals, setGoals] = useState([])
    useEffect(() => {
        /*console.log(new Date().toLocaleTimeString('es-ES', {
            hour12: false,
        }));*/
    }, []);

    useEffect(() => {
        if (dataFromMain) {
            const newGoal = {
                details: dataFromMain.detailsForm,
                frequency: dataFromMain.frequencyForm,
                frequencyUnit: dataFromMain.frequencyUnitsForm,
                target: dataFromMain.targetForm,
                deadline: dataFromMain.deadlineForm,
                icon: dataFromMain.iconForm
            };
    
            // Verificar que los datos necesarios no estén vacíos
            if (newGoal.details && newGoal.frequency && newGoal.deadline) {
                setGoals(prevGoals => [newGoal, ...prevGoals]);
            }
        }
    }, [dataFromMain]);

    return (
        <>
            <div className='w-5/6 mx-auto'>
                <ul className='w-full h-full flex flex-col mt-2'>
                    {
                        goals.map(goal =>
                            <li key={goal.key} className='w-full my-2 flex justify-center'>
                                <GoalCard goal={goal.details} icon={goal.icon} frequency={goal.frequency} frequencyUnit={goal.frequencyUnit} initialCount={0} initialTarget={goal.target} />
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default GoalsList
