import GoalCard from "../goals-list/GoalCard";
import Button from "../shared/Button";

function NewGoal() {
    const frequencyUnits = [
        { value: "day", content: "Day", key: 0 },
        { value: "week", content: "Week", key: 1 },
        { value: "month", content: "Month", key: 2 },
        { value: "year", content: "Year", key: 3 },
    ]

    const icons = [
        "😀", "😃", "😄"
    ]

    return (
        <>
            <form action="" className="w-5/6 flex flex-col bg-gray-200 mx-auto px-4 pb-4 pt-2 rounded-t-xl mt-4 shadow-md shadow-gray-400">
                <label className="flex flex-col">
                    <div className="font-bold my-2">Describe your goal</div>

                    <input type="text" name="goal-description" id="goal-description" placeholder="E.g. Running 30 minutes" maxLength={30} className="w-full py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" />
                </label>
                <label className="flex flex-col">
                    <div className="font-bold my-2">How often do you want to meet the goal</div>

                    <div className="flex">
                        <input type="number" name="frequency" id="frequency" min={0} max={99} className="w-16 mr-5 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" />
                        <select name="frequency-unit" id="frequency-unit" className="w-fit py-2 px-3 rounded-full bg-gray-100 shadow-inner appearance-none shadow-gray-400">
                            {
                                frequencyUnits.map(frequencyUnit =>
                                    <option key={frequencyUnit.key} value={frequencyUnit.value}>{frequencyUnit.content}</option>
                                )
                            }
                        </select>
                    </div>
                </label>
                <label className="flex flex-col mr-10">
                    <div className="font-bold my-2">Enter your target goal</div>
                    <input type="number" name="" id="" min={0} max={99} className="w-16 mr-5 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" />
                </label>
                <label className="flex flex-col mr-10">
                    <div className="font-bold my-2">Enter the deadline for your goal</div>
                    <input type="date" name="" id="" className="w-36 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" />
                </label>
                <label className="flex flex-col mr-10">
                    <div className="font-bold my-2">How many times have you met this goal</div>
                    <input type="number" name="" id="" min={0} max={99} className="w-16 mr-5 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" />
                </label>
                <label className="flex flex-col">
                    <div className="font-bold"> Select an icon</div>

                    <select name="" id="" className="w-fit py-2 px-3 rounded-full bg-gray-100 shadow-inner appearance-none shadow-gray-400">
                        {
                            icons.map(icon =>
                                <option value={icon} key={icon}>{icon}</option>
                            )
                        }
                    </select>
                </label>
            </form>
            <div className="bg-gray-400 w-5/6 flex justify-end mx-auto px-4 py-2 rounded-b-xl">
                <Button label={"Add"} color={"bg-gray-200"} />
            </div>
        </>
    )
}

export default NewGoal