import Headers from "../UI/Header.jsx"
import Footer from "../UI/Footer.jsx"
import { Outlet } from "react-router-dom";

const MainLayout = () =>{
 
    return <>
    
     <Headers />
     <Outlet />
     <Footer/>    
    
    </>

}
export default MainLayout;