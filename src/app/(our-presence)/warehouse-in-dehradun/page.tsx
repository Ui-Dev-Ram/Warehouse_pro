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

const page: React.FC = () => {

    const videoData: VideoData = cities.dehradun;

  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-Dehradun
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Dehradun</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                    Warehouzez: High-class Warehousing and Logistics Services for your Business!
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src={cities.dehradun.cityimg} className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            <span className='text-4xl font-bold text-red pr-0.5'>D</span>ehradun is best known as the capital city of Uttrakhand state. The city has gained a foothold as a premier business and service centre, as well as the largest urban cluster in the Himalayan region. The majority of the city's population primarily relies on agriculture for a living, but Dehradun's recent economic expansion has shifted its attention away from tertiary sectors more towards primary and secondary sectors. The metropolitan area of this place is also undergoing a transformation from services to industries; primary and secondary industries are expanding and promoting economic growth. As a result, there is an upsurge in demand for warehouse services in Dehradun. Dehradun is hub of many prominent industries like Packed Food Products, Computer and Electrical, among others.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Top-Class Logistics Services in Dehradun
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            The city is widely regarded as the 'Counter Magnet' of Delhi NCR, as it serves as an alternative commercial hub for Delhi, easing the inflow of urbanization and population growth. The city today requires substantial investment to develop, enhance, and provide modern infrastructure in order to keep up with the rapid pace of urbanization and population increase. Additionally, for the development and advancement of industrial sectors, warehousing and logistics services are all the more essential. Finding a proper warehouse requires considerable amount of time and effort. Warehouzez is indeed the ideal choice for all those looking for a warehouse in Dehradun or in other parts of the country. We offer well-established and well-maintained warehouse for rent in Dehradun. At Warehouzez, we provide top-grade warehousing and logistics services for various kinds of businesses.
          </p>
        </div>     
      </div> 

      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end"> 
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src={cities.dehradun.sideimg} className='w-5/6' alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={cities.dehradun.location} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                        What Makes Warehouzez the <br />  Best Logistics Firm?
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            Warehouzez is best known for its technologically advanced and modernized supply chain management solutions. We provide exceptional logistics solutions along with unparalleled warehouse infrastructure.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    7K Sqft
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
                                3K Sqft
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

            <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
                Why Choose Us?
            </h2>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
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

            <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                Excellent Warehouse Services
            </h2>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Many businesses require a warehouse space to keep their assets and conduct daily operations. If you're looking for a suitable godown or warehouse for your business, then contact Warehouzez. We provide our customers with cost-effective storage facilities and distribution centers in a variety of locations throughout the country to meet their needs. Customers benefit from our renting facilities since they can choose from a wide range of options at any time. Warehouzez has years of experience in providing creative and cost-effective logistics and supply chain solutions, which has resulted in a fundamental shift in the logistical and warehousing sector.
            </p>

          <FeaturesServices />
          <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                Key Features and Offerings
            </h2>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Here's a list of some of our key features and offerings
            </p>

            <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                      Best-in-class On-Demand Warehousing Services.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                      A full suite of E-Commerce Fulfillment Services.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                      Efficient Supply Chain Management.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                      Wide range of customized contract logistics solutions.
                      </span>
                      </div>
                  </li>
            </ul>           
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-6">
                <OurVideo thumb={videoData.thumb}/>
            </div>
        </div>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            The business strategy of Warehouzez emphasizes on the optimal and collective efforts of our highly professional team and technological processes. This ethos helps us in offering extremely effective and affordable supply chain solutions to our valued clients. So, if you are looking for a warehouse in Dehradun or any other city, do contact us.
        </p>

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