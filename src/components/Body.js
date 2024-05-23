import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
// import resList from "../utils/mockData"; (we dont need it now)
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //state variable(super powerfull variable) is created using 'useState' Hook
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //created this state variable bcz if we will filter our search result, then for next tym of searching we will not
  //get entire list of restaurants. Thats why used this "setFilteredRest" in search onClick(). So that entire
  //list of restaurants will still be their inside "setListOfRestaurants"

  const { loggedInUser, setUserName } = useContext(UserContext);

  //using HOC here
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  // console.log("res list", listOfRestaurants);

  //custom hook
  const onlineStatus = useOnlineStatus();

  //making an API call after rendering the componemt Body
  useEffect(() => {
    fetchData();
  }, []);

  //making API call to get data from backend , so that we dont need hard coded mock data
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  // if (listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }

  if (onlineStatus === false) {
    return <h1>Oh No! Seems like u are offline!</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-2 m-2">
      <div className="flex p-3 m-3 ">
        <div className="search">
          <input
            data-testid="resNameToSearch"
            type="text"
            className="border border-solid border-black p-0.5"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-200 px-2 py-2 rounded-lg hover:bg-green-300"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="p-2 bg-gray-200 rounded-lg ml-10 hover:bg-gray-300"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              )
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label className="p-4 m-2">userName:</label>

          <input
            className="border border-black p-2 rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {/* {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}

        {/* Here we have linked every card to its dynamic restaurant , so that on clicking it will open */}
        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* if isRestaurantOpen=true;;; put label on it...... else not */}
            {restaurant.info.isOpen ? (
              <RestaurantCardOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
