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
        goalsList: <GoalsList goals={goals} sendDataToMain={editGoal} />,
        newGoal: <NewGoal sendDataToMain={addGoal} />
    }

    function addGoal(form) {
        const { goal, frequency, frequencyUnit, target, icon, id } = form;
        setGoals(prevGoals => [{ goal, frequency, frequencyUnit, target, icon, id }, ...prevGoals]);
        setSection('goalsList');
    }

    function editGoal(form) {
        if (typeof form === "object") {
            const { goal, frequency, frequencyUnit, target, icon, id } = form;
            const editedGoals = goals.map(editedGoal => {
                if (editedGoal.id === id) {
                    editedGoal.goal = goal !== "" ? goal : editedGoal.goal;
                    editedGoal.frequency = frequency !== "" ? frequency : editedGoal.frequency;
                    editedGoal.frequencyUnit = frequencyUnit !== "" ? frequencyUnit : editedGoal.frequencyUnit;
                    editedGoal.target = target !== "" ? target : editedGoal.target;
                    editedGoal.icon = icon !== "" ? icon : editedGoal.icon;
                }
                return editedGoal;
            })
            setGoals(editedGoals)
        }
        else {
            console.log(form);
            setGoals(
                goals.filter(g => g.id !== form)
            );
        }
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