import { useState } from "react";

function checkLoggedIn() {
  // Logic to check if the user is logged in can go here
  return false; // Example: return true if logged in, false if not
}

const Header = () => {
  const [isUserLogin, setUserLogin] = useState(checkLoggedIn());

  return (
    <div className="nav-bar">
      <img
        className="logo"
        alt="logo-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-kjb4wMhqsqM5n4Zh2dIHSmUFAU4VrOw3A&s"
      />
      <ul className="nav-items">
        <li className="home">Home</li>
        <li>About</li>
        <li>Contact Us</li>
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
