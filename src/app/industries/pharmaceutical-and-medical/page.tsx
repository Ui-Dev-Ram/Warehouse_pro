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
                        Pharmaceutical and Medical Warehousing
                    </h1>
                </div>
                <div className="grid grip-rows-2 lg:grid-cols-3 items-start lg:gap-4 mb-8">
                    <div className="col-span-2">
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            It is true that a well- maintained warehouse storage is absolutely essential for Pharmaceutical and Medical industry. In present times, the Pharmaceutical and Medical sector is growing tremendously, especially after the pandemic. The aforementioned industry is of great significance in cities like Mumbai, Bangalore and Chennai. Nowadays people have started investing in healthcare and herbal products to improve their overall lifestyle. Keeping this in mind, Warehouzez takes utmost take of people who need pharmaceutical supplies and herbal remedies. We assure sufficient sanitation and safety, as well as maintaining a constant temperature at our warehouses eliminating product shortages, and timely delivering the medical products. We also comply with the regulatory standards of national markets.
                        </p>
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            We understand that supply chain management of medical industry is different and complicated. But we provide a vast assortment of services to meet all the challenges. At Warehouzez, we provide finest logistics and warehouse facilities for health care and pharma industry. Our warehouses are ideally located in over 70 locations in the country. We offer personalized solutions as per the requirements of your business, thereby helping you stay competitive. It is our primary aim to minimize the expenses of medical without compromising on the quality. In addition to this, we also offer temperature specific storage and on demand warehousing services.
                        </p>
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Warehouzez is one of the leading supply chain service providers in the industry. We specialize in tactical planning and management facilities.
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
                        <b className='block text-base font-medium'>
                        Here's a List of Our Logistics Solutions
                        </b> 
                    </h2>

                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        Enlisted Below are Some of Our Logistics Solutions for Pharma and Healthcare Products
                    </p>

                    <ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Keeping up with the ever- changing demands in the industry.
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Temperature specific storage and shipping facilities.
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Advanced technology processes.
                            </span> 
                            </p>
                        </li>

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
                                Operational Improvements.
                            </span> 
                            </p>
                        </li>
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Product tracking systems.
                            </span> 
                            </p>
                        </li>
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Integrated freight across manufacturers.
                            </span> 
                            </p>
                        </li>
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Supply Chain Management.
                            </span> 
                            </p>
                        </li>
                    </ul>

                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        For the Pharmaceutical Industry, We Have Specialized and Customized Cfa, Warehousing, and Logistics Solutions
                    </p>

                    <ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Drugs that can save your life
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Critical Medical Equipment
                                </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Laboratory Specimens
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Pharmaceuticals
                            </span> 
                            </p>
                        </li>

                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Laser Diode Equipment
                            </span> 
                            </p>
                        </li>
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Medical Equipments
                            </span> 
                            </p>
                        </li>
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Records & Reports on Health
                            </span> 
                            </p>
                        </li>
                        <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                            <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Spare Parts and other related items
                            </span> 
                            </p>
                        </li>
                    </ul>

                <VideoSection />
            
                <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                    With several years of industry experience in dealing with the best automakers and tier-one suppliers from all over the world, Warehouzez can help you
                </h2>
                
                <ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
                    <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                        <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Ameliorate the product development cycle for fruitful launch.
                            </span> 
                        </p>
                    </li>

                    <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                        <p className='flex place-items-starts justify-start mb-2'>
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Become one of the largest -growing industries of the world.
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
                            Transportation of raw material.
                        </span>  
                        </p>
                    </li>

                    <li className="flex flex-col space-x-3 w-full lg:w-[350px]">
                        <p className='flex place-items-starts justify-start mb-2'>
                        <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Finest logistics solutions to cut down your expenses and meet the challenges.
                        </span>  
                        </p>
                    </li>
                </ul>

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    Warehouzez The Digital Supply Chain offers the best-in- class warehousing and logistics services for a wide range of products like Pharma, Herbal and Healthcare products.
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