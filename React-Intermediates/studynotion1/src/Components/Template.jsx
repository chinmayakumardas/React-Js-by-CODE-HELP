import React from 'react';
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formtype === "signup" ? 
          <SignupForm /> : 
          <LoginForm setIsLoggedIn={setIsLoggedIn} /> // Corrected prop name
        }
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>Sign Up with Google </button>
      </div>
      <div>
        <img src={frameImage} alt='pattern ' loading='lazy' width={558} height={504}/>
        <img src={image} alt='students ' loading='lazy' width={558} height={490}/>
      </div>
    </div>
  );
}

export default Template;
