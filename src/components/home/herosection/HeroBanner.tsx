'use client'

import Image from "next/image";
import HeroBannerImg from "/public/slider-bg.jpg"
import Typewriter from 'typewriter-effect';
import SearchBar from "../search-engine/SearchBar";

export default function HeroBanner() {
    return(
      <div className="flex flex-col relative">
         <div className="absolute w-full flex flex-col items-center justify-center">
           <div className="text-2xl sm:text-8xl font-bold uppercase text-center text-white mt-4 sm:mt-8 z-[5]">
            Warehouzez 
            <div className="text-red mt-0 sm:mt-5 block text-2xl sm:text-7xl">
            <Typewriter
              options={{
                strings: [
                  "THE DIGITAL",
                  "SUPPLY ",
                  "CHAIN"
                ],
                autoStart: true,
                loop: true,
              }}
           
          />
            </div>
           </div>
         </div>
         
         <div className="flex flex-col mb-8 relative">
           <Image src={HeroBannerImg} alt="" className="bg-cover bg-center bg-no-repeat" />
           <div className="absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 bg-opacity-30"></div>
         </div>
         
         <div className="relative sm:absolute left-0 right-0 -bottom-20 search-main">
          <SearchBar />
         </div>
         
      </div>
    )
}





           {/* <p className="font-medium text-xl mb-10 text-white w-6/12 text-center">
             Search a warehouse from a large network of functional warehouses across the country.
           </p> */}

           {/* <div className="flex item-center">
              <button className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                    Contact Us
              </button>
              <Link className="flex items-center text-white gap-3 ml-5" href={'#'}>
                <MdPlayCircleOutline className="text-5xl" /> <span className="text-1xl"> How it work </span>
              </Link>
           </div> */}