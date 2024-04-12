import React from 'react';
import Card from './Card';

const Cards = ({ neta,deleteHandler}) => {
   
  return (
    <div className="cards flex gap-5 px-2 rounded-md border-red-500">
      {neta.map((card) => (
        <Card  deleteHandler={deleteHandler}  name={card.name} id={card.id} url={card.url} />
      ))}
    </div>
  );
};

export default Cards;
