import { useEffect, useState } from 'react'
import GoalsList from '../main/GoalsList'
import NewGoal from '../main/NewGoal'
import SideMenu from '../main/SideMenu'
import { Route, Router, Routes } from 'react-router'
import App from '../../App'

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
        goalsList: <GoalsList
            goals={goals}
            sendDataToMain={editDeleteGoal}
        />,
        newGoal: <NewGoal
            sendDataToMain={addGoal}
        />
    }

    function addGoal(form) {
        const { goal, frequency, frequencyUnit, target, icon, id } = form;
        setGoals(prevGoals => [{ goal, frequency, frequencyUnit, target, icon, id }, ...prevGoals]);
        setSection('goalsList');
    }

    function editDeleteGoal(data) {
        if (typeof data === "object") {
            const { goal, frequency, frequencyUnit, target, icon, id } = data;
            const editedGoals = goals.map(editedGoal => {
                if (editedGoal.id === id) {
                    return {
                        ...editedGoal,
                        goal: goal !== "" ? goal : editedGoal.goal,
                        frequency: frequency !== "" ? frequency : editedGoal.frequency,
                        frequencyUnit: frequencyUnit !== "" ? frequencyUnit : editedGoal.frequencyUnit,
                        target: target !== "" ? target : editedGoal.target,
                        icon: icon !== "" ? icon : editedGoal.icon
                    }
                }
                return editedGoal;
            })
            setGoals(editedGoals);
        }
        else {
            setGoals(
                goals.filter(g => g.id !== data)
            );
        }
    }

    return (
        <>
            <main className='h-full relative bg-gradient-to-t from-gray-400 to-gray-100 overflow-y-auto lg:flex'>
                <SideMenu />
                <Routes>
                    <Route index element={<GoalsList />} />
                    <Route path='/Goals-List' element={<GoalsList />} />
                    <Route path='/New-Goal' element={<NewGoal />} />
                </Routes>
            </main>
        </>
    )
}

export default Main