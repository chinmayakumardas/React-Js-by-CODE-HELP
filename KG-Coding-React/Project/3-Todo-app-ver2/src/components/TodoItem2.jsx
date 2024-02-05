import React from 'react'

const TodoItem2 = () => {

  let todoName="Buy a Mahindra Thar";
let todoDate="24-12-2027";
  return (
    <div>
        <div className="container ">
    {/* dcvdvxhdvxhvcx */}
      {/* ddxxbdjxbbx */}
        <div className="row kg-row">
        <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
               <button type="button" className="btn btn-danger kg-btn">Delete</button>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem2