import { useEffect, useRef, useState } from 'react';
import GoalCard from '../goals-list/GoalCard'
import EditGoal from '../goals-list/EditGoal';

function GoalsList({ }) {
    const goals = [
        {
            goal: "Practicar programación",
            frequency: 5,
            frequencyUnit: "Month",
            target:5,
            icon:"🧠",
            id: 1
        },
    ]
    return (
        <>
            <div className='w-11/12 mx-auto h-full lg:w-1/2'>
                <ul className='w-full h-full flex flex-col lg:mt-0 overflow-y-auto overflow-x-clip lg:px-8'>
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
            <EditGoal />
        </>
    )
}

export default GoalsList;