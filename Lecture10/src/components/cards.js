import { RealTimeData, IMG_CDN_LINK } from "../constant";

const RestaurantCard = ({ restaurant }) => {
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
      </div>
    </div>
  );
};

export default RestaurantCard;
