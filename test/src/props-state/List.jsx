import React from 'react'

import Items from './Items'

const list = () => {
    let productData=[
        {
            name:"Allu",
            price:200,
            desc:"Allu is good",
        },
        {
            name:"potala",
            price:70,
            desc:"potala is good",
        },
        {
            name:"saga",
            price:40,
            desc:"saga is good",
        },
        {
            name:"lanka",
            price:12,
            desc:"lanka is good",
        },
        {
            name:"piasa",
            price:35,
            desc:"piasa is good",
        }
    ]
  return (
    <div>
        <Items productData={productData}></Items>
    </div>
  )
}

export default list