import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CounteryFact from "../../../src/assets/api/CounteryData.json";

const BoxLayout = ({ startIndex, limit }) => {
  const navigate = useNavigate();
  
  const displayedCountries = CounteryFact.slice(startIndex, startIndex + limit);

  return (
    <>
      <Helmet>
        <title>Explore Countries - Country Facts</title>
        <meta name="description" content="Learn interesting facts about different countries." />
      </Helmet>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {displayedCountries.map(({ id, country, flag, interesting_fact }) => (
          <div
            className="hover:bg-[#fcfcfc] cursor-pointer p-5 rounded-lg shadow-md 
            text-gray-700 font-semibold flex flex-col items-center text-center transition 
            duration-300 ease-in-out transform hover:scale-105"
            key={id}
            onClick={() => navigate(`/country/${id}`)}
          >
            <img 
              src={flag} 
              alt={`${country} flag`} 
              className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 lg:w-36 lg:h-28 mx-auto rounded-md object-cover"
            />
            <p className="text-gray-900 text-[16px] font-semibold mt-2">{country}</p>
            <p className="text-gray-700 text-[14px] mt-2 px-2 sm:px-4 max-w-[80%]">{interesting_fact}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BoxLayout;
