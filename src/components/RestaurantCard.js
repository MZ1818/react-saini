import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, deliveryTime, costForTwo } = resData?.info;

  return (
    <div
      className="w-[250px] p-3 m-3 rounded-md bg-gray-100 hover:bg-gray-200"
      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="res-logo h-[170px] w-full rounded-md"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold mt-2 mb-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
