import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constant";
import Shimmer from "./shimmer";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const restaurant = useRestaurant(params.id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Restaurant ID: {params?.id}
      </h1>
      <h2 className="text-3xl font-bold text-blue-600 mt-2 mb-4">
        {restaurant?.name}
      </h2>
      <img
        src={IMG_CDN_LINK + restaurant.cloudinaryImageId}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />
      <div className="text-lg text-gray-700">
        <p className="mb-2">
          <span className="font-medium">City:</span> {restaurant?.city}
        </p>
        <p className="mb-2">
          <span className="font-medium">Cost for Two:</span> ₹{restaurant?.costForTwo / 100}
        </p>
        <p>
          <span className="font-medium">Average Rating:</span> {restaurant?.avgRating} ⭐
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
