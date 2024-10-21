import { useState } from 'react'
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'

function Main() {
    const [section, setSection] = useState('goalsList');
    const [goals, setGoals] = useState([]);

    const sections = {
        goalsList: <GoalsList goals={goals} />,
        newGoal: <NewGoal sendDataToMain={handleDataFromNewGoal} />
    }

    function handleDataFromNewGoal(data) {
        const key = Math.random()*1000;
        const { details, frequency, frequencyUnit, target, deadline, icon } = data;
        setGoals(prevGoals => [{ details, frequency, frequencyUnit, target, deadline, icon, key: key }, ...prevGoals]);
        setSection('goalsList');
    }

    function handleDataFromSideMenu(sectionID) {
        setSection(sectionID);
    }

    return (
        <>
            <main className='h-full relative bg-gradient-to-t from-gray-400 to-gray-100'>
                <SideMenu sendDataToMain={handleDataFromSideMenu} />
                {sections[section]}
            </main>
        </>
    )
}

export default Main