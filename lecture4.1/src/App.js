import React from "react";
import ReactDOM from "react-dom/client";
import { head } from "lodash"; // Ensure lodash is installed if you're using this import

// destrcutured every thing
import Header from "./components/Header";
//import { IMG_CDN_LINK } from "./constant";
import Body from "./components/Body";
import Footer from "./components/Footer";
//import { RealTimeData } from "./constant";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);