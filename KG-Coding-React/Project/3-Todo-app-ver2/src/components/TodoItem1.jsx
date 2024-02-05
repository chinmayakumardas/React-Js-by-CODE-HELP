import React from "react";

const TodoItem1 = () => {
  let todoName = "Clean Room";
  let todoDate = "14-02-2024";

  return (
    <div>
      <div className="container ">
        {/* dcvdvxhdvxhvcx */}
        {/* ddxxbdjxbbx */}
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
