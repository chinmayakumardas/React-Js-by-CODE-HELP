import "./App.css";
import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />

      <div className="items-container">
        <TodoItem1 />

        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
