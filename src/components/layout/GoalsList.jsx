import { useEffect } from 'react';
import GoalCard from '../main/GoalCard'

function GoalsList({ display }) {
    const goals = [
        { goal: "Running 30 minutes", icon: "🏆", frequency: 4, frequencyUnit: "week", initialCount: 0, initialTarget: 4, key: 0 },
        { goal: "Read a book", icon: "📚", frequency: 1, frequencyUnit: "month", initialCount: 0, initialTarget: 12, key: 1 },
        { goal: "Practice programming", icon: "👨🏽‍💻", frequency: 5, frequencyUnit: "week", initialCount: 0, initialTarget: 5, key: 2 }
    ];

    useEffect(() => {
        /*console.log(new Date().toLocaleTimeString('es-ES', {
            hour12: false,
        }));*/
    }, []);

    return display && (
        <>
            <div className='w-full py-2'>
                <ul className='w-full h-full flex flex-col'>
                    {
                        goals.map(goal =>
                            <li key={goal.key} className='w-full my-2 flex justify-center'>
                                <GoalCard goal={goal.goal} icon={goal.icon} frequency={goal.frequency} frequencyUnit={goal.frequencyUnit} initialCount={goal.initialCount} initialTarget={goal.initialTarget} />
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default GoalsList
