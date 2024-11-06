import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { head } from "lodash";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
import ClassProfile from "./components/profileClass";
import Shimmer from "./components/shimmer";

// As we know that every component we create everynew file we are creating it will be bundled together to one 
// with the help of babel but there is a problem will the bundling 
// suppose we are creating large sccale application and there are thousands of different components and utilities 
// it will eventually make our one js file way to verbose so in order to handle it we can use the term knows as 

// chunking the bundlers 
// Aka Lazy Loading - only loading the component which user is looking forward to see or he just chose to go with 
// aka on demand loading 
// aka Dynamic Importing 
// aka code splitting 
// aka dynamic bundling 


const Insta = lazy(()=>import('./components/Insta'))

// when we try to load something on demand react try to suspend it that is why the error occur as there is no code 
// availabke to the react in order to handle this error we have <suspense >


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
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
        // Wrap Instamart with Suspense to handle the loading state
        path: '/Insta',
        element:  <Suspense fallback={<Shimmer/>}><Insta /></Suspense>
      },
      {
        path: '/restaurant/:id',
        element: <Suspense fallback={<Shimmer/>}><RestaurantMenu /></Suspense>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
