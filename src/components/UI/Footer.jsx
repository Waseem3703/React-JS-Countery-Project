import { NavLink } from "react-router-dom";
import "../../index.css";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 border-t shadow-md">
      
      <div className="footer-right mb-3 md:mb-0">
        <ul className="font-semibold text-gray-700 flex flex-col md:flex-row gap-4">
          <li>
            <NavLink to="/" className="hover:text-blue-500 transition">Login</NavLink>
          </li>
          <li>
            <NavLink to="/About" className="hover:text-blue-500 transition">Sign</NavLink>
          </li>
        </ul>
      </div>

      <div className="footer-left">
        <ul className="font-semibold text-gray-700 flex flex-col md:flex-row gap-4">
          <li>
            <NavLink to="/" className="hover:text-blue-500 transition">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" className="hover:text-blue-500 transition">About</NavLink>
          </li>
          <li>
            <NavLink to="/Country" className="hover:text-blue-500 transition">Country</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="hover:text-blue-500 transition">Contact Us</NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;
