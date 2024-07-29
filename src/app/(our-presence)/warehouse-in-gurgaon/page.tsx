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
    const videoData: VideoData = cities.gurgaon;
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-Gurgaon
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Gurgaon</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                    Warehouzez: Avail The Best Warehousing Services In Gurgaon !
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src={cities.gurgaon.cityimg} className='f-3/4 m-auto' width={500} height={500} alt="Lucknow Image" />
              </div>
          </div>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            <span className='text-4xl font-bold text-red pr-0.5'>G</span>urgaon is regarded as one of the greatest consumer markets in the world. In fact, it is considered as a doorway to progress and success for the northern most part of the country. Several Ecommerce conglomerates such as Flipkart, Amazon, Myntra and so on are growing rapidly here. This blooming city provides online retailers with access to the world's largest consumer market. Due to this, the demand for logistics and warehousing services is tremendously growing in Gurgaon and other NCR regions.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Gurgaon is one of the country's most important market places for warehouse space. Furthermore, the city provides major benefits to third-party logistics firms. Leading warehouse solutions providers enable businesses to follow industry standards in order to boost labour productivity and promote customer happiness.
          </p>
          
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Scale your Capabilities with Warehouzez
          </h2>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Warehouzez, an excellent logistics company in India, offers comprehensive end-to-end warehouse services in Gurgaon. We offer comprehensive services, including storage, efficient inventory management, packaging, distribution, and transportation. We are attempting to provide exceptional services and empower businesses to reach out to more customers around the country. We certainly have a strategic network of well-designed warehouses in India, allowing businesses to venture into new marketplaces. Our high-quality warehouse services in Gurgaon cater to the needs of a wide-range of industrial sectors, including e-commerce, FMCG, computers, and electrical, among others. Warehouzez's IoT-enabled automated storage and distribution services will help you acquire a competitive edge in the ever-evolving business world.
            </p>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Our warehouse in Gurgaon can indeed help you to manage inventory, reduce transportation costs, improve delivery times, improve operational efficiency, and finally scale your business. We have indeed set a benchmark in providing the best-quality logistics and supply chain management services.
            </p>
        </div>     
      </div> 

      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end"> 
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src={cities.gurgaon.sideimg} className='w-5/6' alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={cities.gurgaon.location} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                        World-class Warehouse <br /> Facilities in Gurgaon
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            Warehouzez offers the excellent logistics and warehousing services in gurgaon and several other places. Our Warehouse in Gurgaon is positioned strategically in the prime location. We provide a cost-effective and affordable warehousing services in Gurgaon.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    95K Sqft
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
                                    25K Sqft
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
          
        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Our state-of-the-art solutions are adaptable to the diverse needs of different enterprises. In addition to that, we have a wide- ranging network and strategically located warehouses in over 70 locations throughout the country. One thing is sure, with our well-established and fully maintained warehouses your inventory will be safer than ever and all your logistics needs will be met.
        </p>

        <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Ever-increasing Warehousing Network in Gurgaon
        </h3>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Warehouzez has an ever-increasing warehousing network in the NCR region. We assist clients in minimizing errors that disrupt or hinder efficient management of the supply chain.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            We are indeed a major provider in the country.We have a prominent team of highly qualified and experienced experts to manage storage facilities in Gurgaon for all types of corporations.
        </p>

        <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Our Advanced and Cutting- edge Technology, Software and Systems
        </h3>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            The most essential reason to choose Warehouzez as your third party logistics partner in Gurgaon is our cutting-edge technology. It enables you to explore new avenues of market expansion while engaging with more audiences to increase profitability. We employ our advanced, in-house and ultra-modern technology and systems to provide our clients with the finest and personalized warehousing solutions. Our systems and technologies are specially designed to offer customers with efficacy, transparency and live updates. As a result, Warehouzez is indeed one of the best warehousing firms in the industry.
        </p>

        <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Full Assurance of Inventory Safety
        </h3>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Warehouzez is committed about using safe material handling practises in warehouse in Gurgaon. We understand the necessity of effective supply chain management, and we have great ideas for how to do it while guaranteeing your material's safety. We employ the greatest tools available, which are very effective and capable of delivering the best outcomes by boosting labour efficiency while ensuring complete safety.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            We believe in forming long-term connections with our clients, so our main goal is to ensure that they are completely satisfied. Approach us today if you are looking for an warehouse in Gurgaon. Warehouzez, the Digital Supply Chain is one of the preeminent logistics and warehouse service providers in the country. Get your hands on Warehouzez's amazing logistics management.
        </p>

        <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Why Choose Us?
        </h3>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
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
                    Our warehousing service plans are all reasonably priced.
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

        <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Major 3PL Solutions Provider
        </h3>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Being the best-in-class warehousing company in Gurgaon, we offer a full-suite to a wide range of businesses. Third party logistics plays a significant role in effective functioning of any business. Warehouzez is the one stop destination for all the 3PL services from supply chain management and inventory management to faster delivery. We deliver it all!
        </p>

        <div className="flex">
            <div className="flex-1">
                <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
                    Value Added-services
                </h3>

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
                    Some of our prominent services include -
                </p>
                
                <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            3PL warehouse services.
                        </span>
                        </div>
                    </li>

                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            CFA services.
                        </span>
                        </div>
                    </li>

                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            Distribution
                        </span>
                        </div>
                    </li>

                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            Transportation
                        </span>
                        </div>
                    </li>

                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            Delivery Management
                        </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
                    Some of the Industries We Deal With
                </h3>

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
                    In addition to this, we deal with a variety of industries. Some of them include -
                </p>
                
                <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            Power grid and energy
                        </span>
                        </div>
                    </li>

                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            Telecom and Solar
                        </span>
                        </div>
                    </li>

                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            Aviation and Automotive
                        </span>
                        </div>
                    </li>

                    <li className='w-full lg:w-2/4'>
                        <div className='flex items-center space-x-2'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck />
                        </span>
                        <span>
                            Apparel and Lifestyle
                        </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

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
                        Distribution and Transportation of the goods according to the customers' specifications.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Order Processing and distributing them efficiently.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        The most up-to-date management and inventory methods are used.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Deliveries and pick-ups are made on time.
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
                        Enough pest control methods are in operation.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Exceptional storage systems that are tailored to match the specific needs of clients.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Large inventories can be handled easily.
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