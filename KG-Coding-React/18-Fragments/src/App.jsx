import React from "react";
import './App.css'
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMsg from './components/ErrorMsg';
function App() {
  let foodItems=[
    'Dal','Roti','Bhendi','Salad','Makhaan','kaju'
  ];

 
  return (
    <React.Fragment>
    {/* //with out map */}
    <h1 className="food-heading">Healthy Food</h1>
     
   
      
      <ErrorMsg item={foodItems}/>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
