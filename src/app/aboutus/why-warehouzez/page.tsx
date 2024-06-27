import React from 'react'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner';
import Image from 'next/image';
import aboutImg from '/public/aboutus/about.jpg'
import Blog from "@/components/home/blog/Blog";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import LookingForBest from "@/components/home/lookingForBest/LookingForBest";


const page = () => {
  return (
    <div>
        <InnerHeroBanner />
        <div className="m-5">
          <div className="flex items-start">
              <div className="flex flex-col flex-1">
                <h1 className='block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4'>
                    Why Choose Us
                </h1>
                  <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
                  Selecting a warehousing and logistics firm is an absolutely important decision for your company. This is because the supply chain operations of your company will depend on it. Warehouzez is one stop destination for all your supply chain and logistics needs. We are a team of supply chain management and logistics experts you can surely count on to efficiently manage your logistics. We offer our customers with cost- effective solutions based on their business requirements. We have decades of experience and industrial knowledge. What sets us apart from your conventional logistics firm is our commitment to investing in cutting-edge information system, visibility, and tracking technologies, as well as our pride in being a whole solutions service provider.
                  </p>
              </div>
              <div className="flex relative flex-1 w-full mt-16 items-center justify-center">
               
                <Image src={aboutImg} alt="" className='relative w-3/4 m-auto' />
              </div>
          </div>
          <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
            It is absolutely necessary for every business to have an effective business strategy. The business strategies of Warehouzez are specifically designed to achieve the best possible results and to gain a competitive edge in the industry. We strive to grow and diversify our business. Warehouzez' business strategies are meticulously planned and carefully designed with the aim of -
          </p>

        
        <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
          Since multiple strategies and methodologies are required, our corporate structure includes comprehensive strategic approaches at all levels. Our transition process, for instance, provides answers to all of the aforementioned questions. At Warehouzez, we intend to understand the requirements of our clients. Based on their needs, we then design customised and innovative solutions. Our next crucial step is the execution and implementation of the solutions. Lastly, we also make it a point to always track our performance.
        </p>

        <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
          Warehouzez the Digital Supply Chain is one of the best and most well-known logistics and warehousing service providers in the country. Our working professionals are well-trained and experienced. In all likelihood, we intend to offer the finest and most authentic warehouse and logistics services. Our topmost goal is the satisfaction of our customers. We specialise in warehouse management and logistics services. We aspire to create an innovative working environment that promotes growth and development. Additionally, we make use of cutting-edge and modernised technology infrastructure. We intend to become your most reliable logistics partner.
        </p>

        <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
          Our strategic business plan provides Warehouzez's team with a unified framework for analyzing, grasping positive business possibilities, customer satisfaction, new business references, and generating solutions to counteract potential risks. We make the best possible use of strategic technologies, resources, and competencies.
        </p>
        </div>
        <Blog />
        <NetworkofWarehouzez />
        <LookingForBest />
    </div>
  )
}

export default page