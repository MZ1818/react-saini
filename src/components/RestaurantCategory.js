import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="shadow-md w-6/12 m-auto bg-slate-100  font-bold p-4 my-4 rounded-md hover:cursor-pointer">
      <div className="flex justify-between" onClick={handleClick}>
        {" "}
        {/* Accordion header */}
        <span className="font-bold pb-2">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      {/* Accordion body */}
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
