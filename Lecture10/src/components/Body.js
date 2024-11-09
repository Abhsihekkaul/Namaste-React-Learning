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
  const checkInternetStatus = useIsOffline();

  if (loading) return <Shimmer />;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if(checkInternetStatus) return <h1 className="text-center text-xl text-gray-600">You are offline</h1>;

  return (
    <div className="container mx-auto p-4">
      <div className="search-container flex justify-center gap-4 mb-6">
        <input
          type="text"
          className="search-input border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setRestaurantss(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* checking whether restaurant is array nd has length greater than 0 if true then do sth else sth */}
        {Array.isArray(Restaurantss) && Restaurantss.length > 0 ? ( 
          Restaurantss.map((restaurant) => (
            <Link 
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="block hover:shadow-lg transition-shadow duration-200"
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
