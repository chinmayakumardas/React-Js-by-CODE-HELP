import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" elemenet={<Home />} />
        <Route path="" elemenet={<About />} />
      </Routes>
    </div>
  );
}

export default App;
