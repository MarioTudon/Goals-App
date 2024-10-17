import { useState } from 'react'
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'

const sections = {
    goalsList: <GoalsList />,
    newGoal: <NewGoal />
}

function Main() {
    const [section, setSection] = useState('goalsList')

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