// created the first custom hook


import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        ApiMenu();
    }, [resId]); // Add resId as a dependency in case it changes

    async function ApiMenu() {
        try {
            const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7261768&lng=76.7655411&restaurantId=${resId}&submitAction=ENTER`);
            
            const json = await data.json();
            console.log(json.data);
            
            setRestaurant(json?.data?.cards[2]?.card?.card?.info);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    return restaurant;
};

export default useRestaurant;
