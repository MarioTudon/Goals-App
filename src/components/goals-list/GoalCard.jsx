import { useEffect, useState } from "react"
import Button from "../shared/Button"

function GoalCard({ icon, goal, frequency, frequencyUnit, initialCount, initialTarget, key }) {
    const [percentage, setPercentage] = useState('0');
    const [count, setCount] = useState(initialCount);
    const [target, setTarget] = useState(initialTarget);

    useEffect(() => {
        setPercentage(`${count / target * 100}`);
    }, [count, target]);

    useEffect(() => {
        setCount(initialCount);
        setTarget(initialTarget);
    }, [initialCount, initialTarget]);

    function completeGoal() {
        if (percentage < 100) {
            setCount(count => count + 1);
        }
    }

    function handleClick(e){
        e.stopPropagation();
    }

    return (
        <>
            <div className="flex justify-between items-center w-full h-auto bg-gray-200 p-2 rounded-xl shadow-md shadow-gray-400" onClick={handleClick}>
                <div className="flex">
                    <div className="w-11 h-11 flex justify-center items-center bg-gray-50 rounded-full shadow-sm shadow-gray-400">{icon}</div>
                </div>
                <div className="flex flex-col items-center text-sm font-semibold text-center w-24 mx-1 overflow-hidden">
                    <p className="font-bold">{goal}</p>
                    <p>{frequency}<sub>/{frequencyUnit}</sub></p>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-2 w-12">
                        <div className="text-sm font-semibold text-center">{count} of {target}</div>
                        <div className="w-full h-2 rounded-full bg-gray-300 relative">
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