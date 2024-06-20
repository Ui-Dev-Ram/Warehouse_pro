import React from 'react';
import { FaRegThumbsUp, FaRupeeSign  } from "react-icons/fa";
import { TbAccessible } from "react-icons/tb";
import Image from 'next/image';
import ImageMap from '/public/our-presence-india.png'


const OurValueOurPresence = () => {
  return (

    <div className='flex flex-col justify-center items-center text-center mb-20 py-8'>
        <h2 className='text-black text-base sm:text-2xl font-bold'>Our Value & Presence</h2>   
            <div className="grid grid-row-12 lg:grid-cols-12 items-center justify-center gap-8 lg:gap-16 xl:gap-24">
                <div className='col-span-11 lg:col-span-5 pl-6'>
                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-xl border-slate-900 bg-clip-border rounded-xl w-full">
                        <div className="p-4">
                        <h5 className="flex items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            <FaRegThumbsUp className=' text-gray-900 text-xl mr-3' /> Preferred
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Being a preferred services partner is our mission. We shall be preferred warehouse and logistics services provider across the world with focus on technology, skill development, customer services and safety measures.
                            </p>
                        </div>
                    </div>  

                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-xl border-slate-900 bg-clip-border rounded-xl w-full">
                        <div className="p-4">
                            <h5 className="flex items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            <TbAccessible className='text-gray-900 text-xl mr-3' /> Accessible
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Being a preferred services partner is our mission. We shall be preferred warehouse and logistics services provider across the world with focus on technology, skill development, customer services and safety measures.
                            </p>
                        </div>
                    </div>  

                    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-xl border-slate-900 bg-clip-border rounded-xl w-full">
                        <div className="p-4">
                        <h5 className="flex items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            <FaRupeeSign  className=' text-gray-900 text-xl mr-3' /> Cost - Effective
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Being a preferred services partner is our mission. We shall be preferred warehouse and logistics services provider across the world with focus on technology, skill development, customer services and safety measures.
                            </p>
                        </div>
                    </div>  

                    
                </div>
                <div className='col-span-12 lg:col-span-7'>
                    <Image src={ImageMap} width={636} height={665} alt=""></Image>
                </div>
            </div>
    </div>
    
  )
}

export default OurValueOurPresence;