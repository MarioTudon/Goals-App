import { useEffect, useState } from "react"
import Button from "../shared/Button"

function Goal({ icon, goal, frequency, frequencyUnit, current, target }) {
    const [percentage, setPercentage] = useState('0');
    const [countCurrent, setCountCurrent] = useState(current);
    const [countTarget, setCountTarget] = useState(target);

    useEffect(() => {
        setPercentage(`${countCurrent / countTarget * 100}`);
    }, [countCurrent, countTarget]);

    useEffect(() => {
        setCountCurrent(current);
        setCountTarget(target);
    }, [current, target]);

    function completeGoal() {
        if (percentage < 100) {
            setCountCurrent((current) => current + 1);
        }
    }

    function handleClick(e){
        e.stopPropagation();
    }

    return (
        <>
            <div className="flex justify-between items-center w-11/12 h-auto bg-gray-200 p-2 my-2 rounded-xl shadow-md shadow-gray-400" onClick={handleClick}>
                <div className="flex">
                    <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-full shadow-sm shadow-gray-400">{icon}</div>
                </div>
                <div className="flex flex-col items-center text-sm font-semibold text-center w-28">
                    <p className="font-bold">{goal}</p>
                    <p>{frequency}<sub>/{frequencyUnit}</sub></p>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-2">
                        <div className="text-sm font-semibold">{countCurrent} of {countTarget}</div>
                        <div className="w-full h-2 rounded-full bg-gray-300 px-9 relative">
                            <div className={"h-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-500 absolute left-0"} style={{ 'width': `${percentage}%` }}></div>
                        </div>
                    </div>
                    <Button label={"Complete"} color={'bg-gray-50'} onClick={completeGoal} />
                </div>
            </div>
        </>
    )
}

export default Goal