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

  const videoData = cities.mumbai;


  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-Mumbai
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Mumbai</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                   Warehouzez : The Best 3pl Partner For Your Business <br /> Get your hands on The Best Warehousing and Logistics Services in Mumbai! <br />
                   The rise of the digital age has certainly transformed the growth practices of businesses.

                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src={cities.mumbai.cityimg} className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
          <span className='text-4xl font-bold text-red pr-0.5'>I</span>n recent times, businesses are required to operate beyond their physical spaces. With the advent of digitalization, businesses are expected to operate 24/7. Sellers can easily fulfill the demands of their customers via online platforms. In all likelihood, E- Commerce and FMCG have revolutionized the businesses forever! With the rise in digitalization, urbanization and online shopping, the demand for warehouse in Mumbai is increasing significantly, especially in the Metropolitan cities like Mumbai and Delhi. Therefore, it becomes all the more important to make a wise choice and go for the best warehouse services in Mumbai.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            The right warehousing company can help in effective management of supply chain and handling of raw materials. By availing the services of a renowned logistics' provider, you can enhance the productivity of your business and reduce the overall costs. You can also opt for shared warehouse space in Mumbai. Storing goods is absolutely necessary for traditional as well as online retailers. The idea of warehousing logistics is becoming immensely popular, especially in Metro cities like Mumbai. The use of a reputable and professional warehouse and it can help increase production while lowering overall costs. As a result, considerable study is required to locate the best warehouse in Mumbai for your company's expansion. The following are some of the most important factors to consider -
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            More Number Of Warehouses
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Before making a choice, try to choose the warehousing company that offers a large number of warehouses in different geographic locations. To get the best warehousing services, choose the well- known warehouse service providers in Mumbai. We have our well- established warehouses in over 70 locations throughout the country.
          </p>


        </div>     
      </div> 

      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end">
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                      <Image src={cities.mumbai.sideimg} alt="warehouse in mumbai" width={500} height={500}/>
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={cities.mumbai.location} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                            Cost-effective Warehouse <br /> Services in Mumbai
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            Well, the first point to consider is the cost. Always choose warehouses with relatively lower storage charges. At Warehouzez, we offer warehouse services in Mumbai at affordable prices. We remain committed to our goal of providing our customers with the premium quality.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    100K Sqft
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

        <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2'>
            Additional Facilities
        </h2>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Another point of consideration is to select the warehouse service provider that offers value added facilities. <br />
            All the above mentioned criteria are fulfilled by Warehouzez. We are one of the best warehousing companies in Mumbai. We Provide warehouse in Mumbai and offer supreme inventory warehouse storage services to promote business management. In addition, we make use of the latest technology like GPS, CCTV, WMPS, Bar Code Scanners and so on. We also provide 3PL Warehousing and Distribution services.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'> 
            We make use of the best strategies for efficient inventory management like
        </p>
        
        <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
            <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Tracking the movement of stocks.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Management of Inventory.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Noting clear descriptions about the inventory.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Keeping a record of products that are out of stock.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Promoting smooth operations.
                </span>
                </div>
            </li>
        </ul>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            We have a well- established network of warehouses in the whole country. Our ever- growing network of warehouses includes more than 70 cities in the country.
        </p>

        
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2'>
            Why Choose Us?
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-4'>
            Take a look at some of the benefits of using our services
          </p>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4'>
              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Complete satisfaction of customers.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    We assist clients in finding the ideal warehouses for their needs.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    All our rental plans are cost effective.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    We employ cutting-edge technology to deliver tech-driven logistics solutions.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    We help businesses in extending their core businesses.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                     We believe in digitizing the supply chain operations completely.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
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

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Our experts implement all the market strategies to promote the overall growth of your business. We have years of experience in Warehouse services and supply chain.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez's Warehouse in Bhiwandi is an ultra- modern warehouse in the city known for its extraordinary and unmatched infrastructure. The Bhiwandi warehouse is equipped with all of the newest electronic features and latest technology.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            So if you are looking for a warehouse in Mumbai? Then you have landed at the right place. Our warehouse has the best-in- class infrastructure. It is well- equipped with the latest technology and gadgets. Approach us today if you are looking for an on warehousing services in Mumbai . We will offer the best solutions related to capital management and supply chain. Warehouzez is an all inclusive organization where experts will offer you the finest warehousing and logistics services in mumbai.
          </p>

          <FeaturesServices />
          <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                What makes Warehouzez the best choice for warehousing services in Mumbai
            </h2>

            <div className='flex space-x-2 items-baseline'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck className='relative top-1' />
                </span>
                <span>
                    Risk Management and Security Assurance
                </span>
            </div>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Warehouzez the Digital supply chain gives utmost importance to the safety and security measures. All our warehouses are fully equipped with security systems. Our warehouses are well resourced with CCTVs to keep a track on all activities.
            </p>

            <div className='flex space-x-2 items-baseline'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck className='relative top-1' />
                </span>
                <span>
                    Well-established Network
                </span>
            </div>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Regarded as one of the best logistics and warehousing companies, Warehouzez has a number of warehouses in the entire nation. We offer exceptional services to our clients.
            </p>
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-6">
                <OurVideo thumb={videoData.thumb} />
            </div>
        </div>

            <div className='flex space-x-2 items-baseline'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck className='relative top-1' />
                </span>
                <span>
                    Customer Satisfaction
                </span>
            </div>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-8 text-justify'>
                We offer the best customer service to all our clients. Satisfaction of our customers is our sole motive. We certainly believe in providing the best possible solutions to customers. Apart from that, we make sure to meet the deadlines too.
            </p>

            <div className='flex space-x-2 items-baseline'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck className='relative top-1' />
                </span>
                <span>
                    3PL and 4PL Solutions
                </span>
            </div>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-8 text-justify'>
                As stated above, Warehouzez is deemed as one of the leading warehouse service providers. We offer remarkable warehouse services to all our clients. We are your one stop destination for all our inventory solutions.
            </p>

            <div className='flex space-x-2 items-baseline'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck className='relative top-1' />
                </span>
                <span>
                    Market Strategies
                </span>
            </div>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-8 text-justify'>
                Our experts implement all the market strategies to promote the overall growth of your business. We have years of experience in management of capital and supply chain. Warehouzez's Warehouse in Mumbai is an ultra- modern warehouse in the city known for its extraordinary and unmatched infrastructure. The Mumbai warehouse is equipped with all of the newest electronic features and latest technology.
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

export default page