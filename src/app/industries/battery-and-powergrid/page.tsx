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
                        Battery and Powergrid Warehousing
                    </h1>
                </div>
                <div className="grid grip-rows-2 lg:grid-cols-3 items-start lg:gap-4 mb-8">
                    <div className="col-span-2">
                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        Proper storage of battery is indeed important for the future of the power grid. Undeniably, Warehouses play a crucial role in conservation, storage and distribution of power grid and battery. In recent times, the demand for electricity is extremely high. The Power sector in Gurgaon and Kolkata is expected to see a considerable growth in the near future. Storing energy can provide great benefits like managing the load and ensuring uninterruptible power supply.
                    </p>
                      
                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        Since power grid, solar, and wind energy sectors are growing tremendously, we at Warehouzez are perfectly equipped to meet the growing requirement for warehouse, open yards, on-site installation of assets & replacement of parts, distribution and transportation capacity. Warehouzez provides the best Reverse Logistics
                    </p>

                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        services and strategically located warehousing sites as the aforementioned business demands the transportation segment's special capacity to move odd dimensions, hefty to extremely small high-end components. At Warehouzez, we totally understand the growth potential of this industry as well as the requirements of this business. It is a well- known fact that a consistent electricity supply and smart grids are the leading edge infrastructure that promotes efficient working of industries and businesses. Our team of experts assist the installation of towers and panels on the sites to ensure uninterrupted power supply.
                    </p>

                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        At Warehouzez, we are well- versed with modern supply chains, and we have modernized our facilities. Being one of India's top- notch logistics solutions providers, we specialize in Powergrid and battery Warehousing. We provide project-based warehousing, transportation, and return management services. We have our ideally positioned warehouses in over 70 locations throughout the country.
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
                        Key Features and Offerings
                    </h2>

                    <h3 className='text-base font-bold'>
                        Here's a List of Our Logistics Solutions for the Battery and Powergrid Industry
                    </h3>
                    <ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Battery and Powergrid Storage Management.
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Establishing the renewable energy centers.
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Renewable generation forecasts
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Tech- enabled tools.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Installation of towers and panels on site.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Replacement of parts.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Transportation services.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Heavy lift power grid solutions.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Ultra- tech logistics services.
                            </span> 
                            </p>
                        </li>
                        
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Effective Supply Chain Management.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Investments and other associated services.
                            </span> 
                            </p>
                        </li>
                    </ul>

                    <h3 className='text-base font-bold'>
                        With far-reaching industry experience and dealing with premier automakers and tier-one suppliers from all over the world, Warehouzez can assist you with
                    </h3>
                    <ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Best-in-class product development cycle for victorious launch.
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Becoming one of the world's leading industries.
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Affordable reverse logistics.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Transportation and distribution.
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Highly specialized warehouse and logistics solutions to cut down your expenses.
                            </span> 
                            </p>
                        </li>
                    </ul>               

                <VideoSection />
            
               
                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    At Warehouzez, it is our primary aim to provide the best- in- class logistics and warehousing services for the Battery and Powergrid industry. We offer personalized and unique solutions that promote efficient supply chain management.
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