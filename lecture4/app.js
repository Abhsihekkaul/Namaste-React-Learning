import React from "react";
import ReactDOM from "react-dom/client";
import { head } from "lodash"; // Ensure lodash is installed if you're using this import

/**
 * App Structure:
 * - Header
 *   - Logo
 *   - Navigation Items
 *   - Cart
 * - Body
 *   - Restaurant List
 *     - Restaurant Card
 *       - Image
 *       - Name
 *       - Cuisines
 *       - Rating
 * - Footer
 *   - Links
 *   - Copyrights
 */

// Inline styling example
const inlineStyling = {
  color: "green",
};

const Header = () => {
  return (
    <div className="nav-bar" style={styles.navBar}>
      <img
        className="logo"
        alt="logo-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-kjb4wMhqsqM5n4Zh2dIHSmUFAU4VrOw3A&s"
        style={styles.logo}
      />

      <ul className="nav-items" style={styles.navItems}>
        <li style={inlineStyling}>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};


// Sample Real-Time Data for Restaurants
const RealTimeData = {
  restaurants: [
    {
      info: {
        id: "888462",
        name: "Lahori Dhaba",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/17/d690e8bf-52f3-4838-992f-0120d950e4ae_888462.jpg",
        locality: "West Chd",
        areaName: "Sector - 44 Chandigarh",
        costForTwo: "₹300 for two",
        cuisines: [
          "Biryani",
          "Desserts",
          "Punjabi",
          "Thalis",
          "Indian",
          "Asian",
          "Awadhi",
          "Tandoor",
          "Snacks",
        ],
        avgRating: 4.6,
        avgRatingString: "4.6",
        totalRatingsString: "513",
        isOpen: true,
        sla: {
          deliveryTime: 20,
          lastMileTravel: 2.1,
          slaString: "15-20 mins",
          lastMileTravelString: "2.1 km",
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
      },
      cta: {
        link: "swiggy://menu?restaurant_id=888462",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "366309",
        name: "Dana Paani Dhaba",
        cloudinaryImageId: "iaueinqlzh7gwnvlsa89",
        locality: "North Mohali",
        areaName: "Sector 60",
        costForTwo: "₹300 for two",
        cuisines: ["Indian", "Chinese", "Sweets", "Snacks", "Fast Food"],
        avgRating: 4.4,
        avgRatingString: "4.4",
        totalRatingsString: "19K+",
        isOpen: true,
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5.9,
          slaString: "30-35 mins",
          lastMileTravelString: "5.9 km",
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
      },
      cta: {
        link: "swiggy://menu?restaurant_id=366309",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "881131",
        name: "Khao Aur Khane Do",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b5a2c637-bca5-48db-8cd8-835582190aa4_881131.jpg",
        locality: "Sector 21C",
        areaName: "East Chd",
        costForTwo: "₹200 for two",
        cuisines: ["North Indian", "Street Food", "Beverages", "Indian"],
        avgRating: 4.6,
        avgRatingString: "4.6",
        totalRatingsString: "402",
        isOpen: true,
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.4,
          slaString: "20-25 mins",
          lastMileTravelString: "2.4 km",
        },
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
      },
      cta: {
        link: "swiggy://menu?restaurant_id=881131",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "152381",
        name: "Punjabi Dhaba 35",
        cloudinaryImageId: "vf2drpf6azsgkynrxpcl",
        locality: "Sector 35",
        areaName: "Sector 35",
        costForTwo: "₹200 for two",
        cuisines: ["Punjabi"],
        avgRating: 4.4,
        avgRatingString: "4.4",
        totalRatingsString: "4.9K+",
        isOpen: true,
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.1,
          slaString: "15-20 mins",
          lastMileTravelString: "1.1 km",
        },
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "1.4K+",
          },
          source: "GOOGLE",
        },
      },
      cta: {
        link: "swiggy://menu?restaurant_id=152381",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    
    
  ],
};

// Restaurant Card Component
const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant)
  return (
    <div className="card" style={styles.card}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
        alt={restaurant.info.name}
        style={styles.cardImage}
      />
      <h2 style={styles.cardTitle}>{restaurant.info.name}</h2>
      <h3 style={styles.cardCuisines}>
        {restaurant.info.cuisines.join(", ")}
      </h3>
      <h4 style={styles.cardRating}>
        {restaurant.info.avgRating} ⭐
      </h4>
    </div>
  );
};

// Body Component

// it is essential to have the keys 
// never have your index as the key 
//  no key <<<<< index as key <<<<<<<< unique keys
const Body = () => {
  return (
    <div className="RestaurantList" style={styles.restaurantList}>
      {RealTimeData.restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.info.id}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="footer-links" style={styles.footerLinks}>
        <a href="#about" style={styles.footerLink}>
          About
        </a>
        <a href="#contact" style={styles.footerLink}>
          Contact Us
        </a>
        <a href="#terms" style={styles.footerLink}>
          Terms of Service
        </a>
      </div>
      <p style={styles.footerText}>
        © 2024 Your Company Name. All Rights Reserved.
      </p>
    </footer>
  );
};

// App Layout using React.Fragment
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// Inline Styles (for demonstration purposes)
const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logo: {
    width: "120px",
  },
  navItems: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    fontSize: "28px",
  },
  restaurantList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    gap: "20px",
  },
  card: {
    width: "300px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardTitle: {
    fontSize: "1.5rem",
    margin: "10px 0 5px 0",
  },
  cardCuisines: {
    fontSize: "1rem",
    color: "#555",
    margin: "0 0 10px 0",
  },
  cardRating: {
    fontSize: "1.2rem",
    color: "#ffb400",
    marginBottom: "15px",
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: "20px",
    textAlign: "center",
  },
  footerLinks: {
    marginBottom: "10px",
  },
  footerLink: {
    margin: "0 10px",
    color: "#333",
    textDecoration: "none",
  },
  footerText: {
    color: "#777",
    fontSize: "0.9rem",
  },
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
