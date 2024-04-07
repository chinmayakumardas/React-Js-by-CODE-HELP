import React from 'react'
import {useNavigate}  from 'react-router-dom'
const Contact = () => {
  const navigate=useNavigate();
  function clickHandler(){
    navigate("/about");
  }
  return (
    <div>
      
      Mob: 6370073215
      <br></br>
      <button onClick={clickHandler} className='bg-red-400 px-4 rounded-sm'>Move to About Page</button>
    </div>
  )
}

export default Contact