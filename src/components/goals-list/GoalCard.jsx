import { useEffect, useState } from "react"
import Button from "../shared/Button"

function GoalCard({ icon, goal, frequency, frequencyUnit, count, target, key }) {
    const [percentage, setPercentage] = useState('0');
    const [newCount, setCount] = useState(initialCount);
    const [newTarget, setTarget] = useState(initialTarget);

    useEffect(() => {
        setPercentage(`${newCount / newTarget * 100}`);
    }, [newCount, newTarget]);

    useEffect(() => {
        setCount(initialCount);
        setTarget(initialTarget);
    }, [initialCount, initialTarget]);

    function completeGoal() {
        if (percentage < 100) {
            setCount(newCount => newCount + 1);
        }
    }

    function handleClick(e){
        e.stopPropagation();
    }

    return (
        <>
            <div className="flex justify-between items-center w-full h-auto bg-gray-200 p-2 rounded-xl shadow-md shadow-gray-400" onClick={handleClick}>
                <div className="flex">
                    <div className="w-14 h-14 flex text-2xl justify-center items-center bg-gray-50 rounded-full shadow-inner shadow-gray-400">{icon}</div>
                </div>
                <div className="flex flex-col items-center text-sm font-semibold text-center w-24 mx-1 h-auto">
                    <p className="font-bold overflow-x-auto w-full">{goal}</p>
                    <p>{frequency}<sub>/{frequencyUnit}</sub></p>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col items-center mr-2 w-20">
                        <div className="text-sm font-semibold text-center">{newCount} of {newTarget}</div>
                        <div className="w-full h-2 rounded-full bg-gray-300 relative  shadow-sm shadow-gray-400">
                            <div className={"h-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-500 absolute left-0"} style={{ 'width': `${percentage}%` }}></div>
                        </div>
                    </div>
                    <Button label={"Complete"} color={'bg-gray-50'} onClick={completeGoal} />
                </div>
            </div>
        </>
    )
}

export default GoalCard