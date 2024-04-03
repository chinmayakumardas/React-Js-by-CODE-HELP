import React from 'react';
import Card from './Card';

const Cards = ({ NetaList }) => {
   
  return (
    <div className="cards flex gap-5 px-2 rounded-md border-red-500">
      {NetaList.map((card, index) => (
        <Card key={index}  name={card.name} id={card.id} url={card.url} />
      ))}
    </div>
  );
};

export default Cards;
