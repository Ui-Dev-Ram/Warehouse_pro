import React from 'react'
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuWarehouse } from "react-icons/lu";
import { FaRegHandshake, FaRoad } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import { IoAirplane } from "react-icons/io5";
import { RiShipFill } from "react-icons/ri";

const OurSpecialization = () => {
  return (
    <div className='flex flex-col text-center mt-10 lg:mt-20'>
        <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
            Our Specialization
        </h2>
        <p className='block antialiased font-sans text-sm lg:text-xl font-normal leading-relaxed mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8'>
            Enlisted below are the domains we expertise in
        </p>
        <div className="flex flex-wrap justify-center mt-14 mb-6">
            <div className="m-2 mb-12 text-center w-28 lg:w-60">
               <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                    <MdOutlineManageAccounts className="m-auto text-[24px] relative top-[8px]" />
               </div>
               <h3 className='mt-3 w-full m-auto text-center font-medium'>
                   Warehouse Operations Management 
               </h3>
               
            </div>
            <div className="m-2 mb-12 text-center w-28 lg:w-60">
               <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                    <TbBuildingWarehouse className="m-auto text-[24px] relative top-[8px]" />
               </div>
               <h3 className='mt-3 w-full m-auto text-center  font-medium'>
                 On-site Warehouse Operations
               </h3>
               
            </div>
            <div className="m-2 mb-12 text-center w-28 lg:w-60">
               <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                <FaTruckFast  className="m-auto text-[24px] relative top-[8px]" />
               </div>
               <h3 className='mt-3 w-full m-auto text-center font-medium'>
                   Third Party Logistics and Contract Logistics Facilities.

               </h3>
               
            </div>
            <div className="m-2 mb-12 text-center w-28 lg:w-60">
               <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                    <MdMiscellaneousServices  className="m-auto text-[24px] relative top-[8px]" />
               </div>
               <h3 className='mt-3 w-full m-auto text-center font-medium'>
                  Services in Logistics Automation and other tech related services.

               </h3>
               
            </div>
            <div className="m-2 mb-12 text-center w-28 lg:w-60">
               <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                     <LuWarehouse className="m-auto text-[24px] relative top-[8px]" />
               </div>
               <h3 className='mt-3 w-full m-auto text-center font-medium'>
                 Supply Chain Management.
               </h3>
               
            </div>
            <div className="m-2 mb-12 text-center w-28 lg:w-60">
               <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                 <FaRegHandshake className="m-auto text-[24px] relative top-[8px]" />
               </div>
               <h3 className='mt-3 w-full m-auto text-center font-medium'>
                    Trade Consultancy / Warehouse Advisory.
               </h3>
               
            </div>
            <div className="m-2 mb-12 text-center w-28 lg:w-60">
               <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                     <CiBoxes className="m-auto text-[24px] relative top-[8px]"/>
               </div>
               <h3 className='mt-3 w-full m-auto text-center font-medium'>
                  Infrastructure and Space Management.
               </h3>
               
            </div>
        </div>
        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3'>
             We assist our customers with their urgent shipping needs (as and when required). We are a dedicated group of professionals with a high level of motivation and coherence. Our 'Customer Driven Approach' makes Warehouzez the Digital Supply Chain the most widely chosen logistics and warehousing company in the industry. Our objective is to build the trust of our clients and take care of their inventory in the best possible manner. Our experts are well- qualified and capable of handling all requirements and issues pertaining to your business. We deploy the latest technology like WMS and LMS in order to increase the operational control.
        </p>
        <div className='flex flex-col text-center mt-20'>
            <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                We offer world class transportation facilities across the country. Our transportation service include
            </h2>
            <div className="flex flex-wrap justify-center mt-14 mb-6">
                <div className="m-2 mb-12 text-center w-60">
                <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                        <IoAirplane className="m-auto text-[24px] relative top-[9px]" />
                </div>
                <h3 className='mt-3 w-full m-auto text-center font-medium'>
                     Air Freight Service
                </h3>
                
                </div>
                <div className="m-2 mb-12 text-center w-60">
                <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                        <RiShipFill className="m-auto text-[24px] relative top-[9px]" />
                </div>
                <h3 className='mt-3 w-full m-auto text-center  font-medium'>
                     Sea Transportation Service
                </h3>
                
                </div>
                <div className="m-2 mb-12 text-center w-60">
                <div className='bg-red w-11 h-11 m-auto text-center rounded-full text-white'>
                    <FaRoad  className="m-auto text-[24px] relative top-[9px]" />
                </div>
                <h3 className='mt-3 w-full m-auto text-center font-medium'>
                    Road Transportation Service
                </h3>
                </div>
            </div> 
        </div>
        
        <div className="flex flex-col text-left">
            <h3 className='font-bold text-lg mb-2'>
                We Want Your Business To Thrive!
            </h3>
            <p>
                We intend to make the business of our clients easy by offering them an authentic and reliable warehouse booking platform. Yes, you can reserve and book a warehouse for your business online!
            </p>
        </div>
        
        </div>
  )
}

export default OurSpecialization;