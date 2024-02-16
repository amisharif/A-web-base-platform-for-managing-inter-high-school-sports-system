
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import OfficeLogin from './components/AccessControl/Login/OfficeLogin'
import OfficeRegister from './components/AccessControl/Register/OfficeRegister'
import Extra from './components/Extra/Extra'
import StudentCard from './components/SchoolMain/StudentCard/StudentCard'
import ShowTeamInfo from './components/SchoolMain/ShowTeamInfo/ShowTeamInfo'
import Statistics from './components/Statistics/Statistics'
import Stat from './components/Statistics/Stat'

function App() {
  

  return (
    <>
      <div className="mx-auto">
        
        <Header></Header>
        <Outlet></Outlet>
        
      </div>
      
    </>
  )
}

export default App
