import { useEffect, useState } from "react"
import Button from "../shared/Button"

function GoalCard({ goal, frequency, frequencyUnit, target, icon, id, sendCount, setResetCount }) {
    const [percentage, setPercentage] = useState('0');
    const [count, setCount] = useState(() => {
        const savedCount = JSON.parse(localStorage.getItem(id));
        return savedCount || 0
    });

    useEffect(() => {
        setPercentage(`${count / target * 100}`);
        localStorage.setItem(id, JSON.stringify(count));
        sendCount(count);
    }, [count, target]);

    function resetCount() {
        setCount(0);
    }

    useEffect(() => {
        setResetCount(resetCount);
    }, [setResetCount])

    function completeGoal(e) {
        e.stopPropagation();
        if (percentage < 100) {
            setCount(newCount => newCount + 1);
        }
    }

    return (
        <>
            <div className="flex justify-between items-center w-full h-auto bg-gray-200 p-2 rounded-xl shadow-md shadow-gray-400 lg:cursor-pointer">
                <div className="flex">
                    <div className="w-14 h-14 flex text-2xl justify-center items-center bg-gray-50 rounded-full shadow-inner shadow-gray-400">{icon}</div>
                </div>
                <div className="flex flex-col items-center text-sm font-semibold text-center w-24 mx-1 h-auto">
                    <p className="font-bold overflow-x-auto w-full">{goal}</p>
                    <p>{frequency}<sub>/{frequencyUnit}</sub></p>
                </div>
                <div className="flex items-center">
                    <div className="flex flex-col items-center mr-2 w-20">
                        <div className="text-sm font-semibold text-center">{count} of {target}</div>
                        <div className="w-full h-2 rounded-full bg-gray-300 relative  shadow-sm shadow-gray-400">
                            <div className={"h-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-500 absolute left-0"} style={{ 'width': `${percentage}%` }}></div>
                        </div>
                    </div>
                    <Button label={"Complete"} styles={'bg-gray-50'} onClick={completeGoal} style={{ "background-color": "red" }} />
                </div>
            </div>
        </>
    )
}

export default GoalCard