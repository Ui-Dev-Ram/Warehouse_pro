import React from 'react'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner';
import Image from 'next/image';
import aboutImg from '/public/aboutus/about.jpg'
import OurSpecialization from '@/components/aboutus/OurSpecialization';
import SafetyOfYourInventory from '@/components/aboutus/SafetyOfYourInventory';
import Blog from "@/components/home/blog/Blog";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import LookingForBest from "@/components/home/lookingForBest/LookingForBest";




const page = () => {
  return (
    <div>
       <InnerHeroBanner />
       <div className="container m-auto">
          <div className="m-5">
              <div className="flex">
                  <div className="flex flex-col lg:flex-1">
                    <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4'>
                        About Company
                      </h2>
                      <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3'>
                          We offer the best and most authentic warehouse services. Warehouzez The Digital Supply Chain is one of the greatest and most well-known logistics and warehousing service providers in the country.
                      </p>
                      <p className='block antialiased font-sans  text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3'>
                          Warehouzez The Digital Supply Chain is a certified business venture. It is led by a professional with years of experience of working with India's largest multinational corporations. Ever since its establishment, the company has been expanding its operations in several parts of the country.
                      </p>
                      <p className='block antialiased font-sans  text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3'>
                        Our primary goal is the satisfaction of our customers. Keeping this in mind, we concentrate on our purpose of 'Providing Premium Quality Services at an Affordable Price'. Our area of specialisation includes warehouse management and distribution services.
                      </p>
                      <p className='block antialiased font-sans  text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3'>
                        Our Warehouses are thoughtfully positioned in prime locations (near to cities and ports). The majority of our clients avail both warehouse services and transportation services. Our high-tech 3PL and distribution facility network is indeed the greatest in the industry.
                      </p>
                  </div>
                  <div className="relative flex-1 w-full mt-16 items-center justify-center hidden lg:block">
                    <Image src={aboutImg} alt="" className='relative w-3/4 m-auto' />
                  </div>
              </div>
              <OurSpecialization />
              <SafetyOfYourInventory />
          </div>
       </div>
        <Blog />
        <NetworkofWarehouzez />
        <LookingForBest />
    </div>
  )
}

export default page;