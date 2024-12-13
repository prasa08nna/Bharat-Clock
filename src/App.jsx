import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/ClockHeading'
import { FirstLine,SecondLine } from './Components/FirstLine'

function App() {
  return <center>
    <div className="container">
    <Heading></Heading>
    <FirstLine></FirstLine>
    <SecondLine></SecondLine>
    </div>
    
  </center>
}

export default App
