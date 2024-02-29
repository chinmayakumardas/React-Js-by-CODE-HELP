import React from 'react'

const Input = (props) => {
  return (
  <input type="text" className='mt-4' placeholder='Enter the text' onChange={props.handaler} />
        
  
  );
}

export default Input