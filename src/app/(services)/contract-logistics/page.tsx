import Blog from '@/components/home/blog/Blog'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import AllService from '@/components/services/AllService'
import GetEnquiry from '@/components/services/GetEnquiry'
import OnlineSupportForm from '@/components/services/OnlineSupportForm'
import ServiceAccord from '@/components/services/ServiceAccord'
import VideoSection from '@/components/services/VideoSection'
import React from 'react'
import Image from 'next/image'
import CoverdHandled from '@/components/services/CoveredHandled'


const page = () => {
  return (
    <div>
        <InnerHeroBanner />
        <div className="container m-auto">
            <div className="lg:m-5">
                <div className='mb-5'>
                    <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                     Contract Logistics
                    </h1>
                </div>
                <div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4">
                    <div className="col-span-2">
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Warehouzez the Digital Supply Chain comprehends and concentrates on all the elements of a particular project. We strive to provide unique solutions in order to fill the gap between actual requirements and the offered services. Warehouzez offers multiple logistics services for a wide range of businesses. 3PL plays a significant role in functioning of any business.
                        </p>
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Our Contract Logistics is indeed the right choice for all the firms looking out for managing their operations through live data access as per the market needs. We provide Warehousing Solutions for end to end activities involving sorting, tagging, labelling, packing, strapping and other related services.
                        </p>
                        
                        <Image alt="" src="/services/contractLogistics.jpg" width={750} height={750} className='w-100' />
                        
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Our high-tech solutions integrate traditional logistics with the management of supply chain processes; it is here where the 4PL (Fourth Party Logistics) comes into the picture. In 4PL, a fourth stakeholder is responsible for creating and managing the value chain. We assist companies in complying with the regulations of legislation. We indeed offer the best storing and shipping services to our customers. In addition to that, we also provide live shipment tracking service.
                        </p>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            We understand that value Chain has a direct impact on a corporation's success. Therefore, to ensure proper management of the value chain, Contract Logistics is designed. This protocol covers a wide range of topics, including the following:
                        </p>

                        <ul role="list" className="flex flex-wrap space-y-5 items-baseline"> 
                            <li className="flex space-x-3 w-[260px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                  Production Line 
                                </span>
                            </li>
                            <li className="flex space-x-3 w-[260px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Site Warehousing
                                </span>
                                    
                            </li>
                            <li className="flex space-x-3 w-[260px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Distribution Plan
                                </span>
                            </li>
                            <li className="flex space-x-3 w-[260px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Inventory Management
                                </span> 
                            </li>
                            <li className="flex space-x-3 w-[260px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                     Final Distribution
                                </span> 
                            </li>
                        </ul>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                        Warehouzez is indeed a top logistics company in India in the industry. We expertize in several aspects of supply chain (from production to delivery process). We make sure that the inventory is delivered to its end destination from its source destination.
                        </p>

                        <div className="relative">
                            <CoverdHandled />
                        </div>

                        <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                            Key Offerings and Features
                        </h2>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Here's a list of our key features and offerings under contract logistics services
                        </p>

                        <ul role="list" className="flex flex-wrap space-y-5 items-baseline"> 
                            <li className="flex space-x-3 lg:w-[400px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Plan, arrange and manage the transportation needs.
                                </span>
                            </li>
                            <li className="flex space-x-3 lg:w-[400px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Order and Inventory Management.
                                </span>
                                    
                            </li>
                            <li className="flex space-x-3 lg:w-[400px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Ensure optimized routes.
                                </span>
                            </li>
                            <li className="flex space-x-3 lg:w-[400px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                     Order Fulfilment.
                                </span> 
                            </li>
                            <li className="flex space-x-3 lg:w-[400px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Delivery Management and ensuring timely delivery.
                                </span> 
                            </li>
                            <li className="flex space-x-3 lg:w-[400px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Supply Chain Management.
                                </span> 
                            </li>
                            <li className="flex space-x-3 lg:w-[400px]">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                     Warehousing Services.
                                </span> 
                            </li>
                        </ul>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Warehouzez is the one stop destination for all the third party logistics services from supply chain management, warehousing services, inventory management to faster delivery. We provide it all! We remain focused on our aim of providing clients with 'High quality services.
                        </p>
                                    
                    </div> 
                    
                    <div className='col-span-1'> 
                        <AllService />
                        <OnlineSupportForm />
                    </div>
                </div>
                <p className="text-3xl text-center font-bold my-12 [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                    Your Business Is Indeed Important To Us!
                </p>
            
            </div>
        </div>
        <VideoSection />
        <GetEnquiry />
        <ServiceAccord />
        <Blog />
        <NetworkofWarehouzez />
    </div>
  )
}

export default page