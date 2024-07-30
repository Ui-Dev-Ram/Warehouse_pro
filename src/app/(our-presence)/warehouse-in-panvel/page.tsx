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

    const videoData: VideoData = cities.panvel;

  return (
    <div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-5 mt-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                      <span className="w-10 h-0.5 bg-red"></span>

                      <p className="font-medium text-red text-xl">
                        Warehouse-in-Panvel
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Panvel</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                    Warehouzez: Experience The Top-graded Warehousing And Logistics Services!
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src={cities.panvel.cityimg} className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            <span className='text-4xl font-bold text-red pr-0.5'>T</span>he logistics industry has played a critical role in propelling several other industries as India's growth model has evolved tremendously. The key driving forces for growth in the warehousing sector are Retailing, E-commerce, modernized and advanced technologies. India's warehousing industry has been rapidly developing due to a rise in economic growth and export business. All the individuals, business owners, and stakeholders looking for a warehouse in Panvel or any other city should contact Warehouzez. Warehouzez is certainly one of the leading and renowned warehousing companies in India. It is the most ideal place to rent a warehouse and receive best-in-class logistics services. We have a number of warehouses in great locations. We have alternatives that are a perfect fit for you in terms of infrastructure and access to the main metropolitan area.
          </p>
          
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Excellent Warehousing Services in Panvel
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Panvel is a city in Maharashtra's Raigad district, close to the Indian metropolitan city, Navi Mumbai. The city is now attracting the attention of India's main enterprises. The majority of the main commercial projects in Panvel have occurred in New Panvel. It is the most populated area in Maharashtra's Raigad District, and is particularly known as the Konkan coast's entrance. It is a densely populated suburb of Mumbai, about 40 kilometres from the city.The prominent industries in this district include E-Commerce and FMCG, Automotive and Spare Parts, Fashion and Lifestyle, among others. The demand for warehousing services is growing continuously in this area. For everyone searching for a warehouse in Panvel should approach and contact Warehouzez. We have a country-wide network of warehouses where you can keep your company's inventory stock in the most convenient location. Our greatest storage system in India ensures that you have the infrastructure and facilities as per your requirements. We make it a point to use the latest software and technological tools to get the best results. Warehouzez is in the list of top logistics companies of India.
          </p>
        </div>     
      </div> 

      <section className="bg-white py-10 md:py-10 xl:relative">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end"> 
                  <div className='relative flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src={cities.panvel.sideimg} className='w-5/6' alt="Feature img" />
                    </div>
                        <div className='absolute bottom-20 right-14 z-50'>
                            <MapLocation location={cities.panvel.location} />
                        </div>
                  </div>
                    
                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                         Why Choose Warehouzez <br /> in Panvel?
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            We provide a number of warehousing options and solutions, all of which may be designed and tailored to meet your company's specific demands and needs.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
                            <div className="mb-8 w-full m-auto">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl m-auto mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-4 text-center">
                                    8K Sqft
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

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-semibold text-gray-700 mb-3 text-justify mt-4'>
            A few of the factors that make us the top logistics and supply chain management organisation in the industry are listed below.
        </p>
         
        <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    Our mission is to build great rapport and relationship with clients based on trust, commitment, and ethical business values.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We use technical solutions that are both powerful and simple to use, allowing businesses to focus on what they do best.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We use technical solutions that are both powerful and simple to use, allowing businesses to focus on what they do best.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We can provide temperature control storage facilities, on-demand warehousing facilities, E-Commerce fulfillment solutions, or any other customized service you require.
                </span>
                </div>
            </li>

            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                    We certainly help businesses reach their full potential by offering a wide range of exceptional logistics solutions.
                </span>
                </div>
            </li>
        </ul>
        
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2'>
            Industries We Deal With
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            A number of industrial sectors entrust us with their logistical needs. Enlisted below are some of the prominent industrial sectors we deal with.
          </p>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
            <li className='w-full lg:w-2/4'>
                <div className='flex items-center space-x-2'>
                <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                </span>
                <span>
                Wind, Solar and Telecom
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
                Here's a list of some of the significant services we offer
            </p>

            <ul className='flex items-center flex-wrap gap-y-5 mt-4 mb-6'>
                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Contract Logistics and Third Party Logistics.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        Best-in-class Warehousing and Distribution facilities.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        CFA and Freight Forwarding.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        We offer a great assortment of top-notch E-Commerce Fulfillment solutions.
                      </span>
                      </div>
                  </li>

                  <li className='w-full'>
                      <div className='flex items-center space-x-2'>
                      <span className='material-design-icon check-circle-icon text-red'>
                          <FaCircleCheck />
                      </span>
                      <span>
                        State-of-the-art and Global SCM Technology.
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
            Warehouzez guarantees the safety of commodities by using industry-standard surveillance and security systems. If you are looking for a warehouse in Panvel or any other city, so contact Warehouzez right away and put an end to your search for the right logistics firm in the country. Leave all of your warehousing, distribution, and supply chain management concerns to us, and watch your business thrive quickly with our amazing logistical facilities.
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