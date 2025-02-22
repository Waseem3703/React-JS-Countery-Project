import "../../index.css";
import { Link } from "react-router";

const Headers = () =>{

    return <>
    
    
    <div className="navbar ">
        <div>
        <ul className=" text-gray-700 font-semibold ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Country">Country</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>

        </ul>
        </div>
    </div>
    </>
}
export default Headers;