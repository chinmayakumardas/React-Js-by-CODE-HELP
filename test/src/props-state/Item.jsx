import React from 'react'

const  Item= ({productData}) => {
  return (
    <div>
        <div className='bg-green-400 flex gap-2'>
            <p>{productData[0].name}</p>
            <p>{productData[0].price}</p>
            <p>{productData[0].desc}</p>
        </div>
        <div className='bg-green-400 flex gap-2'>
            <p>{productData[1].name}</p>
            <p>{productData[1].price}</p>
            <p>{productData[1].desc}</p>
        </div>
        <div className='bg-green-400 flex gap-2'>
            <p>{productData[2].name}</p>
            <p>{productData[2].price}</p>
            <p>{productData[2].desc}</p>
        </div>
        <div className='bg-green-400 flex gap-2'>
            <p>{productData[3].name}</p>
            <p>{productData[3].price}</p>
            <p>{productData[3].desc}</p>
        </div>
        <div className='bg-green-400 flex gap-2'>
            <p>{productData[4].name}</p>
            <p>{productData[4].price}</p>
            <p>{productData[4].desc}</p>
        </div>
    </div>
  )
}

export default Item