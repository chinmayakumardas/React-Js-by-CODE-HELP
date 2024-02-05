import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/ClockTime'
import ClockHeading from './components/Clockheading'

function App() {
  

  return (
    <>
        <ClockHeading/>
        <ClockTime/>
        <ClockSlogan/>
    </> 
  )
}

export default App
