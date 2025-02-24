import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CounteryFact from "../../src/assets/api/CounteryData.json";

const CountryDetail = () => {
  const { id } = useParams();
  const countryData = CounteryFact.find((c) => c.id.toString() === id);

  useEffect(() => {
    document.title = countryData 
      ? `${countryData.country} - Country Facts` 
      : `Country Not Found - Country Facts`;
  }, [countryData]);

  if (!countryData) {
    return (
      <p className="text-center text-red-500 text-3xl sm:text-5xl font-semibold p-6">
        Country not found!
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
        {countryData.country}
      </h1>
      <img 
        src={countryData.flag} 
        alt={`${countryData.country} flag`} 
        className="w-48 h-28 sm:w-64 sm:h-40 my-4 rounded-md shadow-lg object-cover"
      />
      <p className="text-base sm:text-lg text-gray-700 max-w-lg text-center px-2 sm:px-4">
        {countryData.description}
      </p>
    </div>
  );
};

export default CountryDetail;
