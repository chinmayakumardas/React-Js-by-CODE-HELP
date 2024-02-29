import React from "react";


const Cards = ({cardsData}) => {
 
  return (
    <div>
      {
        cardsData.map((data)=>(
           <div className="flex flex-col justify-center align-middle ">
           <p className="">Name is:{data.name}</p><br/>
           <img src={data.url} className="h-[120px] w-[200px]"/>
           <p>{data.Msg}</p>
           </div>

        ))
      }
    </div>
  );
};

export default Cards;
