import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //coming from customHook
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  //coming from customHook
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();
  //   console.log(json.data);
  //   setResInfo(json.data);
  // };
  //
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-xl my-4 py-2">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h4 className="font-bold text-lg pb-2">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines} --{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h4>
      {/* <h2>Menu</h2> */}
      {/* <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} | Rs.
              {item?.card?.info?.defaultPrice / 100}
            </li>
          )
        )} */}
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
      {/* </ul> */}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
