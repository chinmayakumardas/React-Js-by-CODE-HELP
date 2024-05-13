import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify'; 

const CartItem = ({ item, itemIndex }) => {

const dispatch=useDispatch();
  const removeFromCart=()=>{
      dispatch(remove(item.id));
      toast.success("Item removed");
  }
  return (
    <div className="flex  justify-around gap-4">
      <div className=" flex justify-around">
        <div className="h-[180px]">
          <img src={item.image} className="h-full "></img>
        </div>
        <div className="flex flex-col gap-5  justify-between">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-500 font-normal text-[10px] text-left">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div className="flex items-center gap-4 ">
            <h1 className="text-green-600 font-semibold flex justify-between">${item.price}</h1>

            <div className="px-2 py-2 text-3xl" onClick={removeFromCart} >
              <MdDeleteOutline className="rounded-md bg-red-200 text-red-500 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
