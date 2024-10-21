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
        newGoal: <NewGoal sendDataToMain={addGoal} />
    }

    function addGoal(newGoal) {
        const { icon, details, frequency, frequencyUnit, target, id } = newGoal;
        setGoals(prevGoals => [{ icon, details, frequency, frequencyUnit, target, id }, ...prevGoals]);
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