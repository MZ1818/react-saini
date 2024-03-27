import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  //

  return (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h4>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines} --{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h4>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} | Rs.
              {item?.card?.info?.defaultPrice / 100}
            </li>
          )
        )}
        {/* <li>
          {
            resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
              ?.card?.card?.itemCards[0]?.card?.info?.name
          }
          ||
          {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
            ?.card?.itemCards[0]?.card?.info?.price / 100}
          Rs
        </li>
        <li>Burger</li>
        <li>Diet CAKE</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
