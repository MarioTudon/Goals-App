import { useState } from 'react'
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'

function Main() {
    const [section, setSection] = useState('goalsList');
    const [dataFromNewGoal, setDataFromNewGoaltAa] = useState({});

    const sections = {
        goalsList: <GoalsList dataFromMain={dataFromNewGoal} />,
        newGoal: <NewGoal sendDataToParent={handleDataFromNewGoal} />
    }

    function handleDataFromNewGoal(data) {
        setDataFromNewGoaltAa(data);
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