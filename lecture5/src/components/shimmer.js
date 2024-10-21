import './shimmer.css';
const Shimmer = () => {
  const shimmerItems = Array(20).fill(""); // Array to create multiple shimmer blocks
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
