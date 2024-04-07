import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Contact from "./Component/Contact";
import About from './Component/About';
import Content from './Component/Content';
import { Link } from "react-router-dom";
import Home from './Component/Home';
function App() {
 
  return (
    <div className="App ">
    <nav className="">
      <ul className="flex gap-20">
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/content'>Content</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
       
      </ul>
    </nav>
    <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/content' element={<Content></Content>}></Route>
          <Route path='/*' element={<p>Page not found</p>}></Route>

    </Routes>
    </div>
  );
}

export default App;
