async function ApiCallSwiggy() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      console.log(json);
      const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantss(restaurantData || []);
      setAllRestaurants(restaurantData || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch restaurant data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }