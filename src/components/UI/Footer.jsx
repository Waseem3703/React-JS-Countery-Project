import { NavLink } from "react-router-dom";
import "../../index.css"

const Footer =()=>
{

return <>
        <div className="footer">
           <div className="footer-right">
              <ul className="font-semibold text-gray-700 ">
                 <li><NavLink to="/">Login</NavLink></li>
                   <li><NavLink to="/About">Sign</NavLink></li>

                     </ul>
                       </div>
                       
        <div className="footer-left">
           <ul className="font-semibold text-gray-700 ">

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Country">Country</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>

              </ul>
                </div>
    </div>
    
    </>

}
export default Footer;