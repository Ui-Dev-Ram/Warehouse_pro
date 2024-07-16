import Blog from '@/components/home/blog/Blog'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import AllService from '@/components/services/AllService'
import CoverdHandled from '@/components/services/CoveredHandled'
import GetEnquiry from '@/components/services/GetEnquiry'
import OnlineSupportForm from '@/components/services/OnlineSupportForm'
import ServiceAccord from '@/components/services/ServiceAccord'
import VideoSection from '@/components/services/VideoSection'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
         <InnerHeroBanner />
         <div className="container m-auto">
            <div className="lg:m-5">
                <div className='mb-5'>
                    <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                        International Freight Forwarding
                    </h1>
                </div>
                <div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4">
                    <div className="col-span-2">
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            At Warehouzez, the essence of our business is to ensure the fulfillment of your business' logistics requirements. We totally understand how crucial freight forwarding is in the supply chain management. The core of freight forwarding is to collect the cargo from the seller or manufacturer and deliver it to the buyer. We ensure hassle free movement of your cargo across the cities or continents.
                        </p>
                        
                        <Image alt="" src="/services/international-freight-forwarding.jpg" width={750} height={750} className='w-100' />
                        
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            We provide the best warehouse services to our clients. We manage the movement of commodities to from their source destination to the end destination. Our team is well- versed in various modes of transportation ( like road, air, sea and so on). We make it a point to provide our clients with cost- efficient and worthwile cargo shipping solutions based on their needs. Furthermore, we also offer storage facilities for every business out there. Warehouzez, The Digital Supply Chain has its warehouses in over 70 locations across the country. Our warehouses are well- established and equipped with the latest technology. We plan and organize the "forwarding" of the goods/ freight as per the demands of our clients. To reduce the costs of our customers, we even negotiate the freight rates to offer cost- effective shipping.
                        </p>

                        <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                            Freight Forwarding Services
                        </h2>
                        <small>
                        Enlisted Below are the Services We Offer to Our Clients -
                        </small>

                        <ul role="list" className="flex flex-wrap gap-x-6 space-y-5 items-baseline mb-6 mt-5 lg:mt-0"> 
                                <li className="flex flex-col space-x-3 w-full lg:w-[380px]">
                                    <p className='flex items-center justify-start  mb-2'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Making arrangements for the storage of the cargo.
                                        </span>
                                    </p>
                                </li>
                                <li className="flex flex-col space-x-3 w-full lg:w-[380px]">
                                    <p className='flex items-center justify-start mb-2'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Managing the forwarding or distribution of the cargo.
                                        </span>
                                    </p>
                                </li>
                                <li className="flex flex-col space-x-3 w-full lg:w-[380px]">
                                    <p className='flex items-center justify-start mb-2'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Negotiating the freight rates.
                                        </span> 
                                    </p>
                                </li>
                                <li className="flex flex-col space-x-3 w-full lg:w-[380px]">
                                    <p className='flex items-center justify-start  mb-2'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Processing all the required documents for shipping.
                                        </span> 
                                    </p>
                                </li>
                                <li className="flex flex-col space-x-3 w-full lg:w-[380px]">
                                    <p className='flex items-center justify-start  mb-2'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Arranging for the transportation (from the source destination to the end destination).
                                        </span> 
                                    </p>
                                </li>
                                <li className="flex flex-col space-x-3 w-full lg:w-[380px]">
                                    <p className='flex items-center justify-start  mb-2'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Ensuring hassle- free over the border cargo movement.
                                        </span> 
                                    </p>
                                </li>
                                <li className="flex flex-col space-x-3 w-full lg:w-[380px]">
                                    <p className='flex items-center justify-start  mb-2'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Ensuring the overall safety of freight.
                                        </span> 
                                    </p>
                                </li>
                            </ul>
                        
                        <div className="relative">
                            <CoverdHandled />
                        </div> 

                        <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                           Key Offerings
                        </h2>
                        <p className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                           Here's A List Of Our Prominent Features Under This Service Offering -
                        </p>
                        <ul role="list" className="flex flex-wrap justify-between space-y-5 items-baseline mb-6 mt-5 lg:mt-0">
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Latest technology to trace and track (Air, Ocean and so on).
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Regular Updates regarding the shipment status.
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Arranging for Reverse Door to Door Transportation.
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Specialized reports
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Testing and Reporting on demand
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Managing Events
                                </span> 
                                </p>
                            </li>
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Authentic and accurate information
                                </span> 
                                </p>
                            </li>
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Green Counter
                                </span> 
                                </p>
                            </li>
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Ensuring safety of goods
                                </span> 
                                </p>
                            </li>
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Cost- effective transfer of goods
                                </span> 
                                </p>
                            </li>
                        </ul>
                    </div> 
                    
                    <div className='col-span-1'> 
                        <AllService />
                        <OnlineSupportForm />
                    </div>
                </div>
                
               <p className="className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mb-5">
                    At Warehouzez, we provide the best freight forwarding services to our customers. At all operational levels, our customers have faith that their Ocean/Air Freight is in the safe hands. We are one stop- destination for almost all your shipping needs.
               </p>
                <VideoSection />

                <p className="text-3xl text-center font-bold my-12 [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                    Your Business Is Indeed Important To Us!
                </p>
            
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