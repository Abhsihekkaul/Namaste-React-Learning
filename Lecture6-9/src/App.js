import React from "react";
import ReactDOM from "react-dom/client";
import { head } from "lodash";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

// If anyone uses a path that doesn't exist, create an error component and add it to the '/' path
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
import ClassProfile from "./components/profileClass";

// Never create a component inside another component,
// as every time the state of the first component changes, it will keep re-rendering repeatedly.

// Don't create your state variables inside `if` statements or `for` loops because it leads to inconsistency.
// Always create your `useState` variables inside your functional components.

// To create forms for your website quickly, consider using the Formik library.

// The main part of this lesson is to create different routes for the app to support multiple pages.
// To do this, install the `react-router-dom` package in our app.
// Then, import two main functions: `createBrowserRouter` to create different paths, and `RouterProvider` to
// make the routes accessible in the browser.

// We are building an SPA - Single Page Application using React.
// SPA improves website speed as it doesn’t require constant refreshing.

// There are two types of routing: client-side and server-side.
// In React, we're implementing client-side routing.
// By creating a one-page website, we avoid reloading the page and will use `<Link to=" ">` instead of anchor tags `<a>`,
// as anchor tags refresh the page while redirecting. `<Link>` is from the react-router library.

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* To keep some elements intact while changing content, use <Outlet />.
          Define the child items according to the path in `createBrowserRouter`. */}
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
        // Create routes like localhost:1234/about/profile or nested child routes.
        // Note: This won’t work automatically; an <Outlet /> function is needed in About.js.
        children: [
          {
            // Using 'profile' without a '/' keeps it as a child route (localhost:1234/about/profile),
            // while a '/' would make it relative to the root (localhost:1234/profile).
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
      // Creating a dynamic route with an ID
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
