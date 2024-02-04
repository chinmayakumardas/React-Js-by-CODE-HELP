import React from 'react'
import { filterData } from './../data';

const Filter = ({filterData}) => {
  return (
    <div>
        {
            filterData.map((data)=>{
                return (
                    <button key={data.id}>{data.title}</button>);
        })
        }
    </div>
  )
}

export default Filter