import "../../../src/index.css";
import CounteryFact from "../../../src/assets/api/CounteryData.json"


const BoxLayout =() =>{
   return <>
         <div className="grid grid-cols-3 gap-2 ">
            


       {
           CounteryFact.map((CurrentCountery) =>{
                         //destructing 
             const {id, country, population, capital, interesting_fact} = CurrentCountery;
                  return (
                       <div className="hover:bg-[#fcfcfc] p-10 rounded-[10px] shadow-md 
                        text-gray-700 font-semibold" key={id}>
                        <p className="text-lg font-medium flex justify-between">
                               Country: <span className="text-gray-500">{country}</span>
                                        </p>
                        <p className="text-lg font-medium flex justify-between">
                               Population: <span className="text-gray-900"> {population}</span>
                                     </p>
                        <p className="text-lg font-medium flex justify-between">
                              Capital: <span className="text-gray-900">{capital}</span>
                                     </p>
                         <p className="text-lg font-medium flex justify-between">
                              Fact: <span className="text-gray-900">{interesting_fact}</span>
                                     </p>
                                 

                     </div>

                     );
                  })
               }

               </div>
                 

    </>


}

export default BoxLayout;