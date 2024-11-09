import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderStatus from "../Utils/HeaderStatus";

function checkLoggedIn() {
  return false;
}

const Header = () => {
  const [isUserLogin, setUserLogin] = useState(checkLoggedIn());

  return (
    <div className="nav-bar flex items-center justify-between p-4 bg-cream shadow-md">
      <Link to="/">
        <img
          className="logo w-[80px] h-[80px] rounded-full"
          alt="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-kjb4wMhqsqM5n4Zh2dIHSmUFAU4VrOw3A&s"
        />
      </Link>
      <ul className="nav-items flex space-x-6 items-center text-black text-2xl">
        <HeaderStatus />
        <Link to="/">
          <li className="home hover:text-green-700 transition-colors duration-300">Home</li>
        </Link>
        <Link to="/About">
          <li className="hover:text-green-700 transition-colors duration-300">About</li>
        </Link>
        <Link to="/Contact">
          <li className="hover:text-green-700 transition-colors duration-300">Contact Us</li>
        </Link>
        <Link to="/Insta">
          <li className="hover:text-green-700 transition-colors duration-300">Insta</li>
        </Link>
        <li className="hover:text-green-700 transition-colors duration-300">Cart</li>
        {isUserLogin ? (
          <button
            className="LOG bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600 transition-colors duration-200"
            onClick={() => setUserLogin(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="LOG bg-green-500 px-4 py-2 rounded-full text-white hover:bg-green-600 transition-colors duration-200"
            onClick={() => setUserLogin(true)}
          >
            Login
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;
