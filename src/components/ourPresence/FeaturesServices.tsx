import React from "react";
import { Meteors } from "@/components/ui/meteors";

import { FaCircleCheck } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { TbTools } from "react-icons/tb";

const FeaturesServices = () => {

  return (
    <div>
        <h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10 text-center">
          Features and Services
        </h2>

        <div className="flex gap-x-4 mt-8">
          <div className="flex-1 relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
               
                <h3 className="flex items-center gap-x-3 font-semibold text-xl text-white mb-4 relative z-50">
                  <FaComputer className="text-white text-2xl" />  IT Infrastructure
                </h3>
      
                <ul className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  WMS Software
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Telephone/Landline
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  (Wi-Fi) interface
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Computer & Printer
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Scanner
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Network Security
                </li>


              </ul>
      
                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
          </div>

          <div className="flex-1 relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
              <h3 className="flex items-center gap-x-3 font-semibold text-xl text-white mb-4 relative z-50">
                <MdOutlineSecurity /> Safety & Security
              </h3>
    
              <ul  className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  CCTV Surveillance
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  24X7 Security
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  24X7 Security
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Fire Extinguishers
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Fire Hydrant
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Smoke Detector
                </li>


              </ul>
    
              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>

          <div className="flex-1 relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
              <h3 className="flex items-center gap-x-3 font-semibold text-xl text-white mb-4 relative z-50">
                <FaGears /> Services
              </h3>
              <ul  className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Pallet Storage
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Carton Pick
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Order Fulfillment
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Distribution
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Labeling
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Quality Checks
                </li>


              </ul>
    
              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>

          <div className="flex-1 relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
              <h3 className="flex items-center gap-x-3 font-semibold text-xl text-white mb-4 relative z-50">
                <TbTools /> Equipment
              </h3>

              <ul  className="flex flex-col gap-y-3">
                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Pallet Racks
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Industrial Shelving
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Forklifts
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Dock Plates
                </li>

                <li className="flex items-center gap-x-4 text-white">
                  <span className='material-design-icon check-circle-icon text-white flex justify-end'>
                    <FaCircleCheck />
                  </span>
                  Industrial Scales
                </li>
              </ul>
    
              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>  
    </div>
  )
}

export default FeaturesServices