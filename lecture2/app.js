// before this use to work cuz we had cdn now we have to make it work by importing libraries 
// when we are linking the app.js file in our inidex.html we have to provide it a module type as we are importing modules in it so this app.js is modular type of script 
// the reason parcel is able to show everythign in the browser so quickly is because of the HMR - hot Module reloading 
// parcel has file watcher algorithm which keeping track of everything it is written in c++


// parcel is the beast 
// 1. HMR
// 2. file watcher algorithm
// 3. Bundling 
// 4. Minifing
// 5. cleaning code 
// 6. Production ready 
// 7. dev abd prodcution build 
// 8. Super fast and build optimaized 
// 9. Image optimization 
// 10. Caching while development - which saves a lot of time 
// 11. compression - even rename the variable to make it smaller in the production ready code so there would be easier for the production to maintain the size 
// 12. compatibles with older version of browser 
// 13. it can also run thorugh https : npx parcel build index.html --https
// 14. Manages port number 
// 15. consistent hashing algorithm 
// 16. Tree Shaking - removing un-wanted codes
// inside the node_modules we have a package called babel which helps to create polyfils which eventually helps to make our code run in the older version of the browser 



// transitive dependencies


import React from "react";
import ReactDOM from "react-dom/client"


const heading1 = React.createElement("h1", {
    id:"heading1",
}, "Hello world 1");

const heading2 = React.createElement("h2", {
    id:"heading2",
}, "Hello world 2");


// here in order to provide it two child we have to use the arrays
const container = React.createElement("div", {
    className:"container-1",
}, [heading1,heading2,heading1,heading2]);


// the way we use to write our code is bit lengthy that is why the jsx got indtroduced

const heading3 = <h1>My name is Abhishek kaul</h1>;

// JSX (JavaScript Syntax eXtension) is a JavaScript extension that allows users to 
// write HTML-like code within JavaScript files. It's similar to HTML but is stricter
//  and can display dynamic information.

// normally heading3 is not executable code for vanilla javascript it is the babel which is helping it out
// to make it possible it is kept on creating html thing thorugh jsx 

// normally : React.createContext => object =>HTML(DOM)
// in jsx : jsx => React.createContext => object =>HTML(DOM)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([container,heading3]);