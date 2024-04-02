import React, { useState } from 'react'

const Form = () => {
  let [data,setData]=useState('0');
  let [ondata,setondata]=useState('0');
  function update(event){
    let x=event.target.value++
    setData(x)
  }
  function change(event){
    let datas=event.target.value;
    setondata(datas)

  }
  return (
    <div className='gap-5 flex flex-col pt-4 px-4'>
        <input onInput={change} type='text'  placeholder='Enter the data'/>
        <button  onClick={update} className='bg-green-400 text-3xl'>Enter</button>
        <div>Btn click data: {data}</div>
        <div>Onchanges : {ondata}</div>
    </div>
  )
}

export default Form