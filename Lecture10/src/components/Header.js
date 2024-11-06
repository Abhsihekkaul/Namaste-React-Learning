import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderStatus from "../Utils/HeaderStatus";

function checkLoggedIn() {
  // Logic to check if the user is logged in can go here
  return false; // Example: return true if logged in, false if not
}

const Header = () => {
  const [isUserLogin, setUserLogin] = useState(checkLoggedIn());

  return (
    <div className="nav-bar">
      <Link to="/">
      <img
        className="logo"
        alt="logo-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-kjb4wMhqsqM5n4Zh2dIHSmUFAU4VrOw3A&s"
      />
      </Link>
      <ul className="nav-items">
      <HeaderStatus />
        <Link to="/">
        <li className="home">Home</li>
        </Link>
        <Link to="/About">
        <li>About</li>
        </Link>
        <Link to="/Contact">
        <li>Contact Us</li>
        </Link>

        <Link to="/Insta">
        <li>Insta</li>
        </Link>

        <li>Cart</li>
        
        {isUserLogin ? (
          <button className="LOG" onClick={() => setUserLogin(false)}>Logout</button>
        ) : (
          <button className="LOG" onClick={() => setUserLogin(true)}>Login</button>
        )}
      </ul>

      

      
    </div>
  );
};

export default Header;
