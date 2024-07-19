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


{/** warehouse location link paste here **/}
const WarehouseLocation = "https://goo.gl/maps/duiShiXHwNfYVi7C8";

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
                        Warehouse-in-bhiwandi
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>bhiwandi</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                       Warehouzez: Take your Business to The next level with <br /> excellent Logistics Solutions!
                       Bhiwandi is one of Mumbai's most prominent suburbs. <br />  It has a huge migrantpopulation that makes
                       its way to the city, particularly in quest of work. 
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src="/our-presence/bhiwandi.png" className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            The population living in Maharashtra's metropolis, is reliant on the city's thriving economic landscape. It is a major commercial hub that contributes significantly to the region's economy. There are several prominent industries in Bhiwandi, like Perfumes and Cosmetics, Fashion and Lifestyle and many more. Apart from these sectors required warehousing in Bhiwandi, there are various other associated businesses that cater to the needs of the aforementioned industries. Logistics sector which primarily handles the movement and storage of commodities, is a leading sector in this regard.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Top-Grade Logistics Firm in Bhiwandi
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            For all the businesses looking for a warehouse in Bhiwandi, Warehouzez is certainly the best option! Being the topnotch logistics firm, Warehouzez provides best-in-class supply chain solutions to make your business all the more profitable, thriving, and successful. Our ultra-modern warehouses offer massive storage facilities to a wide range of industries.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Bhiwandi is regarded as a logistics hub of the country, particularly because there are several warehouses in this city. The industrial growth and urbanization has necessitated the requirement of warehouse spaces. E-Commerce giants like Flipkart, Nykaa, Amazon store their inventory stock in warehouses or fulfillment centers. Online merchants and third-party logistics providers rent warehouses to avoid making huge upfront investments. In reality, most online sellers lease all logistical services in order to keep costs down while delivering goods quickly across the country.
          </p>
          
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Warehousing Solutions Under One-roof
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez is one of the best and most recognized warehousing companies in India, specializing in providing end-to-end, comprehensive, and customer-focused storage, distribution, and inventory management solutions. Our professionals ensure seamless inbound and outbound operations. Our state-of-the-art warehouse in Bhiwandi has cutting-edge infrastructure, massive pallet storage, and temperature-controlled storage solutions for products that require specialized conditions. We provide premium-quality warehouse services in Bhiwandi and a number of other cities. We can certainly scale up or down our operations as per the requirements of our clients, providing them with ample space to grow.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez is the leading logistics service provider in the country offering outstanding warehousing and supply chain solutions. We have cost-effective warehouse rental plans in Bhiwandi, Mumbai and other places. We believe in consistent growth, technological developments and meticulous planning. Our warehouse in Bhiwandi has set multiple standards in delivering effective supply chain solutions and customizable warehousing solutions, in addition to the great facilities offered in warehouses of Mumbai. Apart from that, we provide finest E-Commerce fulfillment services, including order picking, packing, order management, and fulfillment.
          </p>

        </div>     
      </div> 
      
      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end">
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src="/our-presence/feature-img.png" className='w-5/6' alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={WarehouseLocation} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                        Best-in-class E-Commerce <br /> Fulfillment Services
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            E-Commerce Fulfillment operations are the backbone of every business. Customers are happy only when their orders are delivered at the right time, in the right condition. From packing the order to delivering it to its final destination, we do it all!
                        </p>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            Our services are ideal to help your online store grow!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    80K Sqft
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
                                    15K Sqft
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

                <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-8'>
                    Warehouzez offers best-in-class warehouse, logistics, and e-commerce fulfillment services. Our e-commerce fulfillment services include order picking, packing, processing, management and much more. We understand the importance of having a reliable and efficient e-commerce fulfillment service. That is why we offer a wide range of services that are designed to help your business grow. From order picking and packing to inventory management and shipping, we have got you covered! We have a range of options and solutions to choose from, so you can find the one that best suits your needs. And our team is dedicated to providing top-notch customer service.
                </p>
            </div>           
      </section>

      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2'>
          Enlisted below are some benefits of using our E-Commerce fulfillment services-
          </h2>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4'>
              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Order Processing.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Improved and enhanced customer experience.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Packaging and Repackaging.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Optimized Supply chain operations.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Managing the transportation requirements.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Ensuring timely delivery.
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-1/3'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Real-time shipment tracking.
                  </span>
                </div>
              </li>
          </ul>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Best WMS and Modernized SCM Technological Tools
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            At Warehouzez, we make sure to use excellent and state-of-the-art SCM technology tools. Nowadays, most businesses need a resilient as well as robust SCM system in order to ensure smooth logistics. We can certainly help your company expand with our Global SCM technology. We incorporate all the latest warehousing trends in the industry to offer exceptional solutions.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez's Warehouse Management System is a comprehensive software solution that provides you with the visibility and transparency you need into your warehousing operations. With WMS, you can track the movement of inventory in real time, ensuring accuracy and improving efficiency. In addition to improved inventory management, our tech-backed WMS also provides benefits like inventory accuracy, live tracking, reduced labor costs, and more. It is specially designed to help businesses of all sizes streamline their warehousing and inventory operations. It is easy to use and helps businesses save time and money.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Why Choose Us?
          </h2>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4'>
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

              <li className='w-full'>
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
            Industries we deal with
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            A number of industrial sectors entrust us with their logistical needs. Enlisted below are some of the prominent industrial sectors we deal with.
          </p>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4'>
              <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Fashion and Lifestyle
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    E-Commerce and FMCG
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Battery (EV) and Powergrid
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                     Packed Food Products
                  </span>
                </div>
              </li>

              <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Computer and Electrical
                  </span>
                </div>
              </li>
          </ul>


          <FeaturesServices />
          <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                Our key features and offerings
            </h2>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                In all likelihood, Warehouzez is one of the best logistics companies in Bhiwandi and Mumbai. It is our topmost duty to assist businesses in increasing productivity and lowering overall expenses.
            </p>

                <ul className='flex flex-col mt-4 gap-y-4'>
                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1' />
                        </span>
                        <span>
                            Ensuring the safety of materials.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                            Employing best ways of Inventory management.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                            Ever-increasing network of warehouses.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                            Man power resources.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Premium quality 3PL and 4PL solutions.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Utilizing the best business growth strategies.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Cutting-edge technology and software systems.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Global SCM technology.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Customized logistics solutions for all kinds of industries, sectors and businesses.
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Satisfaction of our customers is our mantra!
                        </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-6">
                <OurVideo />
            </div>
        </div>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-6'>
            If you are you looking for reliable and efficient warehouse services in Bhiwandi then look nowhere else than Warehouzez. We cater to the needs of a wide range of industrial sectors. Our bouquet of services includes warehousing, distribution, transportation, and supply chain management. We have an extensive network of state-of-the-art warehouses in India with cutting -edge infrastructure. We believe that time is equivalent money for our clients. This is why we offer quick and efficient services that are tailored to meet the specific needs of our clients. We also have a wide range of services so that we can meet the needs of any client, regardless of size or sector. You can contact us today to learn more about how we can help you streamline your logistics and warehousing operations.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'> 
            We believe in Logistics with Innovation!
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