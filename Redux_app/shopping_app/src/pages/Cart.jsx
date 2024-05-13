import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className=" flex justify-around items-center">
      {cart.length > 0 ? (
        <div className="flex justify-between gap-4">
          {/* part1 */}
          <div className="flex flex-col justify-between">
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  itemIndex={index}
                ></CartItem>
              );
            })}
          </div>
          {/* part2  */}
          <div className="flex min-h-[50vh] flex-col justify-around gap-4">
            {/* sub part1  */}
            <div className="flex flex-col gap-2">
              <div className="text-green-600 text-3xl font-bold">Your Cart</div>
              <div className="text-6xl font-bold uppercase text-green-600">Summary</div>
              <p>
                <span className="text-gray-700 font-semibold text-lg text-left ">Total Items : {cart.length}</span>
              </p>
            </div>
            {/* sub part 2 */}
            <div className="flex flex-col justify-around gap-3">
              <p className="text-gray-700 font-semibold text-lg text-left ">Total Amount : <span className="text-green-600">${`${totalAmount}`}</span></p>
              <button  className="bg-green-600 text-white rounded-md px-2 py-2 text-2xl font-bold">Check Out</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-2xl">Your Cart is is Empty</h1>
          <Link to="/">
            <button className="bg-green-500 rounded-md px-2 py-2 text-2xl text-white font-bold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
