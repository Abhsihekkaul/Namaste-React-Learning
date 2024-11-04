import { useState, useEffect } from "react"; 
import RestaurantCard from "./cards";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useIsOffline from "../Utils/useIsOffline";

const Body = () => {

  const [searchTxt, setSearchInput] = useState("");
  const [Restaurantss, setRestaurantss] = useState([]); 
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    ApiCallSwiggy();
  }, []);

  async function ApiCallSwiggy() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error("Network response was not ok"); // Throw error if response is not successful
      }
      const json = await data.json();
      console.log(json);
      
      // Optional chaining to handle cases where data might not be available
      const restaurantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantss(restaurantData || []); // Set filtered data
      setAllRestaurants(restaurantData || []); // Store original full data
    } catch (err) {
      // Handle errors and update the error state
      console.error("Fetch error:", err);
      setError("Failed to fetch restaurant data. Please try again later.");
    } finally {
      // Ensure loading state is false after fetch completes
      setLoading(false);
    }
  }
  const checkInternetStatus = useIsOffline();

  // Display shimmer component while loading or error message if there's an error
  if (loading) return <Shimmer />;
  if (error) return <p>{error}</p>;
  if(checkInternetStatus) return <h1>You are offline</h1>

  return (
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
