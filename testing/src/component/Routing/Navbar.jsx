import React from 'react'
import {Routes,Route, NavLink} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contactus from './Contactus'

const Navbar = () => {
  return (
    <div className='text-white'>
    <div className='h-[40px] bg-green-400 flex justify-center items-center px-2'>
        <ul className='flex gap-20 '>
            <li>
            <NavLink to='/home'>Home </NavLink>
            </li>
            <li>
            <NavLink to='/about'>AboutUs </NavLink>
            </li>
            <li>
            <NavLink to='/contact'>ContactUs</NavLink>
            </li>
           
        </ul>
    </div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contactus/>}></Route>
        </Routes>
    </div>
  )
}

export default Navbar