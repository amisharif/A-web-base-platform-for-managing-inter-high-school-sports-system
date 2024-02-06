
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import MatchSummary from './components/Test/MatchSummary'

function App() {
  

  return (
    <>
      <div className="App">
        
        <Header></Header>
        <Outlet></Outlet>
        
      </div>
      
    </>
  )
}

export default App
