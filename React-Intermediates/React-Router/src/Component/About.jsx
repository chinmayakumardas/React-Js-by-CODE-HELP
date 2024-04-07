import React from 'react'
import {useNavigate}  from 'react-router-dom'
const About = () => {
  const navigate=useNavigate();
  function clickHandler(){
    navigate("/");
  }
  
  function backHandler(){
    navigate(-1)
  }
  return (
    <div>

      We are the tech enthuists.
      <br></br>
      <button onClick={clickHandler} className='bg-red-400 px-4 rounded-sm'>Move to Home Page</button>
      <br></br>
      <br></br>
    <button onClick={backHandler} className='bg-green-500 px-4 rounded-sm'> Go Back</button>
    </div>
  )
}

export default About