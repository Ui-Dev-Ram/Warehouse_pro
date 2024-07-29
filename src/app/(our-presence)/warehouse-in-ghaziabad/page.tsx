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
import WarehouseListed from '@/components/home/our-listed-warehouses/WarehouseListed';
import OurPresenceFreq from '@/components/ourPresence/OurPresenceFreq';
import Blog from '@/components/home/blog/Blog';
import GetEnquiry from '@/components/services/GetEnquiry';
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez';
import MapLocation from '@/components/ourPresence/MapLocation';
import OurVideo from '@/components/ourPresence/OurVideo'
import { cities } from '@/data/cityPageDetails'

interface VideoData {
    thumb: string; 
  }

const page = () => {
    const videoData: VideoData = cities.ghaziabad;
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-Ghaziabad
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Ghaziabad</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                    Warehouzez: Your most reliable and trusted 3PL Partner in Ghaziabad!
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>
 
              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src={cities.ghaziabad.cityimg} className='f-3/4 m-auto' width={500} height={500} alt="Manesar Image" />
              </div>
          </div>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            <span className='text-4xl font-bold text-red pr-0.5'>G</span>haziabad is also known as the Central hub of Uttar Pradesh West (NCR). This is because it provides enormous space for effective supply chain management throughout the state (U.P.) with easy accessibility from the National Capital Region. It caters to large company demands and provides high-quality services. If you have been searching for warehouse services in Ghaziabad, then Warehouzez is a leading warehousing and logistics provider in the Delhi NCR region. Our team of experts is always there to assist you with modernized technology setup, expertize and extensive experience from diverse industries' supply chain operations such as Telecom, Solar, Fashion, Lifestyle, FMGC, Automotive and Spare parts and so on. This city is primarily known for its factories and industries.
          </p>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Ghaziabad, as one of Uttar Pradesh's most industrialised cities, is also one of the biggest revenue-generating cities in terms of economy, trade and business. Commercialization has increased the city's per capita revenue and financial operations by leaps and bounds. It is known as the most well-planned industrial city in the world, with excellent road and rail connections due to its strategic location. The city's economy is mostly dependent on the industries that have been established in the city. With so many job opportunities, Ghaziabad is drawing a large number of highly trained workers. With this tremendous growth opportunity, the requirement for warehousing and logistics solutions is also incredibly increasing.
            </p>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Due to the phenomenal growth of the industrial sector in Ghaziabad, the demand for logistics and warehousing services is also increasing. It becomes all the more necessary to pick the top-graded organization as your 3PL partner in Ghaziabad. Shaking hands with an excellent Logistics Company in the city has several advantages in terms of boosting production, increasing revenue and lowering costs. In all likelihood, Warehouzez is the perfect choice for all the conglomerates seeking out for logistics services and warehouses in delhi NCR region.
            </p>
        </div>     
      </div> 

      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end"> 
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src={cities.ghaziabad.sideimg} className='w-5/6' alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={cities.ghaziabad.location} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                            Why Should You Join Hands With <br /> Warehouzez As A 3PL Partner?
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            A wide range of businesses utilize the third party logistics services of Warehouzez. We provide state-of-the-art warehousing solutions that are suitable to the varying needs of different corporations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    70K Sqft
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

      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          
        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
            Businesses reach us for a variety of services like Warehouse Management, E-Commerce Fulfillment, On-Demand Warehousing services in Ghaziabad, Supply Chain Management, Distribution and Transportation services, along with many other services. We have an ever-increasing network of warehousing hubs across 70 locations throughout the country. We assist businesses in reaching new heights of success, growth and development.
        </p>

        <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Why Choose Us?
        </h2>

        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
            Take a look at some of the benefits of using our services
        </p>

        <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Complete satisfaction of customers.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We assist clients in finding the ideal warehouses for their needs.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    All our rental plans are cost effective.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We employ cutting-edge technology to deliver tech-driven logistics solutions.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We help businesses in extending their core businesses.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We believe in digitizing the supply chain operations completely.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    To provide comprehensive solutions, we collaborate closely with our in-house teams.
                </span>
                </div>
            </li>
        </ul>

        <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Massive Network
        </h2>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            In the domain of warehouse and logistics solutions, Warehouzez continuously set the bar for perfection. Our network of unrivalled warehouses spans several cities across the country.
        </p>

        <h3 className='text-md font-semibold'>
            The Premier Provider Of 3PL And 4PL Solutions
        </h3>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez is one the leading providers of 3PL and 4PL solutions. Furthermore, in our 4PL sector, our professionals have years of experience tackling important difficulties in supply chain planning, construction, and provision for enterprises. We believe in attaining the intended outcome to establish corporate growth strategies.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez' warehouse in the city of Ghaziabad, is known for its extraordinary and unmatched infrastructure. It is packed with all of the newest technologies and robotic features, as well as finest fire safety measures. So, if you're looking for the perfect and right partner to help you with your logistics operations, then do approach us. Our team of experts will deliver the most exceptional warehousing, logistics and supply chain management solutions to help your business reach new heights of success.
        </p>
        
          <FeaturesServices />
          <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                Our key features and offerings
            </h2>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Here's a list of our key features and service offerings that sets us apart from other warehousing firms-
            </p>

            <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Transportation and Distribution services as per the specifications of the customers.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Order Processing and Fulfillment.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Timely and Speedy Delivery.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Safety and security services are available 24 hours a day, 7 days a week.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Inventory Control and Management.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Effective Supply Chain Management.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                      The most up-to-date systems and digital tools are used.
                      </span>
                      </div>
                  </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-6">
                <OurVideo thumb={videoData.thumb}/>
            </div>
        </div>

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

export default page;