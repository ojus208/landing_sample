"use client"
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, shoes } from "../constants";
import Image from "next/image";
import {bigShoe1} from '../assets/images';
import { useState } from "react";



const Hero = () => {
  const [bigshoe, setBigshoe] = useState(bigShoe1)
  return (
    <section className="w-full flex md:flex-row flex-col justify-center  min-h-screen gap-10 max-container">
      <div className="relative w-full flex flex-col items-start max-xl:padding-x pt-28 justify-center xl:w2/5">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> <br /> <span className="mt-3 text-coral-red inline-block">Nike</span> shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="show now" iconURL={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index)=>
          
            <div key={index}>
              <p className=" text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
          
          )}
        </div>
      </div>
      <div className="w-full relative flex flex-wrap justify-center items-center h-full md:flex-row flex-col bg-voilet-500 wide:min-h-screen ">
        <Image
        src={bigshoe}
        alt="big shoe 1"
        className="mt-20"
        
        />
        <div className="flex flex-row relative top-10 w-full justify-around items-center z-11">
            {shoes.map((shoe, index)=>(
              <button className="flex justify-center items-center p-5 shadow cursor-pointer rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 first:active transition-all duration-100" 
              onClick={
                ()=>{
                  setBigshoe(shoe.bigShoe)
                }
              } key={index}>
                <Image 
                src={shoe.thumbnail}
                alt="shoe image"
                width={100}
                height={100}
                />
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
