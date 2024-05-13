import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])


  return (
    <div>
      {cart.length > 0 ? (
        <div>
        {/* part1 */}
          <div>
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
          <div>
            {/* sub part1  */}
           <div>
           <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items : {cart.length}</span>
            </p>
           </div>
            {/* sub part 2 */}
            <div>
                <p>Total Amount : {`${totalAmount}`}</p>
                <button>Check Out</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl">Your Cart is is Empty</h1>
          <Link to="/">
            <button className="bg-green-500 rounded-md px-2 py-2 text-2xl font-bold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
