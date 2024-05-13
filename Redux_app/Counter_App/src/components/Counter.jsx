import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count=useSelector((state)=> state.counter.value);
    const dispatch=useDispatch();
  return (
    <div className='flex  items-center py-20 gap-5 px-5 justify-center'>
        <button onClick={()=>dispatch(decrement())} className='bg-red-500 py-2 px-2 rounded-md '>Decrement</button>
        <br></br>
        <div className='text-4xl'>{count}</div>
        <br></br>
        <button onClick={()=>dispatch(increment())} className='bg-green-500 px-2 py-2 rounded-md'>Increment</button>
    </div>
  )
}

export default Counter