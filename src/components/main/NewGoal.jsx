import GoalCard from "../goals-list/GoalCard";

function NewGoal() {
    const frequencyUnits = [
        { value: "day", content: "day", key: 0 },
        { value: "week", content: "week", key: 1 },
        { value: "month", content: "month", key: 2 },
        { value: "year", content: "year", key: 3 },
    ]

    const icons = [
        "😀", "😃", "😄"
    ]

    return (
        <>
            <form action="">
                <label>
                    Describe your goal
                    <input type="text" name="goal-description" id="goal-description" placeholder="E.g. Running 30 minutes" maxLength={30} />
                </label>
                <label>
                    Enter how often you want to meet the goal <sub>E.g. 2/week</sub>
                    <input type="number" name="frequency" id="frequency" min={0} max={99} />
                    <select name="frequency-unit" id="frequency-unit">
                        {
                            frequencyUnits.map(frequencyUnit =>
                                <option key={frequencyUnit.key} value={frequencyUnit.value}>{frequencyUnit.content}</option>
                            )
                        }
                    </select>
                </label>
                <label>
                    Enter your target goal
                    <input type="number" name="" id="" min={0} max={99} />
                </label>
                <label>
                    Select an icon
                    <select name="" id="">
                        {
                            icons.map(icon =>
                                <option value={icon} key={icon}>{icon}</option>
                            )
                        }
                    </select>
                </label>
            </form>
        </>
    )
}

export default NewGoal