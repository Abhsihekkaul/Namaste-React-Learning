import React, { useEffect, useState } from "react";

const Profile = (props="Anku") => {
    const [Count, SetCount] = useState(0);

    // let's create the set interval method inside the useEffect of the functional based component and clean it 

    useEffect(()=>{
        const timer = setInterval(()=> {
            console.log("i am interval clean me otherwise i will mess your codebase")
        },2000)

        return () => {
            clearInterval(timer );
        }

        // now always remember 
        //  as you know that useeffect is called after the first render 
        // after we leaving the page our return is called this is where we have cleared the mess which 
        // we have created inside our set interval 
    },
    [])

    return (
        <>
            <h1>{Count}</h1>
            <button onClick={() => SetCount(Count + 1)}>button</button>
            <h2>{props.name}</h2>
        </>
    );
};

export default Profile;
