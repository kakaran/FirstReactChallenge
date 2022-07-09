import React from "react";
import "./Card.css"
import suv from "./suv.png";

export default function Card2()
{
    return(
        <>
            <div className=" w-64 h-96 p-7 pr-12 bg-[#016972]">
                <div className="w-9 h-9 mb-4 rounded-full bg-[#00535B]"><img src={suv} alt="Sedan" className="CardIcon"/></div>
                <h1 className="pt-3.5 pb-3.5 text-2xl uppercase text-white font-Dosia font-semibold	">suvs</h1>
                <p className="pt-3.5 pb-3.5 text-sm text-white font-semibold">Taken an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                <button className="text-[#016972] bg-white p-3 w-32 rounded-full font-semibold mt-5 hover:bg-[#016972] hover:text-white hover:border hover:border-white">Learn More</button>
            </div>
        </>      
    );
}