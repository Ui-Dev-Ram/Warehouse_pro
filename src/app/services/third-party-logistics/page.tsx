'use client'

import React from 'react'
import Image from 'next/image'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import GetEnquiry from '@/components/services/GetEnquiry'
import ServiceAccord from '@/components/services/ServiceAccord'
import Blog from '@/components/home/blog/Blog'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import OnlineSupportForm from '@/components/services/OnlineSupportForm'
import AllService from '@/components/services/AllService';
import CoverdHandled from '@/components/services/CoveredHandled'


const page = () => {

  return (
    <div>
        <InnerHeroBanner />
        <div className="container m-auto">
            <div className="lg:m-5">
                <div className='mb-5'>
                    <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                        Third Party Logistics
                    </h1>
                    </div>
                <div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4">
                    <div className="col-span-2">
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mb-5'>
                            Warehouzez The Digital Supply Chain is indeed the best third party logistics firm in the industry. We offer multiple logistics services for a wide range of businesses. We totally understand that third party logistics play a crucial role in efficient functioning of any business. Our Warehousing and Logistics solutions are indeed the right choice for all the corporations looking out to administer their operations through live data access as per the market needs.
                        </p>
                        
                          <Image alt="" src="/third-party-logistics/third-party-logistics.jpg" width={750} height={750} />
                        
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Being one of the top- notch third party logistics service providers, we offer multiple 3PL logistics services like warehouse management, inventory management, shipping and order fulfillment. Additionally, we have our well- established warehouses in over 70 locations across the country. All our experts at Warehouzez specialize in various aspects of the supply chain management and we offer a wide range of logistics services. Most logistics services fit under one of the following categories:
                        </p>

                        <ul role="list" className="space-y-5">
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-sm lg:text-md font-medium leading-tight text-gray-900 dark:text-white">
                                 Procurement of Goods - <span className='font-normal'>Procurement is the process of ordering and receiving products from other parts of the supply chain.</span>
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-sm lg:text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Receipt of Goods and Order Fulfillment - <span className='font-normal'>Receiving orders from consumers, picking and packing them, and shipping them are all examples of order fulfillment.</span>
                                </span>
                                    
                            </li>
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-sm lg:text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Storage of Goods - <span className='font-normal'> Keeping items in warehouses and other comparable sites for a short period of time.</span>
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-sm lg:text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Transportation -  <span className='font-normal'>Administration, compilation and movement of products are all aspects of transportation.</span>
                                </span> 
                            </li>
                        </ul>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            By providing tech-enabled logistics solutions, we ensure efficient management of the supply chain. We expertise in services like storage, distribution, transportation and order fulfillment. Our tech- leading solutions consolidate traditional logistics with the management of supply chain processes.
                        </p>
                        
                        <CoverdHandled />

                        <h3 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10">Key offerings and features</h3>
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Here's a list of our key features and offerings under third party Logistics Service -
                        </p>

                        <div className="flex flex-col lg:flex-row mb-5">
                            <div className="flex-1">
                                <ul role="list" className="space-y-5">
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Inventory Management
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Planning, arranging and managing the transportation needs.

                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Ensuring optimized routes.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Providing ultra-tech solutions.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Delivery Management and ensuring timely delivery.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <ul role="list" className="space-y-5 mt-6 lg:mt-0">
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                         Live updates regarding the shipment.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                            Warehousing Services.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Warehouse Management.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                           Order Fulfilment.
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                            Supply Chain Management.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'">
                          Warehouzez The Digital Supply Chain is an all inclusive store for all the third party logistics services from supply chain management, warehousing services, inventory management to faster delivery. We offer it all! We remain focused on our purpose of offering clients with 'Premium quality services'. Satisfaction of our customers is our prime goal.
                        </p>
                    </div> 
                    <div className='col-span-1'> 
                        <AllService />
                        <OnlineSupportForm />
                    </div>
                </div>
                <video className="h-60 w-full rounded-lg mt-8" controls>
                    <source src="https://youtu.be/eZlqNb-eqe8?si=jeiDtEKA5yLtBGS0" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
              
            </div>
        </div>

          <GetEnquiry />
          <ServiceAccord />
          <Blog />
          <NetworkofWarehouzez />

    </div>
  )
}

export default page;