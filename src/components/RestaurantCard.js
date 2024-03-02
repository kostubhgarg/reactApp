import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const limitedCuisines = cuisines.slice(0, 5);
  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[250px] h-[450px] rounded-xl bg-gray-100 hover:bg-gray-300"
    >
      <img
        className="res-logo rounded-lg object-cover h-[50%] w-[100%]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{limitedCuisines.join(", ")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
