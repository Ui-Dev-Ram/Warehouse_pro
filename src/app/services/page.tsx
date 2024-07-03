'use client'

import React, { useState } from 'react'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import Services from '@/data/services.json'
import ServiceAccord from '@/components/services/ServiceAccord'
import Blog from '@/components/home/blog/Blog'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import GetEnquiry from '@/components/services/GetEnquiry'



const page = () => {

  const [services, setServiceCard] = useState(Services.service)

  return (
    <div>
        <InnerHeroBanner />
          <div className="container m-auto">
            <div className="m-5">
                <div className="flex">
                    <div className="flex flex-col lg:flex-1">
                      <div className="text-center">
                        <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                          Our Services
                        </h1>
                        <p className='mt-0'>We Are Optimists Who Love To Work Together</p>  
                      </div>

                      <div className="flex flex-wrap gap-x-5 justify-center mt-5">
                        {
                          services.map((service, index)=> {
                            return(
                              <div className="w-80 md:w-64" key={index}>
                                <div 
                                  className="relative flex flex-col justify-center overflow-hidden pb-3 sm:pb-6">
                                      <div 
                                      className="bg-[url('/services/service/img1.jpg')] bg-no-repeat bg-cover group relative cursor-pointer overflow-hidden bg-white px-3 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-4"
                                      style={{
                                        backgroundImage: `url(${service.img})`,
                                        width: '100%',
                                        height: '100%',
                                      }}
                                      >
                                          <span className="absolute top-10 z-0 h-10 w-10 rounded-full bg-red transition-all duration-300 group-hover:scale-[10] group-hover:opacity-55"></span>
                                          <div className="relative z-10 mx-auto max-w-md">
                                              <span className="grid h-10 w-10 place-items-center rounded-full bg-red transition-all duration-300 group-hover:bg-red text-white text-xl font-bold">
                                                {service.number}
                                              </span>
                                              <div
                                                  className="pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                                  <h2 className='text-2xl mb-3 lg:text-base text-white tracking-wider font-medium'>
                                                    {service.title}
                                                  </h2>
                                                  <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-white'>
                                                    {service.description}
                                                  </p>
                                              </div>
                                              <div className="pt-5 text-base font-semibold leading-7">
                                                  <p>
                                                      <a href={service.path} className="text-white transition-all duration-300 group-hover:text-white">
                                                        Read More
                                                          &rarr;
                                                      </a>
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                </div>
                              </div>
                            )
                          })
                        }
                       
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