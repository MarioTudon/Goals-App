import { useEffect } from 'react';
import Goal from '../list/Goal'

function Main() {
    const goals = [
        { goal: "Run 30 minutes", icon: "🏆", frequency: 4, frequencyUnit: "week", initialCount: 0, initialTarget: 4, key: 0 },
        { goal: "Read a book", icon: "📚", frequency: 1, frequencyUnit: "month", initialCount: 0, initialTarget: 12, key: 1 },
        { goal: "Practice programming", icon: "👨🏽‍💻", frequency: 5, frequencyUnit: "week", initialCount: 0, initialTarget: 5, key: 2 }
    ];

    useEffect(() => {
        const date = new Date();
        const hour = date.toTimeString();
        console.log(hour);
    }, []);

    return (
        <>
            <main className='w-full py-2'>
                <ul className='w-full h-full flex flex-col'>
                    {
                        goals.map(goal =>
                            <li key={goal.key} className='w-full my-2 flex justify-center'>
                                <Goal goal={goal.goal} icon={goal.icon} frequency={goal.frequency} frequencyUnit={goal.frequencyUnit} initialCount={goal.initialCount} initialTarget={goal.initialTarget} />
                            </li>
                        )
                    }
                </ul>
            </main>
        </>
    )
}

export default Main
