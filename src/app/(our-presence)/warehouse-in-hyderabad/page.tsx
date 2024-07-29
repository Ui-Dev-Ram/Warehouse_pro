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

  const videoData = cities.hyderabad;
  
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-Hyderabad
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Hyderabad</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                      Warehouzez: Top Grade Warehousing Solutions To Make Your Business<br /> Thrive In Hyderabad!
                      Trends are changing dramatically in the fastest-growing tech cities<br /> including Hyderabad.
                      Industries like retail, e-commerce are booming in this city.
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src={cities.hyderabad.cityimg} className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
           <span className='text-4xl font-bold text-red pr-0.5'>W</span>ith today's intense rivalry among competitive brands, every firm anticipates meeting the expectations and requirements of the customers. Since every brand or corporation is different, it becomes all the more important to maintain inventory visibility across the whole supply chain system. To increase profitability, strategic preparation and meticulous execution are necessary. In present times, every business must establish the best strategies and firmly press the appropriate vein of the supply chain, in order to accomplish inventory profitability. Warehouzez is regarded as one of the leading logistics and warehousing companies in Hyderabad.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            It offers automated, robust technologies along with expert support. All this makes inventory visibility much easier and more seamless. By picking a tech-enabled warehouse in Hyderabad, any firm can profit from the below-mentioned benefits and perks. Some of these benefits are-
          </p>

          <ul className='flex items-center flex-wrap gap-y-5 mt-8'>
              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Inventory visibility
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                  Dropped stock levels
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Increased productivity
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Efficient supply chain management
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Forecasting with precision
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Minimizing the costs of operations
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Demand fulfillment that is both efficient and effective
                  </span>
                </div>
              </li>
          </ul>
          
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            In Hyderabad, How Does Warehouzez Have an Edge Over Its Competitors
          </h2>

          <div className='flex items-center space-x-2 mt-4'>
            <span className='material-design-icon check-circle-icon text-red'>
              <FaCircleCheck />
            </span>
            <span className='font-semibold'> 
              Present Opportunities for Entry into New Markets
            </span>
          </div>

          <p>
            Any company out there can expand its business by employing the logistics, warehousing and distribution services of Warehouzez. We provide warehouse services warehouses in locations that are most convenient for you. Warehouzez has an ever-growing network of warehouses with ideally positioned warehouses in over 70 locations throughout the country. We assist businesses in acquiring a warehouse in Hyderabad that is tech-enabled, well- maintained, and located in the prime location to easily connect with your target audience.
          </p>

          <div className='flex items-center space-x-2 mt-4'>
            <span className='material-design-icon check-circle-icon text-red'>
              <FaCircleCheck />
            </span>
            <span className='font-semibold'> 
              Cost-Effective Services and Long-term Commitment
            </span>
          </div>

          <p>
              For all types of enterprises, economic crashes are unavoidable. Small firms, in particular, face a slew of problems and issues as they try to stay afloat. As a result, we provide clients with cost-efficient, short-term, flexible, and personalized solutions that are ideal for startups and small businesses.
          </p>


        </div>     
      </div> 
      
      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end">
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src={cities.hyderabad.sideimg} className='w-5/6' alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={cities.hyderabad.location} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                        Why Should You Go With <br /> Warehouzez in Hyderabad?
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                          Warehouzez is a reliable and reputable logistics company with years of experience. Our team of experts works effectively to get to the core of the industry's biggest challenges and concerns. They've been taught how to reduce operational costs while maintaining balance in all elements of the supply chain. Let's look at some of Warehouzez' primary USPs that set it apart from other warehousing firms in Hyderabad.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                  28K Sqft
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
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2'>
          Value-added Services
          </h2>
          <b>
            Some of Our Major Services Include
          </b>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4'>
              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Contract logistics
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Warehousing services.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Carrying & Forwarding services.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Outsourcing Warehousing Operations
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Transportation services.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Delivery Management.
                  </span>
                </div>
              </li>
          </ul>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Industries We Deal With
          </h2>
          <b>
            In Addition to This, We Deal With a Variety of Industries. Some of Them Include
          </b>

          <ul className='flex items-center flex-wrap gap-y-5 my-4'>
              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Retail, FMGC and E-commerce
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Perfumes and Cosmetics
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/6'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Publication and Office Records
                  </span>
                </div>
              </li>
          </ul>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            We deliver all the above mentioned services in our warehouses.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Well-Trained Experts and Cutting-edge Technology
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Companies employ a warehouse management system to increase productivity and revenues. For handling stock transportation, warehousing, distribution and sorting of inventory, new automation technology is all the more important. Our professionals use their in-depth expertise and extensive experience to help businesses overcome key issues in numerous departments.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Warehouse on Lease and Effective Logistics Solutions
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            If you're searching for a Warehouse in Hyderabad look no further than Warehouzez. At Warehouzez, we continuously analyze business downturns and periodic demands, and thus provide flexible storage arrangements to meet the needs of the business. Our logistics experts always have a backup plan in place to ensure that everything runs well.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez extends a wide-range of warehousing and logistics services in Hyderabad, and thus we remain the favorite choice of our clients. In all likelihood, we remain concentrated on our goal of delivering "premium quality services" to our clients. Approach us today and choose Warehouzez as your most trusted 3PL partner in the city.
          </p>

          <FeaturesServices />
          <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                Our Key Features and Offerings
            </h2>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
              Here's a list of our key features and service offerings that sets us apart from other warehousing firms-
            </p>

                <ul className='flex flex-col mt-4 gap-y-4'>
                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1' />
                        </span>
                        <span>
                          Storage, Distribution and Transportation of the goods as per the customers' specifications.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                          Excellent storage systems that are customized to meet the specific requirements of clients.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                          Optimization of supply chain operations.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                          On-demand warehouses; warehouses located in strategic locations.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                          Best-in-class logistics solutions
                        </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-6">
                <OurVideo thumb={videoData.thumb} />
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

export default page