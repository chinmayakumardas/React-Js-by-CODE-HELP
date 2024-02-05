import React from 'react'

const ClockTime = () => {
    let time=new Date();
  return (
    <div className='text-bg-primary p-2 '>
        <p>This is the current Date & Time: {time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
        </p>
    </div>
  )
}

export default ClockTime