import { useState, useEffect } from "react"; // importing the useState hook
import RestaurantCard from "./cards";
import Shimmer from "./shimmer";

// what are hooks - normal function created by facebook developers

// why we need state variable in the first place - 
// We need state variables because:
// 1. They trigger re-renders when data changes, ensuring the UI stays in sync with the current data.
// 2. They store dynamic data that can change over time, like user input or fetched API data.
// 3. They enable React’s one-way data binding, making the flow of data predictable and controlled.
// 4. Local variables don’t persist or cause re-renders, making state essential for maintaining dynamic behavior in components.
// In short, state is how React manages and controls the dynamic nature of your app’s UI, ensuring the data and UI are always synchronized.

// we will not be able to make changes if we create the normal input field using JSX
// the reason behind it not working is because React uses one-way data binding 
// In order to make changes, we need a React type of variable called STATE Variables
// every component in React maintains some sort of state
// thereafter, all the local variables go onto that state
// In this particular example, we are going to use one of these states, which is called the useState hook

// furthermore, we also have a hook called useEffect, which takes two things: first is 
// the callback function and second is the dependency array by which the useEffect callback function 
// should be called. 


// Next is creating a shimmer UI using the conditional rendering so that our website will look smoother while working 

// in the curly braces one can only write the js expression not the statement 


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

  return (Restaurantss.length === 0 ) ? <Shimmer /> :(
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
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
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
