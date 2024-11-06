import { RealTimeData , IMG_CDN_LINK} from "../constant";

const RestaurantCard = ({ restaurant }) => {
    return (
      <div className="card">
        <img
          src={IMG_CDN_LINK + restaurant.info.cloudinaryImageId}
          alt={restaurant.info.name}
          className="card-image"
        />
        <h2 className="card-title">{restaurant.info.name}</h2>
        <h3 className="card-cuisines">{restaurant.info.cuisines.join(", ")}</h3>
        <h4 className="card-rating">{restaurant.info.avgRating} ⭐</h4>
      </div>
    );
  };

export default RestaurantCard;