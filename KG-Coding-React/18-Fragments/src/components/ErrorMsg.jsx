import React from 'react'

const ErrorMsg = ({item}) => {
  
  return (
    <>
      {item.length===0 && <h3>I m Still Hungry.</h3>}
    </>
  )
}

export default ErrorMsg