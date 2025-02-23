import { useState, useEffect } from "react";
import "../../src/index.css";
import MapImage from "../../public/img/map.jpg";
import BoxLayout from "../components/BoxLayout/HomeBoxLayout";
import CounteryFact from "../../src/assets/api/CounteryData.json"; 

const Home = () =>{
     
    const [startIndex, setStartIndex] = useState(0);
    const limit = 6;

    useEffect(()=>{
        const interval = setInterval(()=>{
            setStartIndex((previndex) => (previndex + limit) % CounteryFact.length);
        }, 10000);
        return ()=>clearInterval(interval);
    }, [])

    return <>
    
    <div className="grid grid-cols-2 items-center gap-4 mt-5 text-blue-950 ">
        <div>
            <h1 className="text-3xl font-bold">Explore Countries with Real-Time Data</h1>
            <p>Get insights on every country, including population, economy, culture, 
                and geography. Stay updated with real-time data and compare nations easily!
            </p>
        </div>
        <div className="flex justify-center">
               <div>
                <img src={MapImage} alt="Map Image of all country" 
                className="w-[500px] h-[250px] rounded-lg mt-5"></img>
        </div>

    </div>
    </div>
    <BoxLayout limit={limit} startIndex={startIndex}/>
    </>
}
export default Home;