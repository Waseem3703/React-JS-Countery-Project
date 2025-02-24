import { useState, useEffect } from "react";
import "../../src/index.css";
import MapImage from "../../public/img/map.jpg";
import BoxLayout from "../components/BoxLayout/HomeBoxLayout";
import CounteryFact from "../../src/assets/api/CounteryData.json"; 

const Home = () => {
    const [startIndex, setStartIndex] = useState(0);
    const limit = 6;

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + limit) % CounteryFact.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-5 text-blue-950 p-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
                        Explore Countries with Real-Time Data
                    </h1>
                    <p className="text-base sm:text-lg text-center md:text-left mt-2">
                        Get insights on every country, including population, economy, culture, 
                        and geography. Stay updated with real-time data and compare nations easily!
                    </p>
                </div>
                <div className="flex justify-center">
                    <img 
                        src={MapImage} 
                        alt="Map Image of all countries" 
                        className="w-full max-w-[500px] h-auto rounded-lg"
                    />
                </div>
            </div>
            <BoxLayout limit={limit} startIndex={startIndex} />
        </>
    );
};

export default Home;
