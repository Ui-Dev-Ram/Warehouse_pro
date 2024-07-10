'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Blog from '@/components/home/blog/Blog'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import GetEnquiry from '@/components/services/GetEnquiry'
import ServiceAccord from '@/components/services/ServiceAccord'

import Industries from '@/data/industries.json'

// import img1 from '/public/assets/3pl/one1.png'

const page = () => {

    const [industry, setIndustry] = useState(Industries.industrycards)

  return (
    <div>
         <InnerHeroBanner />
         <div className="container m-auto">
            <div className="lg:m-5">
                <div className='mb-5 text-center'>
                    <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                        Industries
                    </h1>
                    <b className='font-medium'>Let's Checkout our All Top RattedLatest Project</b>

                    <div className="bg-grey-50 mb-14" id="blog">
                        <div className="container"> 
                            <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-4 xl:gap-10">
                            
                            {
                               industry.map((card, index)=> {
                                return(
                                    <Link href="/post" className="shadow w-full group overflow-hidden">
                                        <div key={index} style={{"backgroundImage": `url(${card.img})`}} className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                                            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                                            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-4 py-1 text-center font-body text-sm font-bold uppercase text-white md:text-sm group-hover:bg-red group-hover:border-red transition-all">Read More</span>
                                        </div>
                                        <div className="bg-white py-3 px-4 xl:py-5 text-left">
                                            <span className="block font-body text-md font-bold text-gray-700">
                                                {card.title}
                                            </span>
                                            <span className="block pt-2 font-body text-grey-20">
                                                {card.description}
                                            </span>
                                        </div>
                                    </Link>
                                )
                               })
                            }
                            
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
       
        <GetEnquiry />
        <ServiceAccord />
        <Blog />
        <NetworkofWarehouzez />
    </div>
  )
}

export default page