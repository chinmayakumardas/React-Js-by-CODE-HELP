import "./App.css";
import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    {
      name: "Go to market for fish",
      dueDate: "2/1/2023",
    },
    {
      name: "Go to  college exam ",
      dueDate: "2/2/2023",
    },
    {
      name: "Go to  Army hospital ",
      dueDate: "3/2/2023",
    },
    {
      name: "Go to  Sham mandir ",
      dueDate: "3/7/2027",
    },
  ];
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
