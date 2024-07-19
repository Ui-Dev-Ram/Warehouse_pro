import React from 'react'
import Image from 'next/image'
import { PiWarehouse } from "react-icons/pi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GoVerified } from "react-icons/go";
import { RiPriceTag2Line } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import FeaturesServices from '@/components/ourPresence/FeaturesServices';
import OurKeyFeaturesOfferings from '@/components/ourPresence/OurKeyFeaturesOfferings';
import WarehouseListed from '@/components/home/our-listed-warehouses/WarehouseListed';
import OurPresenceFreq from '@/components/ourPresence/OurPresenceFreq';
import Blog from '@/components/home/blog/Blog';
import GetEnquiry from '@/components/services/GetEnquiry';
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez';
import MapLocation from '@/components/ourPresence/MapLocation';

{/** warehouse location link paste here **/}
const WarehouseLocation = "https://goo.gl/maps/i67WwnTgWPsN94Gf7";


const page = () => {
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-bangalore
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Bangalore</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                      Warehouzez - All Inclusive Warehousing and Logistics Partner in Bangalore! <br />
                      Undeniably, the demand for warehousing services in Bangalore is increasing rapidly.<br />
                      Bangalore is deemed as one of the greatest consumer marketplace in the country.
                      
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src="/our-presence/bangalore.png" className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            This is because it is a hub for several foreign e-commerce giants like Amazon, Walmart, Flipkart, Target, and so much more. Bangalore is host to various I.T. related corporations too. Since the past couple of decades, Bangalore's e-commerce development has driven up the demand for warehouse spaces. Warehouse in Bangalore could be the answer for all of the companies looking for infrastructure and domestic place to store their inventory safely. However, finding the proper organisation that can provide excellent warehouse and distribution facilities as well as provide warehouse for rent in Bangalore.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Top-Rated Warehousing Company
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Furthermore, it is necessary to note that the demand for warehouse space in various metro cities has particularly increased after the lockdown. Since the time of the pandemic, demand for warehousing companies in Bangalore has grown tremendously. Conglomerates and entrepreneurs search for warehouses for storage so that storage and distribution of stocks can take place easily. Warehouzez is indeed the best warehousing and logistics services provider in the country. We have a substantial understanding of how to tackle all types of issues that arise in various supply chain management activities.
          </p>
        </div>     
      </div> 
      
      <section className="bg-white py-10 md:py-16 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end">
                <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src="/our-presence/feature-img.png" alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-6 z-50'>
                            <MapLocation location={WarehouseLocation} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                          Premium Storage Services in<br />
                          Bangalore
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                          Warehouzez offers remarkable warehouse storage facilities in Bangalore and all the other metropolitan cities. If you are looking for a warehouse for storage in Bangalore, then we have got you covered. All our warehouses are equipped with the latest technology and machinery. In addition to that, we also provide warehousing services for the apparel industry and many other industries too. For perishable items, we have special provisions like cold and temperature-controlled storage solutions. and we can suggest you the best methods for managing your inventory and optimising your supply chain.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                  63K Sqft
                                </h3>
                                <p className="font-light text-gray-400 text-md md:text-lg text-center">
                                  Total Space
                                </p>
                            </div>

                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-red bg-opacity-5 rounded-xl m-auto mb-4">
                                  <TbBuildingWarehouse className="feather feather-award text-red text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                  13K Sqft
                                </h3>
                                <p className="font-light text-gray-400 text-md md:text-lg text-center">
                                  Space Available
                                </p>
                            </div>

                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-emerald-600 bg-opacity-5 rounded-xl m-auto mb-4">
                                  <GoVerified className="feather feather-award text-emerald-950 text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                  Verified
                                </h3>
                                <p className="font-light text-gray-400 text-md md:text-lg text-center">
                                  Professional
                                </p>
                            </div>

                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-violet-600 bg-opacity-5 rounded-xl m-auto mb-4">
                                  <RiPriceTag2Line className="feather feather-award text-violet-950 text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                   Affordable 
                                </h3>
                                <p className="font-light text-gray-400 text-md md:text-lg text-center">
                                   Price
                                </p>
                            </div>

                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-pink-600 bg-opacity-5 rounded-xl m-auto mb-4">
                                  <FaComputer className="feather feather-award text-pink-950 text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    WMS 
                                </h3>
                                <p className="font-light text-gray-400 text-md md:text-lg text-center">
                                    Software
                                </p>
                            </div>

                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-fuchsia-600 bg-opacity-5 rounded-xl m-auto mb-4">
                                  <FaRegStar className="feather feather-award text-fuchsia-950 text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                  Rated
                                </h3>
                                <p className="font-light text-gray-400 text-md md:text-lg text-center">
                                  4.1 Out of 5
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
      </section>

      <div className="container max-w-screen-xl mx-auto mt-20">
        <div className="lg:m-5">
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Warehousing Company in Bangalore at Cost-effective Price?
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            If you are looking for a warehouse in Bangalore, then you have landed at the right place! We have warehouses located at the best locations to provide easy access to storage, manufacturing, and shipping facilities. Warehouzez, being one of the leading warehousing companies, offers the best warehousing services in Bangalore. We intend to enhance warehouse productivity so as to decrease the operational costs of corporations.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            We provide prominent e-commerce fulfillment services to our clients in order to maximise their profits and promote efficient management of the supply chain.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Some benefits of using our services include-Timely shipping as well as delivery of orders, improved workflow, short term and long-term storage facilities, safety of goods, inventory control.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez offers best-in-class, cost-effective, flexible and scalable storage facilities so that you can store your inventory in the safest manner. So, if you want to scale your business with exceptional warehouse services in Bangalore, then look no further than Warehouzez!
          </p>

          <div className='relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6 overflow-hidden mb-12'>
            <div className='col-span-12 lg:col-span-5 space-y-6 mt-20'>
                <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                  Rapidly Growing <br />
                  3PL Network
                </h2>
                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                  With its rapidly growing 3PL Network, Warehouzez incorporates entire tier one and tier two cities in the country. Even though third party logistics is a complicated process, we try to make it simpler for our clients. We offer a wide range of E-Commerce fulfillment services like -
                </p>

                <ul className='space-y-4 sm:space-y-2'>
                  <li>
                    <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                        <FaCircleCheck />
                      </span>
                      <span>
                        Warehousing facilities
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                        <FaCircleCheck />
                      </span>
                      <span>
                        Processing of orders
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                        <FaCircleCheck />
                      </span>
                      <span>
                        Management of Inventory
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                        <FaCircleCheck />
                      </span>
                      <span>
                        Receiving and Shipping the orders
                      </span>
                    </div>
                  </li>

                  <li>
                    <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                        <FaCircleCheck />
                      </span>
                      <span>
                        Returns
                      </span>
                    </div>
                  </li>
                </ul>

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                  Warehouzez the Digital supply chain is one of the chief providers of warehouse in Bangalore. We offer logistics solutions to businesses with different needs.
                </p>
            </div>

            <div className='col-span-12 lg:col-span-7 flex items-center'>
              <Image src="/our-presence/graph.jpg" className='f-3/4 m-auto' width={500} height={500} alt="Image" />
            </div>
          </div>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Best warehouse management system (WMS)
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Our warehouse management system (WMS) is a software programme that controls supply chain fulfilment activities and provides visibility into a company's complete inventory. Adopting a WMS software for your company can be quite helpful because it can integrate with accounting, order fulfilment, and inventory management to produce a more efficient workflow. Here are the advantages of our WMS software in a warehouse in Bangalore.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Primary Benefits
          </h2>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4'>
              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Reduced Operating Costs
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                  Tracking Materials
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Optimized Space
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Customer Satisfaction
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Visibility of Inventory
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Scalability and flexibility of supply chain
                  </span>
                </div>
              </li>
          </ul>


          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Transportation Services
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Transportation service is a must for every business! We try to offer the best transportation services in order to ensure timely pickup and delivery of goods. We always make sure that the delivery process is completed within the said frame of time.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Assurance of Proper Safety
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            We know how important it is to safely handle the goods and materials in the warehouse in bangalore. We, at Warehouzez ensure proper handling of materials and safety of goods.We follow the best loading and unloading practices to ensure the safety of your inventory. Warehouzez is a warehousing services provider that stores your inventory in the safest possible manner. All our workers have thorough knowledge of the safety protocols. Furthermore, our warehouses have well-operational CCTV cameras to prevent thefts. The security and safety of your inventory is a top priority for us!
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Why Choose Us ?
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            We know exactly how to maximize revenues, and our professionals have in-depth understanding of how to plan strategically to ensure optimal practices for appropriate supply chain management.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Enlisted below are some of the benefits of using our warehousing services in the country.
          </p>

          <ul className="timeline timeline-vertical my-10">
            <li>
              <div className="timeline-start timeline-box">
                We provide the best customer service to our clients. Satisfaction of our Customers is our prime goal.              
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                We assure high security of stocks, materials and goods.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">
                We offer the best 3 PL as well as 4PL solutions.
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                We provide long term as well as short term storage facilities.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">
                Our warehouses are located in suitable locations.
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
            </li>
          </ul>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez employs the most effective ways for increasing warehouse productivity and lowering operational costs. Our aim is to build trust in our clients. We intend to offer our clients with the best warehousing services so that they get the desired results. So, do contact Warehouzez the Digital supply chain today to get the supreme services related to warehousing, logistics and supply chain management. We promise you won't regret it. If you want to increase your productivity and reduce operational costs, do approach us. Our experts will provide you the best solutions pertaining to logistics and warehousing.
            Grow your business now with the exceptional facilities and services of Warehouzez-The Digital Supply Chain.
          </p>

          <FeaturesServices />
          <OurKeyFeaturesOfferings />

          <div className='my-6'>
             <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-10 mt-10 my-6 text-center'>
                Choose Your City For Warehouse Service
              </h2>
             <WarehouseListed />
          </div>
         
          <OurPresenceFreq />          
        </div>
      </div>
      <GetEnquiry />
      <Blog />
      <NetworkofWarehouzez />
    </div>
  )
}

export default page