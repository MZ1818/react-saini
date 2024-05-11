import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((listing) => (
        <div
          key={listing?.card?.info?.id}
          className="text-left pb-4 pt-2 border-b-2 p-3 flex justify-between"
        >
          <div className="w-8/12">
            <div className="font-bold text-xs">
              <span>{listing?.card?.info?.name}</span>
              <span> -₹ {listing?.card?.info?.price / 100}</span>
            </div>
            <p className="font-normal text-xs">
              {listing?.card?.info?.description}
            </p>
          </div>
          <div
            className="w-3/12 rounded-md 
          "
          >
            <img className="p-2" src={CDN_URL + listing?.card?.info?.imageId} />
            <button className="px-3 py-1 text-green-600 text-sm font-bold bg-white rounded-md absolute mt-[-30] ml-[40]">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
