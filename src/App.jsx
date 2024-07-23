import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from "./Dashboard/Dashboard"
import AdminDashboard from "./AdminControl/AdminDashboard"
import Alert from "./pages/Notification"
import SignInSide from './pages/SignIn'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Agent from './AdminControl/Agent'
import NewDisaster from './AdminControl/NewDisaster'
// import Map from './pages/Map'
import Disaster from "./AdminControl/Disaster"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/dashboard' element= {<Dashboard/>}/>
    <Route path='/alert' element= {<Alert/>}/>
    <Route path='/disaster' element= {<Disaster/>}/>
    <Route path='/admin' element= {<AdminDashboard/>}/>
    {/* <Route path='/map' element= {<Map/>}/> */}
    <Route path='/signin' element= {<SignInSide/>}/>
    <Route path='/admin/list/all-agents' element={<Agent/>}/>
    <Route path='/admin/list/new-disaster' element={<NewDisaster/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;