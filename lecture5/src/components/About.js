// in order to run children it is required to have oulet here 

import React, { useState } from "react"
// import { Outlet } from "react-router-dom"
import Profile from "./profile"
import ClassProfile from "./profileClass"

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent - constructor")  // will be called first
     }

     componentDidMount(){
        console.log("Parent - ComponentDidMount , will be called after the lifeCycle of the all children will be ended as we know that render will be called first so it will invoke the children before this. ")
     }
    render(){
        return (
            <>
            {console.log("Parent- render")}
            <h1>
                Hello World
            </h1>
            
            {/* <Outlet /> */}
            {/* <Profile name="Abhishek" /> */}
            <ClassProfile name= "First Class" />
            <ClassProfile name= "Second Class" />
            </>
        )
    }
    }

export default About



// why can't we make useEffect aysnc but component did mount async ?

// useEffect cannot be directly async because it expects a synchronous cleanup function or
//  nothing at all, not a promise.

// componentDidMount can be async because it's a regular class method and not constrained 
// by React’s synchronous lifecycle expectations.