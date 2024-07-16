import React from 'react'
import Image from 'next/image'
import { PiWarehouse } from "react-icons/pi";

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
                        Warehouse-in-bangalore
                      </p>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-7xl mb-10">
                      Warehouse in  <br />
                      <span className='text-red'>Bangalore</span>
                  </h1>

                  <p className=" block antialiased font-sans lg:text-base leading-relaxed text-gray-700 text-justify font-normal text-sm md:text-md xl:text-lg mb-10">
                      Warehouzez - All Inclusive Warehousing and Logistics Partner in Bangalore! <br />
                      Undeniably, the demand for warehousing services in Bangalore is increasing rapidly.<br />
                      Bangalore is deemed as one of the greatest consumer marketplace in the country.
                      
                  </p>

                  <div className="space-y-5 lg:space-x-5 mb-10">
                      <a href="#" className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                        ENQUIRY
                      </a>
                  </div>
              </div>

              <div className="flex mx-auto lg:mx-0 align-middle">
                  <Image src="/our-presence/bangalore.png" className='f-3/4 m-auto' width={500} height={500} alt="Image" />
              </div>
          </div>
          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            This is because it is a hub for several foreign e-commerce giants like Amazon, Walmart, Flipkart, Target, and so much more. Bangalore is host to various I.T. related corporations too. Since the past couple of decades, Bangalore's e-commerce development has driven up the demand for warehouse spaces. Warehouse in Bangalore could be the answer for all of the companies looking for infrastructure and domestic place to store their inventory safely. However, finding the proper organisation that can provide excellent warehouse and distribution facilities as well as provide warehouse for rent in Bangalore.
          </p>

          <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-10'>
            Top-Rated Warehousing Company
          </h2>

          <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
            Furthermore, it is necessary to note that the demand for warehouse space in various metro cities has particularly increased after the lockdown. Since the time of the pandemic, demand for warehousing companies in Bangalore has grown tremendously. Conglomerates and entrepreneurs search for warehouses for storage so that storage and distribution of stocks can take place easily. Warehouzez is indeed the best warehousing and logistics services provider in the country. We have a substantial understanding of how to tackle all types of issues that arise in various supply chain management activities.
          </p>
        </div>
        
      </div>
      
      <section className="bg-white py-10 md:py-16 xl:relative mt-40">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-end">
                  <div className='flex-1'>
                    <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
                        <img src="/our-presence/feature-img.png" alt="Feature img" />
                    </div>
                  </div>
                    
                    <div className="flex-1">
                        <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                          Premium Storage Services in<br />
                          Bangalore
                        </h1>

                        <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify">
                          Warehouzez offers remarkable warehouse storage facilities in Bangalore and all the other metropolitan cities. If you are looking for a warehouse for storage in Bangalore, then we have got you covered. All our warehouses are equipped with the latest technology and machinery. In addition to that, we also provide warehousing services for the apparel industry and many other industries too. For perishable items, we have special provisions like cold and temperature-controlled storage solutions. and we can suggest you the best methods for managing your inventory and optimising your supply chain.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-16">
                            <div className="mb-5 md:mb-0">
                                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl mb-4">
                                  <PiWarehouse className="feather feather-award text-info text-2xl" />
                                </div>

                                <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                                  63K Sqft
                                </h3>

                                <p className="font-light text-gray-400 text-md md:text-lg">
                                  Total Space
                                </p>
                            </div>

                            <div>
                                <div className="w-20 py-6 flex justify-center bg-red bg-opacity-5 rounded-xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-award text-red"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                </div>

                                <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">
                                  13K Sqft
                                </h3>

                                <p className="font-light text-gray-400 text-md md:text-lg">
                                  Space Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
      </section>
    </div>
  )
}

export default page