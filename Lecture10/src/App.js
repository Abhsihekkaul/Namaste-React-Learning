import React, { Suspense, lazy, useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
import ClassProfile from "./components/profileClass";
import Shimmer from "./components/shimmer";
import userContext from "./Utils/userContext";
import { set } from "lodash";

// Lazy loading the Insta component to optimize performance
const Insta = lazy(() => import('./components/Insta'));

// Create a Context for user data, allowing it to be accessed throughout the app
const UserContext = createContext();

const AppLayout = () => {
  // Managing user data state
  const [NewUser, setNewUser] = useState({
    name: "Abhishek Kaul",
    email: "Abhishekkaul32@gmail.com"
  });

  return (
    // Provide user data to child components via context
    <userContext.Provider value={{ 
      NewUser : NewUser,
      setNewUser : setNewUser,
     }}>
      <Header />
      <Outlet />
      <Footer />
    </userContext.Provider>
  );
};

// Define routes and components for the application
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,  // Error handling for routes
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'classprofile',
            element: <ClassProfile />
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        // Lazy loading the Insta component with Suspense
        path: '/insta',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Insta />
          </Suspense>
        )
      },
      {
        // Lazy loading the RestaurantMenu component with Suspense
        path: '/restaurant/:id',
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        )
      }
    ]
  }
]);

// Render the application with the router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
