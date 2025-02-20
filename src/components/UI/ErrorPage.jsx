import {NavLink, useRouteError } from "react-router-dom";
const ErrorPage =()=>{


   const Error = useRouteError();

  return <>


    <h1>This Error Page</h1>
    <h2> {Error.data  || "Something Went Wrong!"} `<br></br>`{Error.status}</h2>
    <button className="bg-amber-950 text-white rounded-sm p-1 ml-1">    <NavLink to={"/"}> Go Home</NavLink>    </button>
    </>

}

export default ErrorPage;