import { useEffect, useState } from 'react'
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'

function Main() {
    const [section, setSection] = useState('goalsList');
    const [goals, setGoals] = useState(() => {
        const savedGoals = JSON.parse(localStorage.getItem('goals'));
        return savedGoals || [];
    });

    useEffect(() => {
        localStorage.setItem('goals', JSON.stringify(goals));
    }, [goals]);

    const sections = {
        goalsList: <GoalsList goals={goals} />,
        newGoal: <NewGoal sendDataToMain={handleDataFromNewGoal} />
    }

    function handleDataFromNewGoal(data) {
        const key = Math.random() * 1000;
        const { icon, details, frequency, frequencyUnit, count, target } = data;
        setGoals(prevGoals => [{ icon, details, frequency, frequencyUnit, count: 0, target, key: key }, ...prevGoals]);
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