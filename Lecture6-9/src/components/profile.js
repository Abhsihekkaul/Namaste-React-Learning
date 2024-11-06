import React, { useEffect, useState } from "react";

const Profile = (props="Anku") => {
    const [Count, SetCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=> {
            console.log("i am interval clean me otherwise i will mess your codebase")
        },2000)

        return () => {
            clearInterval(timer );
        }

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
