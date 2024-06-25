import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/moving-border";

const InnerHeroBanner = () => {
  return (
    <div>

    <div className="flex mb-4 relative">
      <div className="w-full bg-white h-100 relative">
        <Image src="/aboutus/herobanner.jpg" alt='Hero banner' fill={true} 
        className='w-full bg-no-repeat bg-center'/>
        
        <h2 className='w-full absolute z-999'>"Reliability in motion, trust in every mile."</h2>
      </div>
      <div className="w-1/4 bg-white h-100 p-5">
            <div className="flex flex-col justify-start">
              <h1 className='text-3xl'>Get Quote</h1>
              <input 
              type="text" 
              placeholder="Enter Your Name*" 
              className="input h-8 mt-4 input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />

              <input 
              type="text" 
              placeholder="Enter Your Email*" 
              className="input h-8 mt-4 input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />
              
              <input 
              type="text" 
              placeholder="Enter Your Contact Number*" 
              className="input h-8 mt-4 input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />

              <input 
              type="text" 
              placeholder="Where do you need our service?*" 
              className="input h-8 mt-4 input-bordered w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" />
              
              <textarea className="textarea textarea-bordered mt-4 w-full rounded-none max-w-xs border-t-0 border-l-0 border-r-0 text-sm" placeholder="Enter Your Message"></textarea>

              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Submit
              </Button>
            </div>
      </div>  
    </div>
    </div>
  )
}

export default InnerHeroBanner;