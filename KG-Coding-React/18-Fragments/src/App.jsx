import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
function App() {
  let foodItems = ["Dal", "Roti", "Bhendi", "Salad", "Makhaan", "kaju"];

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <input type="text" className=""></input>
      <ErrorMsg item={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
