import logo from './logo.svg';
import './App.css';
import Cards from './component_1/Cards';

function App() {
  let cardsData = 
  [
    { name:"Subhash Chandra Bosh",
     url:"https://img.freepik.com/premium-vector/vector-illustration-poster-netaji-subhash-chandra-bose-indian-tricolor-flag-background-with-hi_830469-2142.jpg?w=900",
    Msg:"Welcome to my facebookpage",},
    { name:"Narendra Modi",
    url:"https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg",
   Msg:"Welcome to my Instagram",}
  ];

  return (
    <div className="App">
      <Cards cardsData={cardsData}></Cards>
    </div>
  );
}

export default App;
