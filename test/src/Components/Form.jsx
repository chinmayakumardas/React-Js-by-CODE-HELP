import React, { useState } from 'react'

const Form = () => {
  let [data,setdata]=useState({
    name:'',
    email:'',
    gender:'',
    password:'',

  })
  function inputHandler(e){
    let formdata=e.target.value;
    setdata(formdata)
    console.log(formdata)
  }
  function submitHandler(e){
    
    console.log(data)
  }
  return (
    <div className='bg-green-500 h-screen flex flex-col gap-1 px-2'>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' onChange={inputHandler} value={data.name} placeholder='Enter name'></input>
      
      <label htmlFor='email'>Email</label>
      <input type='text' id='email' name='email' onChange={inputHandler}  value={data.email} placeholder='Enter email'></input>

      <label htmlFor='gender'>Gender</label>
      <div className='flex gap-1 justify-center'>
      <input type='radio' id='male' name='gender' onChange={inputHandler}  value={data.gender}  placeholder='Enter email'></input>
      <label htmlFor='gender'>male</label>
      
      <input type='radio' id='female' name='gender' onChange={inputHandler}  value={data.gender} placeholder='Enter email'></input>
      <label htmlFor='gender'>female</label>
      </div>

      <label htmlFor='password'>Password</label>
      <input type='password' name='password' onChange={inputHandler} id='password' value={data.password}></input>


      <button className='bg-red-500 ' onSubmit={submitHandler}>Submit</button>
    </div>
  )
}

export default Form