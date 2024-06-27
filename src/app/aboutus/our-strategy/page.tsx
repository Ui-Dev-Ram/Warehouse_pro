import React from 'react'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner';
import Image from 'next/image';
import aboutImg from '/public/aboutus/about.jpg'
import { PiGearBold } from "react-icons/pi";
import { MdOutlineAddHome } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
import { GrStatusCritical } from "react-icons/gr";
import { MdNetworkCell } from "react-icons/md";
import { TbWindowMinimize } from "react-icons/tb";
import { BiCollection } from "react-icons/bi";
import { LuGoal } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
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
                <h2 className='block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4'>
                  Business Strategy
                </h2>
                  <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
                  It is absolutely necessary for every business to have an effective business strategy. The business strategies of Warehouzez are specifically designed to achieve the best possible results and to gain a competitive edge in the industry. We strive to grow and diversify our business. Warehouzez' business strategies are meticulously planned and carefully designed with the aim of -
                  </p>
                  <div className="flex flex-wrap justify-center mt-5 mb-6">
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                            <PiGearBold className="m-auto text-[24px] relative top-[10px]" />
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                       Developing abilities and effectiveness.

                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                            <MdOutlineAddHome  className="m-auto text-[24px] relative top-[10px]" />
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center  font-medium'>
                       Facilitating a productive workplace.
                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                           <TiInputChecked className="m-auto text-[24px] relative top-[10px]" />
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                      Perceiving and reaping the benefits of opportunities.

                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                            <GrStatusCritical className="m-auto text-[24px] relative top-[10px]" />
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                      Obtaining and deploying crucial or critical resources.

                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                            <MdNetworkCell className="m-auto text-[24px] relative top-[10px]" />
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                      Gaining a competitive edge.
                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                          <TbWindowMinimize className="m-auto text-[24px] relative top-[10px]" />
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                      Minimizing the challenges and threats.
                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                            <BiCollection className="m-auto text-[24px] relative top-[10px]"/>
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                       Increasing customer satisfaction.
                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                            <LuGoal className="m-auto text-[24px] relative top-[10px]"/>
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                         Efforts and actions that are focused on achieving a goal.
                      </h3>
                      
                    </div>
                    <div className="m-2 mb-12 text-center w-44">
                      <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                            <GrTechnology className="m-auto text-[24px] relative top-[10px]"/>
                      </div>
                      <h3 className='mt-3 w-full m-auto text-center font-medium'>
                        Reaping the benefits of ultra - modern technology.
                      </h3>
                      
                    </div>
                </div>
              </div>
              <div className="flex relative flex-1 w-full mt-16 items-center justify-center">
                <Image src={aboutImg} alt="" className='relative w-3/4 m-auto' />
              </div>
          </div>
          <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
            It is absolutely necessary for every business to have an effective business strategy. The business strategies of Warehouzez are specifically designed to achieve the best possible results and to gain a competitive edge in the industry. We strive to grow and diversify our business. Warehouzez' business strategies are meticulously planned and carefully designed with the aim of -
          </p>

         <ul className="relative flex flex-col md:flex-row gap-2 my-8">
          <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
            <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
              <span className="size-7 flex justify-center items-center flex-shrink-0 bg-[#062a34] font-medium text-white rounded-full dark:bg-neutral-700 dark:text-white">
                <MdOutlineKeyboardDoubleArrowRight className='text-xl' />
              </span>
              <span className="ms-2 block grow md:grow-0 text-sm font-medium text-gray-800 dark:text-white">
                "What are we going to do?"
              </span>
            </div>
            <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
          </li>
         <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
            <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
              <span className="size-7 flex justify-center items-center flex-shrink-0 bg-[#062a34] font-medium text-white rounded-full dark:bg-neutral-700 dark:text-white">
                <MdOutlineKeyboardDoubleArrowRight className='text-xl' />
              </span>
              <span className="ms-2 block grow md:grow-0 text-sm font-medium text-gray-800 dark:text-white">
               "Who are we doing it for?"
              </span>
            </div>
            <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
          </li>
          <li className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
            <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
              <span className="size-7 flex justify-center items-center flex-shrink-0 bg-[#062a34] font-medium text-white rounded-full dark:bg-neutral-700 dark:text-white">
               <MdOutlineKeyboardDoubleArrowRight className='text-xl' />
              </span>
              <span className="ms-2 block grow md:grow-0 text-sm font-medium text-gray-800 dark:text-white">
               "How are we going to thrive?"
              </span>
            </div>
            <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
          </li>
        </ul>

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

export default page;