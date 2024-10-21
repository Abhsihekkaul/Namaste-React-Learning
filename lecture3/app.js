import { head } from "lodash";
import React from "react";
import ReactDOM from "react-dom/client"

const heading1 = <h1>This is Abhishek kaul </h1>;

const Instructor = () => {
    return <strong>Akshay Saini</strong>
}

// Everything in react is a COMPONENT!
// there are two types of compnonents in react : 1)Functional - new way 2) class - old shit

// let's dive deep into the funcitonal compmonent 
// it is simple any function returning an react element is considered as the functional component

const greetings= () => {
    return <h1>Namaste Everyone</h1>;
}

// if you are creating some complex structure don't forget to put the parenthesis after the resurn statement 
// good way to write component is to write first letter in the capital letter
// Always remember onces writing jsx complex tsructure should be kept inside one parent inside such as div
const FruitsChart = () => {
    return (
        <div className="Container">
            <h2>Fruits which you suppose to eat everyday</h2>
            <ul>The fruits which you should eat are listed down:
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
                <li>Strawberry</li>
            </ul>

            {/* how to reuse the react elements here just write it with the curly braces
            but make sure not to include it into the root where you render it 
            because it won't render two pievces of the same element at one place 
            due to react reconcilation to optimaize the code efficiency */}

            {heading1}

            {/* now what if it is a function then first let's create one called instructor name */}
            {/* they you can use the same component type of way to render it  */}
            
            <Instructor />

            <br></br>
                {/* or */}
            {Instructor()} {/* Because at the end of the day it is a javascript funciton  */}

            {/* One more great thing about jsx is that if we want to write down the vanilla 
            javascript code inside the jsx we just need to add {} parenthesis and write any sort 
            of javascript code there. 😎 */}
            {console.log("Hello, i am inside the jsx now ")}


            {/* Improper use of the innerHTML can open you up to a cross-site scripting (XSS) attack. 
            Sanitizing user input for display is notoriously error-prone, and failure to properly 
            sanitize is one of the leading causes of web vulnerabilities on the internet. */}
            {/* jsx code are always sanitized❣️
                https://medium.com/@justintulk/sanitizing-html-data-in-react-989d5c68e757
            */}


            {/* fancy jargons : if we are using any component inside the component is is known as component composition */}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

// Consistency and Future-proofing: Writing Greeting() manually calls the function,
//  which might work for simple cases, but as your app grows, you will miss out on
//  React-specific optimizations and features. It might also cause issues with future 
// React code, such as class-based components, hooks, and context.
// In short, using <Greeting /> ensures that your component behaves properly in a React

root.render([greetings(),<FruitsChart />]);



// Whensoever you want to revise the lecture 3 just go to the 2:28:00 of the chapter 4 