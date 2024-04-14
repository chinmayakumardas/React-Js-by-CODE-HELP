import {toast} from 'react-hot-toast'
import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setIsLoggedIn }) { // Corrected prop name
  const [formData,setFormData]=useState({
    email:"",password:"",
  });
  const navigate=useNavigate();
  const [showPassword,setShowPassword]=useState(false);

  function changeHandler(event){
    setFormData((prevData)=>({
      ...prevData,
      [event.target.name]:event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In"); // Corrected toast usage
    navigate('/dashboard');
  }
  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>Email Address <sup>*</sup></p>
        <input type="email" required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Id"
          name="email"
        />
      </label>
      
      <label>
        <p>Password <sup>*</sup></p>
        <input type={showPassword?("text"):("password")} required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        />
        <span onClick={()=>setShowPassword((prev)=>!prev)}>
          {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
        <p><Link to='#'>Forgot Password</Link></p>
      </label>
      <button>SignIn</button>
    </form>
  );
}

export default LoginForm;
