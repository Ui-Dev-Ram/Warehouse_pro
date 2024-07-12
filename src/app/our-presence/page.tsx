import Blog from '@/components/home/blog/Blog'
import LookingForBest from '@/components/home/lookingForBest/LookingForBest'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <InnerHeroBanner />
        <div className="container m-auto">
          <div className="m-5">
              <div className="flex">
                  <div className="flex flex-col lg:flex-1">
                      <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4 text-center'>
                        Our Presence
                      </h2>
                  </div>  
              </div>
              
              <div className="relative">
                <Image alt="" src="/our-presence-india.png" width={772} height={808} className='m-auto' />
              </div>
          </div>
        </div>        
        <Blog />
        <NetworkofWarehouzez />
        <LookingForBest />
    </div>
  )
}

export default page