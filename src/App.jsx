import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from "./Dashboard/Dashboard"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;