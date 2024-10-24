import React from "react";
import ReactDOM from "react-dom/client";
import { head } from "lodash";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/contact";

// if any one will use a path which don't exist for that create a error component and add it in / path
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


//  Never create a component inside the component 
// as everytime the state of the first component change it will keep re rendereing again and again

// don't create your state variable in you if statement and for loops because it leads to inconsitancy 
// Always create your useState variable inside your functional cocmponents

// if you want to create the forms for your website quickly use the library called formik


//  now the main part of this lesson is to create different routes for the app to work for more than one page 
// in order to perform this we need to create the different routes for our application 
// first step is to install the react-router-dom package in our app 
// then import two things 1st is createBrowserRouter which will create the diffferent paths and routerProvider which will 
// provide route so that we will be able to use it in our browser

// we are going to build SPA - single page application using react 
// SPA helps us to make website faster and it won't need to keep refreshing the stuff 

// there are two types of routing 
// client side and server side 
// in react we are going to build client side routing 
// we will be creating a one page website and we won't be needing to reload our page 
// therefore we will not be using the anchore tag <a> as acchor tag always reload our page while redirecting 
// here we are rather going to use <link to =" "> this came from the react-router library




const AppLayout = () => {
  return (
    <>
      <Header />
      {/* if we want to keep some things intact we have to simply put <outlet /> and provide the children items 
      according to the path in the createbrowserrouter  */}
      <Outlet />
      <Footer />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <AppLayout/>,
    errorElement: <Error />,
    children : [
      {
        path : '/',
        element : <Body />  
      },
      {
        path : '/About',
        element : <About />  
      },
      {
        path : '/Contact',
        element : <Contact/>  
      },
      // creating a dynamic id
      {
        path: '/Restaurant/:id',
        element : <RestaurantMenu />
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);