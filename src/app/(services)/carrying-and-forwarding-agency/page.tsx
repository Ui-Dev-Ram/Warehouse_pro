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
                        CFA / C&F Agent Services
                    </h1>
                </div>
                <div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4">
                    <div className="col-span-2">
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Warehouzez is indeed a top - grade Carrying and Forwarding Solutions firm in the country. We provide several kinds of Carrying and Forwarding solutions to the customers. We offer CFA services from beginning to end, ensuring the overall consistency and excellence all through the logistics process. With the help of our trained staff and widespread network of warehouses, we maintain exceptional service standards. We provide a variety of services as C&F Agents, like managing the receipt of stocks, processing the orders and payments, and related services.
                        </p>
                        
                        <Image alt="" src="/services/carrying-and-forwarding-agency.jpg" width={750} height={750} className='w-100' />
                        
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            We carefully work to improve the distribution flow. With 70 locations and hundreds of agents countrywide, we are top logistics company in India. For the integrated logistics requirements of our customers, we have built a system to regulate Supply Chain Management.
                        </p>

                        <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                            Major Offerings
                        </h2>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Enlisted Below are the Key Services We Offer as Carrying and Forwarding Agents
                        </p>

                        <ul role="list" className="flex flex-wrap justify-between space-y-5 items-baseline mb-6 mt-5 lg:mt-0">
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Pick- up and delivery services are available 24 hours a day, seven days a week.
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                     Customized Solutions.
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Reverse Logistics
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    In- plant operations/ In- store installation
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Faster Delivery
                                </span> 
                                </p>
                            </li>
                        </ul>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Being one of the major Warehousing and Logistics service providers, we serve industries such as - Retail, Entertainment, Broadcast, Telecom, Aerospace, Lifestyle and so on. At Warehouzez, we assist customers with appropriate storage of many types of commercial items. We make sure that goods are safe and secure in every way. In addition to that, we help our clients comply with the licencing requirements of the state and nation legislation.
                        </p>


                        <div className="relative">
                            <CoverdHandled />
                        </div> 

                        <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                            Warehousing Services
                        </h2>

                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Our Prominent Warehousing Services Are
                        </p>

                        <ul role="list" className="flex flex-wrap justify-between space-y-5 items-baseline mb-6 mt-5 lg:mt-0">
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Warehousing and Storage Services (both General and Bonded)
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    24/7 Control of Inventory
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Pick and Pack Service
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Ultra- modern Warehousing Software
                                </span> 
                                </p>
                            </li>

                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Customized Solutions like Cold- Storage
                                </span> 
                                </p>
                            </li>
                            
                            <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Financial Settlement
                                </span> 
                                </p>
                            </li>  

                             <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                                <p className='flex items-center justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Packaging enhancements and design ideas
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

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    Packaging enhancements and design ideas With our ultra- modern software, we can take care of your warehousing and transportation requirements, thereby allowing you to focus on your main business. We provide our customers with a variety of solutions in order to ensure supply chain efficiency. We make sure that your business stays competitive no matter what. Warehouzez The Digital Supply Chain offers full suite of warehousing and logistics services.
                </p>
               <p className="className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mb-5">
                    Transform and Grow your business now with the Global SCM technology of Warehouzez!
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