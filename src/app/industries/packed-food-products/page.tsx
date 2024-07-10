import React from 'react'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import OnlineSupportForm from '@/components/services/OnlineSupportForm'
import Image from 'next/image'
import VideoSection from '@/components/services/VideoSection'
import LetCheckoutOurIndustry from '@/components/home/Let-Checkout-Our-Industry/LetCheckoutOurIndustry'
import GetEnquiry from '@/components/services/GetEnquiry'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import Blog from '@/components/home/blog/Blog'
import { RiGlobalLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";
import IndustriesAccord from '@/components/industries/IndustriesAccord'

const page = () => {
  return (
    <div>
        <InnerHeroBanner />
        <div className="container m-auto">
            <div className="lg:m-5">
                <div className='mb-5'>
                    <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                        Packed Food Products Warehousing
                    </h1>
                </div>
                <div className="grid grip-rows-2 lg:grid-cols-3 items-start lg:gap-4 mb-8">
                    <div className="col-span-2">
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            There is no denying the fact that the supply chain of a business can either make it or break it. In this regard, efficient warehouse management is an essential aspect of the Packed Foods products Industry. This industry happens to be the favorite of people. In recent times, Packed Foods products industry is growing tremendously. It is among the largest growing sectors of the world. The Food and Beverages industry is of enormous significance in Mumbai ( Maharashtra). With this growth potential arises a challenge for effective logistics and warehouse management. Advanced warehousing systems can help businesses stay competitive.
                        </p>
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            With Warehouzez Carrying and Forwarding services (CFA) and strategically positioned warehouse sites, there is a growth potential in all the spheres of the Packed Foods products Industry.
                        </p>
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            At Warehouzez, our experts have developed a resilient Contract Logistics model to meet the challenges that the Packed Foods products industry faces on a daily basis, ranging from changing commodity prices to increased focus on hygiene. We expertize in food warehousing and logistics.Warehouzez is a defined-benefit supply chain service provider firm that specializes in back- to- back tactical planning and management facilities for the Food and Beverage Industry. We have our well- maintained warehouses in over 70 locations across the country. Our specialized warehouses for Packed Foods products effectively manage and arrange the storage and transportation of perishable items. Our high- tech and innovative solutions are ideal for all the firms aiming to overcome the obstacles related to warehousing for food items. Keeping up with the food trends is not a challenge anymore with our best- in- class warehouse and logistics services.
                        </p>
                        
                        <div className='grid sm:grid-cols-2 md:grid-cols-2 mt-8 gap-10'>
                            <div className="flex gap-4 items-start"> 
                                <div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
                                    <RiGlobalLine className='text-white text-2xl' /> 
                                </div> 
                                <div> 
                                    <h3 className="font-semibold text-lg">
                                        Global Supply Chain Solutions
                                    </h3>  
                                    <p className="text-slate-500 mt-2 leading-relaxed">
                                        With Warehouzez, you get the state-of-the-art, customized and unique logistics solutions.
                                    </p> 
                                </div> 
                            </div>
                            
                            <div className="flex gap-4 items-start"> 
                                <div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
                                    <AiOutlineSafetyCertificate className='text-white text-2xl' />
                                </div> 
                                <div> 
                                    <h3 className="font-semibold text-lg">
                                        Safe and Reliability Warehousing
                                    </h3>  
                                    <p className="text-slate-500 mt-2 leading-relaxed">
                                        We operate on the values of Safety, Reliability and Fairness.
                                    </p> 
                                </div> 
                            </div>

                            <div className="flex gap-4 items-start"> 
                                <div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
                                    <FaShippingFast className='text-white text-2xl' />
                                </div> 
                                <div> 
                                    <h3 className="font-semibold text-lg">
                                        Fast Transportation Service
                                    </h3>  
                                    <p className="text-slate-500 mt-2 leading-relaxed">
                                        We provide integrated and best-in-class transportation services.
                                    </p> 
                                </div> 
                            </div>

                            <div className="flex gap-4 items-start"> 
                                <div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
                                    <MdOutlineManageSearch className='text-white text-2xl' />
                                </div> 
                                <div> 
                                    <h3 className="font-semibold text-lg">
                                        Robust Inventory Management Software
                                    </h3>  
                                    <p className="text-slate-500 mt-2 leading-relaxed">
                                        In-house developed WMS software for live inventory tracking
                                    </p> 
                                </div> 
                            </div>
                        </div>
                    </div> 
                    
                    <div className='col-span-1'> 
                        <Image alt="" src="/industries/pages/fashion-and-lifestyle.jpg" width={500} height={500} className='w-100 text-center m-auto' />
                        <OnlineSupportForm />
                    </div>
                </div>
                    <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                        Our Prominent Features and Offerings
                        <b className='block text-base font-medium'>
                        Here's a List of Our Logistics Solutions
                        </b> 
                    </h2>

                        <ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex place-items-starts justify-start mb-2'>
                                    <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Inventory Management.
                                    </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex place-items-starts justify-start mb-2'>
                                    <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Properly handling the perishable items.
                                    </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Understanding the temperature restrictions and providing accurate temperature for storage.
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Enhanced traceability.
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Improved safety.
                                </span> 
                                </p>
                            </li>
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Reverse Logistics
                                </span> 
                                </p>
                            </li>
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Transportation and distribution services.
                                </span> 
                                </p>
                            </li>
                        </ul>
                <VideoSection />
            
                <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                    With great competence and skills, our experts at Warehouzez can help you with
                </h2>
                
                <ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
                    <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                        <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Advanced the product development cycle for a prosperous launch.
                            </span> 
                        </p>
                    </li>

                    <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                        <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Making up your space into the list of the leading industries of the world.
                            </span> 
                        </p>
                    </li>

                    <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                        <p className='flex place-items-starts justify-start mb-2'>
                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Cost- effective reverse logistics.
                        </span> 
                        </p>
                    </li>

                    <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                        <p className='flex place-items-starts justify-start mb-2'>
                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Personalized supply chain solutions.
                        </span> 
                        </p>
                    </li>
                </ul>

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    At Warehouzez, we offer a full suite of supply chain solutions for Packed Foods Products Industry. We remain focused on our goal of thriving in the competitive business scenario by offering the best- in- class logistics and warehouse facilities.
                </p>
                
                <p className="text-3xl text-center font-bold my-12 [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                    Your Business Is Indeed Important To Us!
                </p>    
            </div>
        </div>
        <LetCheckoutOurIndustry />
        <GetEnquiry />
        <IndustriesAccord />
        <Blog />
        <NetworkofWarehouzez />
    </div>
  )
}

export default page;