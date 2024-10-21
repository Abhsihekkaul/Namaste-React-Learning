import { IMG_CDN_LINK } from "../constant";
import './shimmer.css'; // Import a CSS file for better organization

const Shimmer = () => {
  const shimmerItems = Array(20).fill(""); // Array to create multiple shimmer blocks
  console.log(shimmerItems)

  return (
    <>
    <div style={{margin:"10px"}} className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-input"
        />
        <button className="search-btn" >
          Search
        </button>
      </div>

    <div className="shimmerUI">
      {shimmerItems.map((index) => (
        <div key={index} className="shimmer-item"></div>
      ))}
    </div>

    </>
  );
};

export default Shimmer;
