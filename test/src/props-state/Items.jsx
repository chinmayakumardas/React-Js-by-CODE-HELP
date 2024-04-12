import React from 'react'
import Item from './Item'
const Items = ({productData}) => {
  return (
    <div>
        <Item productData={productData}></Item>
       
    </div>
  )
}

export default Items