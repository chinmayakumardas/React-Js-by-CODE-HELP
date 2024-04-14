import React from 'react';
import Template from "../components/Auth/Template";
import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login" // Corrected prop name
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
