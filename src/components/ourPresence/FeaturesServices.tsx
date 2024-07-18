
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

        <div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
           <div className="col-span-12 lg:col-span-3 space-y-6">
              <div className="overflow-x-auto shadow-xl rounded-xl p-8">
                  <h3 className="flex items-center gap-x-2 justify-center antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3] text-blue-gray-900 my-3 text-center">
                    <FaComputer /> IT Infrastructure
                  </h3>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                      <td>
                        <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                          <FaCircleCheck />
                        </span>
                        </td>
                        <td>WMS Software</td>
                      </tr>
                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Telephone/Landline</td>
                      </tr>
                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">(Wi-Fi) interface</td>
                      </tr>
                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Computer & Printer</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Scanner</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Network Security</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-3 space-y-6">
              <div className="overflow-x-auto shadow-xl rounded-xl p-8">
                  <h3 className="flex items-center gap-x-2 justify-center antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3] text-blue-gray-900 my-3 text-center">
                  <MdOutlineSecurity /> Safety & Security
                  </h3>
                  <table className="table table-sm">
                    <tbody>
                    <tr>
                      <td>
                        <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                          <FaCircleCheck />
                        </span>
                        </td>
                        <td>CCTV Surveillance</td>
                      </tr>
                      <tr>
                      <td>
                        <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                          <FaCircleCheck />
                        </span>
                        </td>
                        <td>24X7 Security</td>
                      </tr>
                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">24X7 Access</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Fire Extinguishers</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Fire Hydrant</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Smoke Detector</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-3 space-y-6">
              <div className="overflow-x-auto shadow-xl rounded-xl p-8">
                  <h3 className="flex items-center gap-x-2 justify-center antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3] text-blue-gray-900 my-3 text-center">
                  <FaGears /> Services
                  </h3>
                  <table className="table table-sm">
                    <tbody>
                    <tr>
                      <td>
                        <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                          <FaCircleCheck />
                        </span>
                        </td>
                        <td>Pallet Storage</td>
                      </tr>
                      <tr>
                      <td>
                        <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                          <FaCircleCheck />
                        </span>
                        </td>
                        <td>Carton Pick</td>
                      </tr>
                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Order Fulfillment</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Distribution</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Labeling</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Quality Checks</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-3 space-y-6">
              <div className="overflow-x-auto shadow-xl rounded-xl p-8">
                  <h3 className="flex items-center gap-x-2 justify-center antialiased tracking-normal font-sans text-xl font-semibold leading-[1.3] text-blue-gray-900 my-3 text-center">
                    <TbTools /> Equipment
                  </h3>
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                      <td>
                        <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                          <FaCircleCheck />
                        </span>
                        </td>
                        <td>Pallet Racks</td> 
                      </tr>
                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Industrial Shelving</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Forklifts</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Pallet Jacks</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Dock Plates</td>
                      </tr>

                      <tr>
                        <td>
                          <span className='material-design-icon check-circle-icon text-red flex justify-end'>
                            <FaCircleCheck />
                          </span>
                        </td>
                        <td className="text-left">Industrial Scales</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
           </div>
        </div>
       
    </div>
  )
}

export default FeaturesServices