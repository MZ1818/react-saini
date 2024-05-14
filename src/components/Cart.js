import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //for reading data
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  //for writing data
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 m-4">
      <h1 className="text-center font-bold text-xl">Cart</h1>

      <div className="w-6/12 m-auto ">
        <button
          onClick={handleClearCart}
          className=" font-bold bg-black text-white rounded-md px-2 py-1 text-sm mt-2 ml-[259px]"
        >
          Clear Cart
        </button>
        <div className="p-4 mt-6 shadow-md rounded-md bg-stone-100">
          {cartItems?.length === 0 ? (
            <h3 className="text-center font-semibold">Your Cart is Empty 🫤🫤</h3>
          ) : (
            //used this component for its re-usability & passed our cartItems as props
            <ItemList items={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
