import React from "react";
import "./Card.css"
import sedan from "./sedan.png";
export default function Card1()
{   
    return(
        <>
            <div className=" w-64 h-96 p-7 pr-12 bg-[#E28525] rounded-l-xl	Mbrt">
                <div className="w-9 h-9 mb-4 rounded-full bg-[#B46A1F]"><img src={sedan} alt="Sedan" className="CardIcon"/></div>
                <h1 className="pt-3.5 pb-3.5 text-2xl uppercase text-white font-Dosia font-semibold	">sedans</h1>
                <p className="pt-3.5 pb-3.5 text-sm text-white font-semibold">Choose a sedan for its affordibility and excellent fuel economy. Ideal for cruising in the city or on your next road trip</p>
                <button className="text-[#B46A1F] bg-white p-3 w-32 rounded-full font-semibold mt-5">Learn More</button>
            </div>
        </>
    ); 
}