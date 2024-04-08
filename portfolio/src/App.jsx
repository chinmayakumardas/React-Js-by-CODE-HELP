
import "./App.css";
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact'
import Education from "./Components/Education";
const App = () => {
  return (
    <div className='bg-[#14213d] h-[100%] min-h-screen text-white mx-auto relative flex flex-col gap-5'>
      <nav className='flex fixed gap-5 w-full justify-around h-[50px] bg-[indigo] font-mono py-auto py-2'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/education'>Education</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/project'>Project</NavLink>
        <NavLink to='/experience'>Experience</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
      
      <footer className='h-[50px] bg-[Burgundy] absolute w-full bottom-0 bg-white text-black'>
        footer
      </footer>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/education" element={<Education/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
