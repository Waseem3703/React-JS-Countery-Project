import { useParams } from "react-router-dom";
import CounteryFact from "../../src/assets/api/CounteryData.json";
import { useEffect } from "react";

  const CountryDetail = () => {
  const { id } = useParams();
  const countryData = CounteryFact.find((c) => c.id.toString() === id);
  console.log(countryData);

   useEffect(()=>{
     if(countryData) {
          document.title =`${countryData.country} - Country Facts`;
     }
     else {
          document.title =`Country Not Found - Country Facts`;

     }
   },[countryData]);
    
  if (!countryData) {
    return <p className="text-center text-red-500 text-5xl">Country not found!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-900">{countryData.country}</h1>
      <img src={countryData.flag} alt={`${countryData.country} flag`} 
      className="w-64 h-40 my-4 rounded-md shadow-lg" />
      <p className="text-lg text-gray-700 max-w-lg text-center">{countryData.description}</p>
    </div>
  );
};

export default CountryDetail;
