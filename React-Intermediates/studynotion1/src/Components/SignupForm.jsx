import { toast } from "react-hot-toast";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function SignupForm({ setIsLoggedIn }) {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  function changeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // Code for submitting form
    if (formdata.password !== formdata.confirmPassword) {
      toast.error("Password do not matched");
      return;
    }
    setIsLoggedIn(true);

    toast.success("Account Created"); // Corrected toast usage
    const accountData = {
      ...formdata,
    };
    console.log("print data is" + accountData.email);
    navigate("/dashboard");
  }
  return (
    <div>
      <div className="flex gap-x-1 p-1  bg-richblack-800 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900   text-richblack-5"
              : "bg-transparent text-richblack-200} py-2 px-5  rounded-full transition-all duration-200"
          }`}
          onClick={() => {
            setAccountType("student");
          }}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"
          }`}
          onClick={() => {
            setAccountType("instructor");
          }}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first last name div */}
        <div className="flex justify-between mt-[10px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]"
              type="text"
              placeholder="Enter first name"
              name="firstname"
              value={formdata.firstname}
              onChange={changeHandler}
            ></input>
          </label>
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]"
              type="text"
              name="lastname"
              placeholder="Enter last name "
              value={formdata.lastname}
              onChange={changeHandler}
            ></input>
          </label>
        </div>
        {/*email and password  */}
        <div className=" mt-[10px]">
          <label className="w-full mt-[10px]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]"
              type="email"
              placeholder="Enter email"
              required
              name="email"
              value={formdata.email}
              onChange={changeHandler}
            ></input>
          </label>
        </div>
        {/*  create and confirm password */}
        <div className="flex justify-between mt-[10px]">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formdata.password}
              onChange={changeHandler}
            ></input>
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm password <sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px]"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="confirm password"
              value={formdata.confirmPassword}
              onChange={changeHandler}
            ></input>
            <span
              className="absolute right-3 top-[40px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 p-x-[12px] p-y-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
