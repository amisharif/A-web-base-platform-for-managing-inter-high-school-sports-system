
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import MatchSummary from './components/Test/MatchSummary'
import OfficeLogin from './components/AccessControl/Login/OfficeLogin'
import OfficeRegister from './components/AccessControl/Register/OfficeRegister'

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
