import React,{useState} from 'react';
import Card from './Card';

const Cards = () => {
  let [NetaList,setNetaList]=useState(
    [
      { name: 'Modi', id: 100,url:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2023-01/230127-narendra-modi-mb-0952-6da744.jpg' },
      { name: 'Naveen', id: 101,url:'https://t0.gstatic.com/images?q=tbn:ANd9GcQgyTGPOUHYkFEhrfpmgV_6U4Kmar-4acvj8z3zhVR-z7BwkXp9' },
      { name: 'Kejirwal', id: 103 ,url:'https://c.ndtvimg.com/2023-01/f30097jo_arvind-kejriwal_625x300_06_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400'},
    ],
  );
  function deleteHandler(index){
    setNetaList((pre)=>{
        let data=[...pre];
        data.splice(index,1);
        return data;
      })
  }
  return (
    <div className="cards flex gap-5 px-2 rounded-md border-red-500">
      {NetaList.map((card, index) => (
        <Card key={index}  name={card.name} id={card.id} url={card.url} deleteHandler={()=> deleteHandler(index)}/>
      ))}
    </div>
  );
};

export default Cards;
