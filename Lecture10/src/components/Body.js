import { useState, useEffect, useContext } from "react"; 
import RestaurantCard from "./cards";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useIsOffline from "../Utils/useIsOffline";
import userContext from "../Utils/userContext";

const Body = () => {
  // Accessing the user context to get user data
  const { NewUser, setNewUser } = useContext(userContext);
  
  // State for handling search input, restaurant data, loading state, and errors
  const [searchTxt, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]); 
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching restaurant data when the component mounts
  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
      
      if (!data.ok) throw new Error("Network response was not ok");
      
      const json = await data.json();
      const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      setRestaurants(restaurantData || []);
      setAllRestaurants(restaurantData || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch restaurant data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const checkInternetStatus = useIsOffline();

  if (loading) return <Shimmer />;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (checkInternetStatus) return <h1 className="text-center text-xl text-gray-600">You are offline</h1>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-2/3 md:w-1/2 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          placeholder="Search for restaurants"
          value={searchTxt}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>

        {/* Display user name, and allow it to be updated */}
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-2/3 md:w-1/2 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          placeholder="Enter your name"
          value={NewUser?.name || ""}
          onChange={(e) => 
            setNewUser({
              ...NewUser,
              name : e.target.value
          })
          }
        />

          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-2/3 md:w-1/2 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            placeholder="Enter your name"
            value={NewUser?.email || ""}
            onChange={(e) => 
              setNewUser({
                ...NewUser,
                email: e.target.value  // Update the name field in NewUser
              })
            }
          />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(restaurants) && restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Link 
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
