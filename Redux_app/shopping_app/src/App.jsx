
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
