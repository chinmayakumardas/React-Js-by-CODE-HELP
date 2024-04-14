import React from 'react';
import Template from "../Components/Template"; // Corrected import path
import signupImg from "../assets/signup.png";

const Signup = ({ setIsLoggedIn }) => {
  return (
     <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup" // Corrected prop name
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
