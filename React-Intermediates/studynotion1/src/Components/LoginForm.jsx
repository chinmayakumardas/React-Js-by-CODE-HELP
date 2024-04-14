import { toast } from "react-hot-toast";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setIsLoggedIn }) {
  // Corrected prop name
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In"); // Corrected toast usage
    navigate("/dashboard");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-y-4 mt-6 w-full"
    >
      <label className="w-full ">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]"
          type="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Id"
          name="email"
        />
      </label>

      <label className="relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]"
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        />
        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
        </span>
          <Link to="#">
        <p className="text-xs mt-1 text-blue-100  float-right">Forgot Password
        </p>
        </Link>
      </label>
      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 p-x-[12px] p-y-[8px] mt-6">SignIn</button>
    </form>
  );
}

export default LoginForm;
