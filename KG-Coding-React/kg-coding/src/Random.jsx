import React from "react";

const Random = () => {
  let Num =Math.floor(Math.random()*100);
  
  return <div>Random number is : {Num}</div>;
};

export default Random;
