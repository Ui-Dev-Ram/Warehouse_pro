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

    const videoData: VideoData = cities.noida;


  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-Noida
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Noida</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                     Warehouzez: An Accredited 3PL Firm in Noida
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src={cities.noida.cityimg} className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            <span className='text-4xl font-bold text-red pr-0.5'>A</span>ccording to experts, the Indian storage industry would see a proliferation of multi-level warehouses in major cities. The Global economy is rising and therefore the warehousing industry is all set to enter a new age. The layout of warehousing is transforming particularly because of 3PL. Today, new verticals such as pharmaceuticals, textiles, fashion, and clothing are opting for logistics solutions and They need Warehouse in Noida.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'> 
            Noida is considered as the greatest hub for several industries, corporations and E- Commerce activities. In fact, some E- Commerce giants have their headquarters here. These conglomerates search for the world class facilities and supreme quality assets. Noida is quickly transforming into a primary center of the warehousing sector's spectacular rise in recent years.
          </p>
          
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Best Warehouses Services Provider in Noida
          </h2>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Due to the phenomenal growth of the E-Commerce and industrial sector, the demand for logistics and warehousing is also increasing. It becomes all the more important to pick the most suitable organization as your 3PL partner in Noida. Teaming up with an excellent Logistics Company in the city has several advantages in terms of boosting production and lowering costs. In all likelihood, we are ideal choice for all the businesses looking out for Warehousing services and warehouse in Noida.
            </p> 
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                We have decades of experience in delivering the best-in-class storage, distribution and warehousing services. All of our warehouses are ideally positioned in the prime location. We have an ever growing network of warehouses in over 70 locations across the county. Warehouzez is regarded as one of the top- graded supply chain solution providers in the industry. We provide innovative and excellent warehouse services to all types of businesses.
            </p>
        </div>     
      </div> 

      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end"> 
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src={cities.noida.sideimg} className='w-5/6' alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={cities.noida.location} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                        Why Warehouzez is The Best Choice  <br />For Warehousing Services And Warehouse in Noida
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            A wide range of tactical and strategical solutions are responsible for phenomenal success of Warehouzez. Our corporation, as a prime leader in the supply chain domain, has been consistently offering superior quality third party logistics (3PL) services for decades. Our service offerings include storage, dustribution, transporation, inventory management, order fulfillment and much more.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    50K Sqft
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
                                    10K Sqft
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
            Our warehouse in Noida is ideal for all your storage and distribution needs. Warehouzez is very well- known for its top-of-the-line logistics and warehousing services in NCR. It is also known for its ultra-modern warehouse for rent in Noida.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Warehouzez is the best choice for logistics and warehouse services in Noida for a number of reasons. First, we have a state-of-the-art facility that is equipped with the latest technology and security features. This ensures that your goods will be safe and protected at all times. Second, we have a team of experienced and professional staff who are dedicated to providing the best possible service.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Third, we offer competitive rates that are tough to beat. And finally, we have a strong commitment to customer satisfaction, which means that we will always go the extra mile to make sure that you are happy with our services.
        </p>

        <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Let's take a look at the main advantages that our clients get from picking a warehouse.
        </h3>

        <p className='text-xl font-semibold'>
            Reliable And Quick Transportation Services in Noida
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            We ensure a seamless and smooth flow of commodities from their source destination to the end destination. We offer efficient, quick and reliable transportation and distribution facilities to our clients. It is our primary duty to ensure that products securely reach their end destination. Prominently, we provide Air Freight Transportation, Road Transportation and Sea Transportation. In addition to that, we provide real - time tracking of vehicles through satellites. We strive to consistently improve its methodologies by working for advances in delivery speed, quality, reduced operational costs, facility utilisation, and energy conservation.
        </p>

        <p className='text-xl font-semibold'>
            Durable And Reasonably Priced Shipping Containers
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Warehouzez utilizes shipping containers that are affordable, to quickly develop customized fleets. These are modular structures, which have advantages such as durability, adaptability and flexibility.
        </p>

        <p className='text-xl font-semibold'>
            Top - Rated Logistics in Noida
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Being one of top-rated logistics services providers in the industry, we offer such as warehouse management, inventory management, shipping and order fulfillment for all types of businesses. We implement significant strategy changes on a regular basis by utilising our ultra- modern logistics system. Since decades we have been giving outstanding operational efficiency to firms. Utilizing an advanced and ultra- modern logistics system is a great way to increase scalability because it eliminates human errors and gives you a competitive edge in the industry.
        </p>

        <p className='text-xl font-semibold'>
            Highly Experienced Team of Professionals
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            At Warehouzez, we have a well- qualified, trained and experienced team of professionals who are well- versed in dealing with high-pressure circumstances. With robust technology, they can efficiently and effortlessly manage the supply chain and provide expert services to the enterprises.
        </p>

        <p className='text-xl font-semibold'>
            The State-of-the-art Warehouse Management System
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Warehouzez deploys its in-house comprehensive, robust, and technologically-backed Warehouse Management System (WMS) software to help small, medium, and large-scale businesses streamline their warehousing and inventory management operations. The software provides a number of benefits like visibility and transparency into warehouse operations, inventory accuracy, order management and more. Clients can track the real-time information about their inventory and shipments.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            The WMS can offer your business a myriad of benefits, including
        </p>

        <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Traceable Materials
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Reduced costs
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Better inventory management
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Improved customer satisfaction
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Increased efficiency
                </span>
                </div>
            </li>
        </ul>

        <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            We Create Opportunity to Reach Potential. (Space Issues)
        </h3>
        
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
        
          <h3 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2'>
            24/7 Security And Safety
          </h3>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Owing to high-risk component, maintaining a warehouse with top-notch security features is absolutely necessary. As a result, Warehouzez ensures that all its warehouses are well- furnished with CCTV cameras and access control systems that are kept up to date.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            For all the businesses looking out for warehouse services in Noida, Warehouzez is indeed the best choice! All of our state-of-the-art and ultramodern warehouses in Noida come with incredible features and amenities. Contact us today for all your logistics and warehousing needs. We certainly have a competitive edge in the industry. We believe in providing hundred percent satisfactions to our clients. So take advantage of our best-in-class services now and grow your business!
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
                        Career progression
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Fasttrans offers a clear and transparent careerjourney and provides the support
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Make long term business decisions
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Provide a service we are proud of
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Be a responsible member of the community
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Always seek to improve
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Provide a service we are proud of
                      </span>
                      </div>
                  </li> 
              </ul>

            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
              Single source for all your warehousing needs. Revolutionize your business with us!  
            </p>
            
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