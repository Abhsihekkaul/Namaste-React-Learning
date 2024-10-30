import React, { useState } from "react";

const Profile = (props="Anku") => {
    const [Count, SetCount] = useState(0);

    return (
        <>
            <h1>{Count}</h1>
            <button onClick={() => SetCount(Count + 1)}>button</button>
            <h2>{props.name}</h2>
        </>
    );
};

export default Profile;
