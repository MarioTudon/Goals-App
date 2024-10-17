import { useRef, useState } from 'react'
import Header from './components/layout/Header'
import GoalsList from './components/layout/GoalsList'
import Footer from './components/layout/Footer'
import SideMenu from './components/layout/SideMenu'
import NewGoal from './components/layout/NewGoal'

function App() {
  const [displayGoalsList, setDisplayGoalsList] = useState(true);
  const [displayNewGoal, setDisplayNewGoal] = useState(false);

  function handleDataFromSideMenu(id) {
    switch (id) {
      case "goalsList":
        setDisplayGoalsList(true);
        setDisplayNewGoal(false);
        break;
      case "newGoal":
        setDisplayGoalsList(false);
        setDisplayNewGoal(true);
        break;
    }
  }

  return (
    <>
      <div className='flex flex-col h-screen overflow-hidden' >
        <Header />
        <main className='flex h-full relative'>
          <SideMenu sendDataToApp={handleDataFromSideMenu} />
          <GoalsList display={displayGoalsList} />
          <NewGoal display={displayNewGoal} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
