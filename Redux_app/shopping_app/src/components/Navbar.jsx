import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="bg-[#0F172A] py-2">
      <nav className="flex text-white text-2xl flex-row justify-around items-center">
        <NavLink to="/">
          <div>
            <img
              className="h-auto w-[150px]"
              src="https://github.com/priyansh70/Dot-Batch_WebDevelopment-Notes/blob/main/React/03%20-%20React%20Advanced/shopapp%20redux/public/logo.png?raw=true"
            ></img>
          </div>
        </NavLink>
        <div className="flex gap-6 text-slate-100 mr-5 space-x-6 justify-between items-center">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && <span className="absolute -right-3 -top-1  bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
