import React from 'react'
import {useNavigate} from 'react-router-dom'
const Contactus = () => {
  const navigate=useNavigate();
  function clickHandler(){
    navigate("/about");
  }
  function clickHandler2(){
    navigate("/home");
  }
  return (
    <div className='flex flex-col gap-3  justify-center items-center'>contact us page
      <p>
        It seems there are a few issues in your code. Let's correct them:
        Incorrect import statement: There's an extra space at the end of the
        import statement for 'react-router-dom'. Remove that extra space.
        Incorrect import placement: The imports for Routes and Route should be
        placed at the top of the file, not after the component definition.
      </p>

    <button onClick={clickHandler} className='bg-red-700 px-2 py-2 rounded-sm border-[4px] border-blue-400'>🔙 Back to About us Page </button>
    <button onClick={clickHandler2} className='bg-red-700 px-2 py-2 rounded-sm border-[4px] border-blue-400'>🔙 Back to Home Page </button>
    
    </div>
  )
}

export default Contactus