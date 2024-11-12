import { RealTimeData, IMG_CDN_LINK } from "../constant";
import { useContext } from "react";
import userContext from "../Utils/userContext";

const RestaurantCard = ({ restaurant }) => {
  // Access the user context to get user data
  const { NewUser } = useContext(userContext);

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <img
        src={IMG_CDN_LINK + restaurant.info.cloudinaryImageId}
        alt={restaurant.info.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {restaurant.info.name}
        </h2>
        <h3 className="text-sm text-gray-600 mt-1 truncate">
          {restaurant.info.cuisines.join(", ")}
        </h3>
        <h4 className="text-sm font-medium text-yellow-500 mt-2 flex items-center">
          {restaurant.info.avgRating} ⭐
        </h4>
        {/* Display user name and email from the context */}
        <h4 className="text-sm text-gray-700 mt-2">{NewUser?.name || "Guest"}</h4>
        <h4 className="text-sm text-gray-500">{NewUser?.email || "No email provided"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
