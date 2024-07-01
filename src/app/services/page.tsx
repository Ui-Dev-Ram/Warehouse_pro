
import React from 'react'
import Image from 'next/image'
import aboutImg from '/public/aboutus/about.jpg'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import OurSpecialization from '@/components/home/our-bouquet-of-3PL-services/OurBouquetListing'
import SafetyOfYourInventory from '@/components/aboutus/SafetyOfYourInventory'

const page = () => {
  return (
    <div>
        <InnerHeroBanner />
        <div className="container m-auto">
          <div className="m-5">
              <div className="flex">
                  <div className="flex flex-col lg:flex-1">
                    <div className="text-center">
                      <h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                          Our Services
                        </h2>
                      <p className='mt-0'>We Are Optimists Who Love To Work Together</p>  
                    </div>

                    <div className="flex flex-wrap gap-x-10 justify-center">
                       <div className="w-64">
                        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
                              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red transition-all duration-300 group-hover:scale-[10]"></span>
                                  <div className="relative z-10 mx-auto max-w-md">
                                      <span className="grid h-20 w-20 place-items-center rounded-full bg-red transition-all duration-300 group-hover:bg-red">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                          </svg>
                                      </span>
                                      <div
                                          className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                          <h2 className='text-md font-bold'>
                                            Third Party Logistics
                                          </h2>
                                          <p>
                                            Warehouzez The Digital Supply Chain is indeed the best third party logistics firm in the industry.
                                          </p>
                                      </div>
                                      <div className="pt-5 text-base font-semibold leading-7">
                                          <p>
                                              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
                                                Read More
                                                  &rarr;
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                        </div>
                       </div>

                       <div className="w-64">
                        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
                              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red transition-all duration-300 group-hover:scale-[10]"></span>
                                  <div className="relative z-10 mx-auto max-w-md">
                                      <span className="grid h-20 w-20 place-items-center rounded-full bg-red transition-all duration-300 group-hover:bg-red">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                          </svg>
                                      </span>
                                      <div
                                          className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                          <h2 className='text-md font-bold'>
                                             On-demand Warehousing
                                          </h2>
                                          <p>
                                            Warehouzez The Digital Supply Chain is indeed the best third party logistics firm in the industry.
                                          </p>
                                      </div>
                                      <div className="pt-5 text-base font-semibold leading-7">
                                          <p>
                                              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
                                                Read More
                                                  &rarr;
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                        </div>
                       </div>

                       <div className="w-64">
                        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
                              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red transition-all duration-300 group-hover:scale-[10]"></span>
                                  <div className="relative z-10 mx-auto max-w-md">
                                      <span className="grid h-20 w-20 place-items-center rounded-full bg-red transition-all duration-300 group-hover:bg-red">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                          </svg>
                                      </span>
                                      <div
                                          className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                          <h2 className='text-md font-bold'>
                                            Contract Logistics
                                          </h2>
                                          <p>
                                            Warehouzez The Digital Supply Chain is indeed the best third party logistics firm in the industry.
                                          </p>
                                      </div>
                                      <div className="pt-5 text-base font-semibold leading-7">
                                          <p>
                                              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
                                                Read More
                                                  &rarr;
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                        </div>
                       </div>

                       <div className="w-64">
                        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
                              <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                  <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-red transition-all duration-300 group-hover:scale-[10]"></span>
                                  <div className="relative z-10 mx-auto max-w-md">
                                      <span className="grid h-20 w-20 place-items-center rounded-full bg-red transition-all duration-300 group-hover:bg-red">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                          </svg>
                                      </span>
                                      <div
                                          className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                          <h2 className='text-md font-bold'>
                                             Warehousing & Distribution
                                          </h2>
                                          <p>
                                            Warehouzez The Digital Supply Chain is indeed the best third party logistics firm in the industry.
                                          </p>
                                      </div>
                                      <div className="pt-5 text-base font-semibold leading-7">
                                          <p>
                                              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
                                                Read More
                                                  &rarr;
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                        </div>
                       </div>

                      
                    </div>
                    

                     
                  </div>
              </div>
          </div>
       </div>
    </div>
  )
}

export default page