import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Country from "./pages/Country.jsx"
import MainLayout from "./components/AppLayout/MainLayout.jsx";
import ErrorPage from "./components/UI/ErrorPage.jsx";

const App = () =>{

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children:[
            {

                path:"/",
                element: <Home />,
            },
            {
            
                path:"about",
                element: <About />,
            },
            {
            
                path:"country",
                element: <Country />,
            },
            {
            
                path:"contact",
                element: <Contact />,
            },]
   }

    
]);

    return <RouterProvider router={router}>

    </RouterProvider>

};

export default App;