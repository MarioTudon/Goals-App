import { useEffect, useState } from 'react';
import GoalCard from '../goals-list/GoalCard'

function GoalsList({ goals=[] }) {
    return (
        <>
            <div className='w-11/12 mx-auto'>
                <ul className='w-full h-full flex flex-col mt-2'>
                    {
                        goals.map(goal =>
                            <li key={goal.key} className='w-full my-2 flex justify-center'>
                                <GoalCard goal={goal.details} icon={goal.icon} frequency={goal.frequency} frequencyUnit={goal.frequencyUnit} count={goal.count} target={goal.target} />
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default GoalsList
