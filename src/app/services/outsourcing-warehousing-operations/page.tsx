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
                        Outsourcing Warehousing Operations
                    </h1>
                </div>
                <div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4">
                    <div className="col-span-2">
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        Outsourcing your warehouse and fulfilment needs can save you money on storage and distribution. Companies run a smooth business with the assistance of our team and systems. We provide benefits of structure, scalability and technological integration. However, this applies to all our primary services. Some individuals believe that perfection is certainly impossible to achieve. At Warehouzez, we endeavour to achieve excellence at every turn and meet the expectations of our customers.Businesses of all sizes can benefit from outsourcing warehouse and fulfilment services. Working with a dependable source gives you peace of mind while also assisting you in streamlining your operations.
                        </p>
                        
                        <Image alt="" src="/services/outsourcing-warehousing-operations.jpg" width={750} height={750} className='w-100' />
                        
                        <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5'>
                            Best-in-Class Rental Warehousing Services
                        </h2>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Warehouzez delivers end-to-end third party logistics services for almost every business! Our rentable warehouses in Delhi NCR, Bangalore, Mumbai etc have ultra- modern facilities for carrying out like storage of goods, distribution and transportation of goods and products, quality control, live updates and so much more.
                        </p>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Our warehouses in Mumbai, Kolkata, Gurgaon,, Delhi are ideally positioned within the accessible areas in order to support short as well as long term storage needs.
                        </p>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            We have warehouses in over 70 locations across the country. All our warehouses are well- established and equipped with the latest technology. With the help of our WMS you can get live updates regarding your Inventory.
                        </p>

                        <b>
                            Safety of your inventory is our prime duty!
                        </b>

                        <div className="relative">
                            <CoverdHandled />
                        </div> 

                        <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5'>
                            Key features of our Warehouse Outsourcing and Factory Operations
                        </h2>

                        <ul role="list" className="space-y-5 mt-5">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        We follow and execute SOPs (Standard Operating Procedures) at the premises of our customers.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        We also offer the latest technology as well as manpower on contract basis for carrying out warehouse and factory operations.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        We aim for fulfilment of supply chain requirements.
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Our dedicated team of experts and high end technology help customers meet all their requirements.
                                    </span>
                                </li>
                            </ul>
                    </div> 
                    
                    <div className='col-span-1'> 
                        <AllService />
                        <OnlineSupportForm />
                    </div>
                </div>

                <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5'>
                    Warehouzez For Your Business
                </h2>

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-8 text-justify mt-2 '>
                    Warehouzez is one of the major warehousing firm in India. We perform our services by carrying out the SOPs (Standard Operating Procedures) to ensure minimal operational errors. We are one of the leading logistics service providers in Delhi NCR, Bangalore, Mumbai, Kolkata and other places across India. Get the best benefits by outsourcing your warehousing operations to us.
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