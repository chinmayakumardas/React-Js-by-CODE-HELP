import React from 'react';
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0'>
      <div className='w-11/12 max-w-[450px] '>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span>
          <br></br>
          <span className=' text-blue-100 italic'>{desc2}</span>
        </p>
        {formtype === "signup" ? 
          <SignupForm setIsLoggedIn={setIsLoggedIn} /> : 
          <LoginForm setIsLoggedIn={setIsLoggedIn} /> // Corrected prop name
        }
        <div className='flex w-full items-center gap-x-2'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium to-richblack-100 border border-r-black-700 px-[12px] py-[8px] gap-x-2 mt-6'>
        <FcGoogle/>
        <p className=''>Sign Up with Go ogle</p>
         </button>
      </div>
      <div className='relative w-11/12 max-w-[450px] '>
        <img className='absolute -top-4 right-4' src={frameImage} alt='pattern' loading='lazy' width={558} height={504}/>
        <img src={image} alt='students' loading='lazy' width={558} height={490}/>
      </div>
    </div>
  );
}

export default Template;
