'use client'

import React, { useState } from 'react'; 
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import warehouseLists from "@/data/warehouseListed.json" 
import { FaRegEye } from "react-icons/fa";

const WarehouseListed = () => {

  const [listing, setListing] = useState(warehouseLists.warehouseListed);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }; 
  
  return (  
    <div className='w-full h-full mt-10'>
        <Carousel className='w-full h-full pb-16' responsive={responsive}>
        
        {
           listing.map((i, index) => {
            return(
              <div key={index} className='group bg-white hover:bg-darkGray hover:text-white w-11/12 m-auto h-full flex flex-col items-center justify-center shadow-xl transition duration-200 delay-80 rounded-lg'>
                <div className="g-white w-full relative h-64">
                  <Image src={i.img} className="bg-cover bg-center bg-no-repeat w-80 h-56 rounded-t-md" fill={true} alt="" />
                  <p className='relative flex items-center justify-end text-sm m-2 mr-3 font-bold group-hover:text-orange-900'><FaRegEye className='mr-1 text-red' /> {i.view}</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-2 w-full p-3">
                  <h5 className='text-slate-900 font-bold tracking-wide mt-2 group-hover:text-white'>
                    {i.location}
                  </h5>
                  <p className='text-slate-900 tracking-wide text-sm group-hover:text-white'>
                    {i.sqfttotal}
                  </p>

                  <p className='text-slate-900 tracking-wide text-sm group-hover:text-white'>
                    {i.sqftavail}
                  </p>

                  <p className='text-slate-900 tracking-wide text-sm group-hover:text-white'>
                    {i.time}
                  </p>
                  <button className="text-xs mt-3 bg-red hover:bg-red text-white p-2 rounded-full border-2 border-red group-hover:text-white group-hover:bg-darkGray group-hover:border-white group-hover:border-2 hover:delay-300">
                      More Details
                  </button>
                </div>
              </div> 
           
            )
          })
        }            
        </Carousel>
    </div>
  )
}

export default WarehouseListed