import React from 'react';
import Cards from './Card_Component/Cards';


const NetaList = [
  { name: 'Modi', id: 1,url:'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2023-01/230127-narendra-modi-mb-0952-6da744.jpg' },
  { name: 'Naveen', id: 2,url:'https://t0.gstatic.com/images?q=tbn:ANd9GcQgyTGPOUHYkFEhrfpmgV_6U4Kmar-4acvj8z3zhVR-z7BwkXp9' },
  { name: 'Kejirwal', id: 3 ,url:'https://c.ndtvimg.com/2023-01/f30097jo_arvind-kejriwal_625x300_06_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400'},
];

const App = () => {
  return (
    <div className="app">
      <h1>Politician List</h1>
      <Cards NetaList={NetaList}  />
      
    </div>
  );
};

export default App;
