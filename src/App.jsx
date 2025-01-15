import Header from './components/app/Header'
import Footer from './components/app/Footer'
import Main from './components/app/Main'
import EditGoal from './components/goals-list/EditGoal'

function App() {
  return (
    <>
      <div className='flex flex-col h-screen overflow-hidden' >
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
