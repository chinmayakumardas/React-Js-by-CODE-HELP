import {toast} from 'react-hot-toast'
import { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {  useNavigate } from "react-router-dom";
function SignupForm({setIsLoggedIn}) {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // Code for submitting form
    if(formdata.password!==formdata.confirmPassword){
      toast.error("Password do not matched")
      return;
    }
    setIsLoggedIn(true);
    
    toast.success("Account Created"); // Corrected toast usage
    const accountData={
      ...formdata,
    }
    console.log("print data is"+accountData.email)
    navigate('/dashboard');
  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first last name div */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstname"
              value={formdata.firstname}
              onChange={changeHandler}
            ></input>
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              name="lastname"
              placeholder="Enter last name "
              value={formdata.lastname}
              onChange={changeHandler}
            ></input>
          </label>
        </div>
        {/*email and password  */}
        <label>
          <p>
            Email <sup>*</sup>
          </p>
          <input
            type="email"
            placeholder="Enter email"
            required
            name="email"
            value={formdata.email}
            onChange={changeHandler}
          ></input>
        </label>
        {/*  create and confirm password */}
        <div>
          <label>
            <p>
              Create password <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formdata.password}
              onChange={changeHandler}
            ></input>
            <span onClick={() => setShowPassword((prev) => !prev)}>
                 {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm password <sup>*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="confirm password"
              value={formdata.confirmPassword}
              onChange={changeHandler}
            ></input>
            <span onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
