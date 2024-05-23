import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    //dispatching an action "addItems" that is invoking its reducer that is putting things inside " " in action.payload
    dispatch(addItems(item));
  };

  // console.log(item);

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="itemsList"
          key={item?.card?.info?.id}
          className="text-left pb-4 pt-2 border-b-2 p-3 flex justify-between"
        >
          <div className="w-8/12">
            <div className="font-bold text-xs">
              <span>{item?.card?.info?.name}</span>
              <span> -₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="font-normal text-xs">
              {item?.card?.info?.description}
            </p>
          </div>
          <div
            className="w-3/12 rounded-md 
          "
          >
            <img className="p-2" src={CDN_URL + item?.card?.info?.imageId} />
            <button
              onClick={() => handleAdd(item)}
              className="px-3 py-1 text-green-600 text-sm font-bold bg-white rounded-md absolute mt-[-30] ml-[40]"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
