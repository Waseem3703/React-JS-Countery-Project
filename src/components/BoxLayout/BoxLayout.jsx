import "../../../src/index.css";
import CounteryFact from "../../../src/assets/api/CounteryData.json"



const BoxLayout =() =>{
   return <>
         <div className="grid grid-cols-3 gap-4 p-1 ">
            
       {
           CounteryFact.map((CurrentCountery) =>{
             const {id, country, flag, interesting_fact} = CurrentCountery;
                  return (
                       <div 
                       className="hover:bg-[#fcfcfc] p-5 rounded-[10px] shadow-md 
                        text-gray-700 font-semibold flex flex-col items-center text-center " 
                        key={id}>
                            <img 
                            src={flag} alt={`${country} flag`}
                            className="w-30 h-20 mx-auto rounded-md"
                            />
                               <p className="text-gray-900 text-[16px] font-semibold mt-2">{country}</p>
                              <p className="text-gray-900 text-[14px] m-width-[80%] mt-2">{interesting_fact}</p>
                                 

                          </div>

                         );
                         })
       }

              </div>
                 

    </>


}

export default BoxLayout;