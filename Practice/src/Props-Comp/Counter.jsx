import React from "react";

// const Counter = (props) => {
//   return (
//     <div className='bg-green-600 text-4xl'>
// {props.data[0].name+","+props.data[0].age}
// </div>
//   )
// }
const Counter = ({ data, newdata }) => {
  return (
    <div className="flex gap-2 bg-green-400">
   
      <div className="bg-green-600 text-4xl">
        {data[0].name + "," + data[0].age}
      </div>
      <div>
        {newdata[0].country+","+newdata[0].pincode}
      </div>
    </div>
  );
};

export default Counter;
