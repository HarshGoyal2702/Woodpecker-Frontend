import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from "./Dashboard/Dashboard"
import AdminDashboard from "./AdminControl/AdminDashboard"
import Alert from "./pages/Notification"
import SignInSide from './pages/SignIn'
import Home from './pages/Home'
// import Map from './pages/Map'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/dashboard' element= {<Dashboard/>}/>
    <Route path='/alert' element= {<Alert/>}/>
    {/* <Route path='/map' element= {<Map/>}/> */}
    <Route path='/admin' element= {<AdminDashboard/>}/>
    {/* <Route path='/map' element= {<Map/>}/> */}
    <Route path='/signin' element= {<SignInSide/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;