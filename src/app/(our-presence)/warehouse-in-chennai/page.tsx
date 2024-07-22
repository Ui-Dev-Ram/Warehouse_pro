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
const WarehouseLocation = "https://goo.gl/maps/Ky6jLT6Ef8ZncG6F8";

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
                        Warehouse-in-Chennai
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Chennai</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                      Warehouzez: Premium Quality Logistics and Warehouse Services<br /> for Every Business!
                      Chennai, the capital of the Indian state of Tamil Nadu,<br /> is the country's largest industrial,
                      manufacturing, and commercial hub. 
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src="/our-presence/chennai.png" className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            <span className='text-4xl font-bold text-red pr-0.5'>I</span>t certainly holds the top spot for having a thriving industrial base and infrastructure, along with a rapidly growing economy. The economic growth of this city is significantly related to its seaport and transportation facilities, which are regarded as one of the greatest in the country. Additionally, the city is home to a slew of industrial sectors like automotive and spare parts, wind, solar, and telecom, among others. It is a highly developed city that is constantly expanding, resulting in a growing need for warehouse in Chennai.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Excellent Warehousing Services
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            The demand for warehouse services in Chennai is set to skyrocket, thanks to strong expansion in the manufacturing and e-commerce industries. Businesses from all verticals searching for a should straight away get in touch with Warehouzez. Undeniably, Warehouzez is the premier warehousing and logistics company in India. We seek to modernize the supply chain and foster an on-demand warehousing culture in India. Almost all of our warehouses in India are strategically located, and have best-in-class infrastructure. We employ the latest technologies, software, and systems to deliver state-of-the-art warehousing services. We ensure inventory accuracy, safety, and transparency at all levels of our operations. We offer end-to-end storage, distribution, inventory management, and 3PL logistics services to our businesses from different industries. We also provide cold-storage and temperature-controlled warehousing for perishable products. We intend to optimize inventory movement and successfully handle all aspects of the supply chain. With Warehouzez as your 3PL partner, you can surely rest assured of all your logistical as well as supply chain concerns!
          </p>
          
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Why Choose Warehouzez as Your Most Trusted 3PL Partner in Chennai?
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez holds the top spot in the list of logistics companies in India. We can completely optimize your supply chain, and deliver comprehensive storage, distribution, e-commerce fulfillment, and other related services.
          </p>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Warehouzez is the leading provider of third-party logistics and warehouse services in Chennai. We extend a comprehensive range of service offerings that are specifically designed to meet the unique needs of our clients. We have a team of experienced professionals who are dedicated to providing the highest level of service possible. What sets us apart from other providers of logistics and warehousing services is our commitment to customer satisfaction. Our service offerings are cost-effective and affordable. We go above and beyond to make sure that our clients are happy with the services we provide. We are always available to answer any questions or concerns you may have.
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
                            Warehouse and Inventory <br /> Management Solutions
                        </h2>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                            Our warehouse in Chennai can provide you with best-in-class storage facilities where you can safely store your inventories. We also provide on-demand warehousing services. This is incredibly cost-effective because it eliminates the need for extra expansion and reduces storage costs. Warehouzez, a 3PL service provider, offers tech-enabled warehouse spaces that are managed by experts.
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
                                    27K Sqft
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
                    As a result, you not only have access to warehousing services, but also to expert assistance. Additionally, we also provide inventory management solutions, that is, efficiently managing the stored product inventory. We employ our in-house warehouse management software, which enables us to effectively handle inventory and keep a track of it through a centralized system. This is helpful for forecasting sales and avoiding product shortages. You can always meet your customers' needs if you have good inventory management.
                </p>
            </div>           
      </section>

      <div className="container max-w-screen-xl mx-auto">
        <div className="lg:m-5">
          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2'>
          Here is a List Of Some of Our Key Features and Offerings
          </h2>

          <ul className='flex items-center flex-wrap gap-y-5 mt-4'>
              <li className='w-full'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Cost- effective and strategically located Warehouses in Chennai and other major cities
                  </span>
                </div>
              </li>

              <li className='w-full'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    CCTV surveillance and fire safety features are available 24 hours a day, 7 days a week.
                  </span>
                </div>
              </li>

              <li className='w-full'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Software tools, advanced and ultra-modern technology, solid infrastructure, and the finest material handling equipments are all available.
                  </span>
                </div>
              </li>

              <li className='w-full'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Efficient transportation and distribution facilities.
                  </span>
                </div>
              </li>

              <li className='w-full'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Real-time tracking updates.
                  </span>
                </div>
              </li>

              <li className='w-full'>
                <div className='flex items-center space-x-2'>
                  <span className='material-design-icon check-circle-icon text-red'>
                    <FaCircleCheck />
                  </span>
                  <span>
                    Real-time tracking updates.
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
          </ul>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Ultra-Modern Technologies and Innovative Solutions
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Using best practises, implementing strong and automated tools, upgrading software, and making technical advancements is always our topmost duty. In today's competitive business scenario, it is tough to stay afloat without the right technology partner. Warehouzez's efficient Warehouse Management System (WMS) can be a game changer for your business. Our in-house WMS provides significant benefits, not just operationally, but also gives you a competitive advantage. Some potential benefits of our technological solutions and WMS include- increased accuracy of inventory, increased data visibility for better decision making, and demand forecasting. With this system, you can track your inventory in real-time, meaning you will never have to worry about losing track of your products again.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Cost-Effective Solutions
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Partnering with a 3PL service provider like Warehouzez can be extremely beneficial and cost-efficient for your business. We can handle all of the major operations like warehousing, inventory management, picking, packing, and shipping. This allows you to reduce your in-house expenses while also improving your bottom line.
          </p>

          <FeaturesServices />
          <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-6 space-y-6">
            <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                Value-Added Services
            </h2>
            <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Apart from core logistics and warehouse services, we also provide a wide range of value-added services, like:
            </p>

                <ul className='flex flex-col mt-4 gap-y-4'>
                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1' />
                        </span>
                        <span>
                            Processing Delivery Orders
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                            Barcoding and Serialization
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                            Labelling and MRP Printing
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'  />
                        </span>
                        <span>
                            Kitting, Assembly, and Product Customization
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Vendor Management
                        </span>
                        </div>
                    </li>

                    <li className='w-full'>
                        <div className='flex space-x-2 items-baseline'>
                        <span className='material-design-icon check-circle-icon text-red'>
                            <FaCircleCheck className='relative top-1'/>
                        </span>
                        <span>
                            Inventory Management
                        </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 space-y-6">
                <OurVideo />
            </div>
        </div>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            If you are looking for a warehouse in Chennai, Warehouzez is the best choice to make! Warehouzez has decades of experience and expertise in the logistics and warehousing industry along with a broad grasp of how to accomplish specific objectives such as potential savings, organizational growth, client- centric initiatives, and increased customer satisfaction.
        </p>

        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'> 
            Our state-of-the-art warehouses are fitted with smart devices and the most up-to-date software systems. We offer a wide range of services like Warehouse Management, Distribution and Transportation, Supply Chain Management, Third Party Logistics services and so on. Elevate the success of your business with Warehouzez!
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