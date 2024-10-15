import { useEffect, useState } from "react"
import Button from "../shared/Button"

function Goal({frequency, frequencyUnit, current, goal}) {
    const [percentage, setPercentage] = useState('0');
    const [countCurrent, setCountCurrent] = useState(current);
    const [countGoal, setCountGoal] = useState(goal);

    useEffect(()=>{
        setPercentage(`${countCurrent/countGoal*100}`);
    },[countCurrent,countGoal]);

    useEffect(()=>{
        setCountCurrent(current);
        setCountGoal(goal);
    },[current,goal]);

    function completeGoal(){
        if(percentage < 100){
            setCountCurrent((current)=>current+1);
        }
    }

    return (
        <>
            <div className="flex text-nowrap shrink-0 grow-0 justify-between items-center w-11/12 h-16 bg-gray-200 px-2 my-8 rounded-xl shadow-md shadow-gray-400">
                <div className="flex">
                    <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-full shadow-sm shadow-gray-400">🏆</div>
                </div>
                <div className="flex flex-col items-center text-sm font-semibold text-wrap text-center w-28">
                    <p className="font-bold">Practice coding</p>
                    <p>{frequency}<sub>/{frequencyUnit}</sub></p>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-2">
                        <div className="text-sm font-semibold">{countCurrent} of {countGoal}</div>
                        <div className="w-full h-2 rounded-full bg-gray-300 px-9 relative">
                            <div className={"h-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-500 absolute left-0"} style={{'width':`${percentage}%`}}></div>
                        </div>
                    </div>
                    <Button label={"Complete"} color={'bg-gray-50'} onClick={completeGoal}/>
                </div>
            </div>
        </>
    )
}

export default Goal