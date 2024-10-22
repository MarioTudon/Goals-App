import { useState } from "react";
import Button from "../shared/Button";

const icons = [
    "💪", "👽", "🧠"
]

const frequencyUnits = [
    { value: "day", content: "Day", key: 0 },
    { value: "week", content: "Week", key: 1 },
    { value: "month", content: "Month", key: 2 },
    { value: "year", content: "Year", key: 3 },
]

function EditGoal({ goalData, display, closeMenu }) {

    const [form, setForm] = useState({
        details: "",
        frequency: "",
        frequencyUnit: "day",
        target: "",
        icon: "💪",
        id: ""
    })

    function handleChange(e, prop) {
        setForm(state => ({ ...state, [prop]: e.target.value }));
    }

    function removeLeadingZerosRegex(str) {
        return str.replace(/^0+(?=\d)/, '');
    }

    function editGoal() {
    }

    function verifyAndFormatForm() {
        if (form.details === "") { alert("Enter your goal description"); return false; }
        if (form.frequency === "") { alert("Enter the frequency of goal"); return false; }
        if (form.frequency < 1 || form.frequency > 99) { alert("Frequency must be between 1 and 99"); return false; }
        if (form.target === "") { alert("Enter your target"); return false; }
        if (form.target < 1 || form.target > 99) { alert("Target must be between 1 and 99"); return false; }
        form.frequency = removeLeadingZerosRegex(form.frequency);
        form.target = removeLeadingZerosRegex(form.target);
        return true;
    }

    return display && (
        <>
            <div className="fixed w-full top-0 h-full bg-gray-400-transparent z-30">
                <div className="w-5/6 flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed">
                    <div className="bg-gray-400 w-full flex justify-center mx-auto px-4 py-2 rounded-t-xl uppercase font-bold text-gray-100">
                        Edit your goal
                    </div>
                    <form action="" className="w-full flex flex-col bg-gray-200 mx-auto px-4 pt-2 shadow-md shadow-gray-400">
                        <label className="flex flex-col">
                            <div className="font-bold my-2">Describe your goal</div>
                            <input type="text" name="goal-description" id="goal-description" placeholder={goalData.details} maxLength={30} className="w-full py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" onChange={e => handleChange(e, 'details')} />
                        </label>
                        <label className="flex flex-col">
                            <div className="font-bold my-2">How often do you want to meet the goal</div>
                            <div className="flex">
                                <input type="number" name="frequency" id="frequency" className="w-16 mr-5 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" onChange={e => handleChange(e, 'frequency')} placeholder={goalData.frequency}/>
                                <select name="frequency-unit" id="frequency-unit" className="w-fit py-2 px-3 rounded-full bg-gray-100 shadow-inner appearance-none shadow-gray-400" onChange={e => handleChange(e, 'frequencyUnit')} value={goalData.frequencyUnit}>
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
                            <input type="number" name="" id="" className="w-16 mr-5 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" onChange={e => handleChange(e, 'target')} placeholder={goalData.target}/>
                        </label>
                        <label className="flex flex-col">
                            <div className="font-bold"> Select an icon</div>
                            <select name="" id="" className="w-fit py-2 px-3 rounded-full bg-gray-100 shadow-inner appearance-none shadow-gray-400" onChange={e => handleChange(e, 'icon')} placeholder={goalData.icon}>
                                {
                                    icons.map(icon =>
                                        <option value={icon} key={icon}>{icon}</option>
                                    )
                                }
                            </select>
                        </label>
                    </form>
                    <div className="bg-gray-200 pb-2">
                        <Button label={"Reset count"} styles={"bg-gray-700 text-gray-200 mx-auto"} />
                    </div>
                    <div className="bg-gray-400 w-full flex justify-between mx-auto px-4 py-2">
                        <Button label={"Cancel"} styles={"bg-gray-200"} onClick={closeMenu} />
                        <Button label={"Delete"} styles={"bg-gray-200 text-red-700 outline outline-1 outline-red-700"} />
                        <Button label={"Confirm"} styles={"bg-gray-200"} onClick={editGoal} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditGoal