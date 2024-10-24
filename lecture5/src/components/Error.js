// react-router-dom provide us the functionality to show the public what caused the error with 
// the hook called useRouteError
import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
        <h1>{err.status} , {err.statusText} </h1>
        <h1>OOOOOOOOOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPSSSSSSSSSSSSSSSSSSSSSSSSSSS</h1>
        <h2>Something went Wrong!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
        </>
    )
}

export default Error;