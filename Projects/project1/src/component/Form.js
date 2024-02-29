import React from 'react'

const form = (props) => {
  return (
    <div>
        <input type='text' placeholder='text' onChange={props.handaler}></input>
    </div>
  )
}

export default form