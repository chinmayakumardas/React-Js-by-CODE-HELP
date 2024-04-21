import React from 'react';

const Card = ({ url, id, name, deleteHandler }) => {
  return (
    <div className='pb-2 flex flex-col justify-center align-middle rounded-lg border-2 border-solid border-red-500'>
      <img src={url} className='h-[200px] w-[200px] rounded-md' alt={name}></img>
      <div className='flex gap-2 px-2'>
        <p>ID: {id}</p>
        <p>{name}</p>
      </div>
      <button onClick={deleteHandler} className='mx-auto rounded-md bg-green-400 w-20'>Delete</button>
    </div>
  )
}

export default Card;
