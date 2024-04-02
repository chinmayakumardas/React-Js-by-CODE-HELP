import React, { useState } from 'react';

const Extra = () => {
    let [name,setName]=useState(['chinmay','ajay','sanu','dipa','sam',"tanmay"]);

    function deleteHandler() {
        const updatedNames = [...name];
        updatedNames.pop();
        setName(updatedNames);
       
    }

    return (
        <div className='flex flex-col gap-4'>
            {name.map((val) => (
                <div  className='flex flex-row gap-10 mx-20'>
                    <div className='bg-red-500'>{val}</div>
                    <button onClick={deleteHandler} className='bg-green-400 rounded px-4'>delete</button>
                </div>
            ))}
        </div>
    );
}

export default Extra;
