import React from "react";
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";
import {toast} from 'react-hot-toast'

function Navbar(props) {
  const { isLoggedIn, setIsLoggedIn } = props; // Destructure props

  return (
    <div className="text-black flex flex-1 justify-evenly items-center text-3xl">
      <Link to='/'>
        <img src={logo} alt="textlogo" width={160} height={32} loading="lazy" />
      </Link>
      <nav className="flex gap-3">
        <ul className="flex gap-3">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      <div className="flex ml-5 mr-3 gap-3">
        {!isLoggedIn && <Link to='/login'><button>Login</button></Link>}
        {!isLoggedIn && <Link to='/signup'><button>Signup</button></Link>}
        {isLoggedIn && 
          <Link to='/'>
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}>Log Out</button>
          </Link>
        }
        {isLoggedIn && <Link to='/dashboard'><button>Dashboard</button></Link>}
      </div>
    </div>
  );
}

export default Navbar;
