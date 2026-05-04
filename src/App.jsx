import React from 'react'
import {Route,Routes } from 'react-router'
import Signup  from "./components/Signup"
import DisplayAll from "./components/DisplayAll"
import DisplayCompleted from "./components/DisplayCompleted"
function App() {
  return (

    
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/displayall" element={<DisplayAll/>}/>
            <Route path="displaycompleted" element={<DisplayCompleted/>}/>
        </Routes>

        
    
    
  )
}

export default App