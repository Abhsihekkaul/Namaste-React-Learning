// well to make our code base better we have to make it 
// modular - deviding into smaller chunks
// readable
// reusable
// that is why we create the uitility folder to keep all our function here. to that
// we will be able to test everything wihtout probelm


export function filterData(searchTxt, originalRestaurantList) {
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