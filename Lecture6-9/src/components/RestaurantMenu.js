// lets read the id which we have set in the app.js
// routing parameter
// https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=642768
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constant";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const [restaurant, setRestaurant] = useState(null); // Start with `null` instead of an empty array

    useEffect(() => {
        ApiMenu();
    }, []);

    async function ApiMenu() {
        // Using backticks for proper string interpolation
        const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7261768&lng=76.7655411&restaurantId=${params.id}&submitAction=ENTER`);
        
        const json = await data.json();
        console.log(json.data);
        
        // Assuming `cards[2].card.card.info` is correct based on your API structure
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    }

    return (!restaurant) ? <Shimmer /> : (
        <>
            <h1>Restaurant id: {params?.id}</h1>
            <h1>{restaurant?.name}</h1>
            <img src={IMG_CDN_LINK + restaurant.cloudinaryImageId} alt={restaurant.name} />
            <h1>City: {restaurant?.city}</h1>
            <h1>Cost for two: ₹{restaurant?.costForTwo / 100}</h1>
            <h1>Average Rating: {restaurant?.avgRating}</h1>
        </>
    );
}

export default RestaurantMenu;
