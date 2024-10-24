import { useState, useEffect } from "react"; 
import RestaurantCard from "./cards";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

// Filtering function to filter restaurants based on search text
function filterData(searchTxt, originalRestaurantList) {
  if (searchTxt === "") {
    // Return the full list of restaurants if the search text is empty
    return originalRestaurantList;
  } else {
    // Filter the restaurant list based on the search text
    return originalRestaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }
}

const Body = () => {
  // Local state variable to handle the search text
  const [searchTxt, setSearchInput] = useState("");

  // Local state to handle the list of restaurants, initially set to an empty array
  const [Restaurantss, setRestaurantss] = useState([]); // Filtered list
  const [allRestaurants, setAllRestaurants] = useState([]); // Original full list

  // useEffect hook for API call
  useEffect(() => {
    ApiCallSwiggy();
  }, []);

  async function ApiCallSwiggy() {
    // Fetching restaurant data from Swiggy API
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional chaining to handle cases where data might not be available
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantss(restaurantData || []); // Set filtered data
    setAllRestaurants(restaurantData || []); // Store original full data
  }

  return (Restaurantss.length === 0 ) ? (
    <Shimmer /> // Show shimmer when data is loading
  ) : (
    <div className="container">
      <div className="search-container">
        {/* Controlled input field for search. Its value is tied to the state (searchTxt) */}
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            // Updating the searchTxt state whenever the input value changes
            setSearchInput(e.target.value);
          }}
        />
        {/* Search button that triggers the filtering function */}
        <button
          className="search-btn"
          onClick={() => {
            // Calling the filter function to filter restaurants based on searchTxt
            const data = filterData(searchTxt, allRestaurants); // Use allRestaurants for filtering
            // Updating the Restaurantss state with the filtered data
            setRestaurantss(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {/* Rendering the filtered list of restaurants from Restaurantss state */}
        {Array.isArray(Restaurantss) && Restaurantss.length > 0 ? (
          Restaurantss.map((restaurant) => (
            <Link 
              to={`/restaurant/${restaurant.info.id}`}  // Corrected URL path
              key={restaurant.info.id} 
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        ) : (
          // If no restaurants match the search, display a message
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
