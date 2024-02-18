
import "./App.css";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItems = ["Dal", "Roti", "Bhendi", "Salad", "Makhaan", "kaju"];

const handleOnChange=(e)=>{
  console.log(e.target.value)
}

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
     <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <ErrorMsg item={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
