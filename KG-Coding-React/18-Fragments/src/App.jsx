import { useState } from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItems = ["Dal", "Roti", "Bhendi", "Salad", "Makhaan", "kaju"];

  let [textToShow,settextToShow]=useState("Food Item Entered by User")



console.log(`current value of textState: ${textToShow}`);




  // let textToShow="Food Item Entered by User";
const handleOnChange=(event)=>{
  console.log(event.target.value);
  settextToShow(event.target.value);
}

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
     <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <ErrorMsg item={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
