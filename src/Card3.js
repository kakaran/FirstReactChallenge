import React from "react";
import "./Card.css"
import luxury from "./luxury.png";
export default function Card3()
{   
    return(
        <>
            <div className=" w-64 h-96 p-7 pr-12 bg-[#00403F] rounded-r-xl Mbrb">
                <div className="w-9 h-9 mb-4 rounded-full bg-[#003432]"><img src={luxury} alt="Sedan" className="CardIcon width-180"/></div>
                <h1 className="pt-3.5 pb-3.5 text-2xl uppercase text-white font-Dosia font-semibold	">luxury</h1>
                <p className="pt-3.5 pb-3.5 text-sm text-white font-semibold">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </p>
                <button className="text-[#023230] bg-white p-3 w-32 rounded-full font-semibold mt-5 ">Learn More</button>
            </div>
        </>
    ); 
}