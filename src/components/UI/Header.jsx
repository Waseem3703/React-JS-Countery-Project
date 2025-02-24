import "../../index.css";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <>


      <div className="w-full bg-gray-100 text-gray-800 p-2 flex justify-between items-center">
        <div className="pl-4">
        <ul className="flex gap-4 pr-4 font-medium">
          <li>
         <NavLink to="/Login" className="hover:text-blue-500 transition">Login</NavLink>
           </li>
          <li>

          <NavLink to="/SignUp" className="hover:text-blue-500 transition">Sign Up</NavLink>
          </li>
               </ul>
        </div>

        <ul className="flex gap-4 pr-4 font-medium">
          <li>
            <NavLink to="/about" className="hover:text-blue-500 transition">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-500 transition">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar flex flex-col md:flex-row items-center justify-center p-4">
        <ul className="text-gray-700 font-semibold flex flex-col md:flex-row gap-4">
          <li>
            <NavLink to="/" className="hover:text-blue-500 transition">Home</NavLink>
          </li>
          <li>
            <NavLink to="/country" className="hover:text-blue-500 transition">Country</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-blue-500 transition">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-500 transition">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Headers;
