import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from './Components/LoginForm';
import Signup from './Components/SignupForm';
import Dashboard from './pages/Dashboard';
import { useState } from "react";
import Contact from './pages/Contact';
import PrivateRoute from "./Components/PrivateRoute";
function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);


  return <div className="w-screen h-screen bg-richblack-900 text-white">
    <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>

    <Routes>
      <Route path='/' element={<Home  setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />

      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
               <Dashboard/>
          </PrivateRoute>
      } />

    </Routes>
  </div>;
}

export default App;
