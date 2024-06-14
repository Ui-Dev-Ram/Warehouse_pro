'use client'

import React, { useState } from 'react'; 
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

import letsCheckout from "@/data/letsCheckout.json" 

const IndustryCard = () => {
 
  const [listing, setListing] = useState(letsCheckout.warehouseListed);
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
    <Carousel className='w-full h-full pb-16' showDots={true} responsive={responsive}>
    {
       listing.map((i, index) => {
        return(
          <div key={index} className="relative flex items-center justify-center mr-3">
            <DirectionAwareHover imageUrl={i.img}>
              <div className="mb-10  w-3/4 text-left">
                <p className="font-bold text-xl mb-2">{i.title}</p>
                <p className="font-normal text-sm mb-6">{i.descrip}</p>
                <Link href={i.link} className='bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full'>Read More</Link>   
              </div>
            </DirectionAwareHover>
          </div>
        )
      })
    }            
    </Carousel>
</div>
  )
}

export default IndustryCard;