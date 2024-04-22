import React, { useState } from 'react'

const Timer = () => {
    let [hours,setHours]=useState('00');
    let [min,setMin]=useState('00');
    let [sec,setSec]=useState('00');
    function timer(){
            let date=new Date()
            setHours(date.getHours())
            setMin(date.getHours())
            setSec(date.getSeconds());
           
    }
    setInterval(timer,1000)
  return (
   <div className='flex gap-2 flex-col'>
     <div className='flex justify-center gap-2  text-5xl items-center font-bold text-black h-[80px] w-[300px] bg-green-200'>
        <span className='text-red-600  '>{hours}</span>
        :<span className='text-red-00 '>{min}</span>
        :<span className='text-red-00  '>{sec}</span>
    </div>
     <div className='flex justify-center gap-2  text-5xl items-center font-bold text-black h-[80px] w-[300px] bg-green-200'>
        <span className='text-red-600  '>{hours}</span>
        :<span className='text-red-00 '>{min}</span>
        :<span className='text-red-00  '>{sec}</span>
    </div>
   </div>
  )
}


export default Timer