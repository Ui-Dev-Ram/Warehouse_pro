import React from 'react'
import { Meteors } from "@/components/ui/meteors";

const WeProvideReliableServices = () => {

  return (
    <div className='flex flex-col justify-center items-center text-center mb-14'>
        <div className="w-full">
          <div className="w-full relative">
          <div className='absolute bg-slate-900 opacity-60 left-0 right-0 bottom-0 top-0 z-10'></div>
            <div className="absolute h-full w-full bg-[url('/bg-service.jpg')] bg-left-top bg-no-repeat bg-cover" />
                <div className="relative shadow-xl border border-gray-800 px-4 py-14 h-full overflow-hidden flex flex-col justify-end items-start z-20">
                    <h2 className='text-white text-base sm:text-3xl font-bold m-auto'>We Provide a Reliable Services</h2>
                    <p className='w-3/4 m-auto mt-5 mb-14 text-white'>With 15 years of logistical experience and the sole aim of providing quality service to each one of our clients, we at Warehouzez - Supply chain are unparalleled in the most seamless movement of your cargo worldwide.</p>  
                    
                    <div className="mt-2 m-auto flex flex-wrap justify-center items-center gap-4">
                    <div className="flex bg-white h-28 w-52 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                        <div className="flex flex-row items-center justify-center">
                            <svg className="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
                                version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                            </svg>
                            <span className="font-bold text-black text-3xl"> 50+ </span>
                            <div className='text-black' x-data="animatedCounter(780, 200)" x-init="updatecounter" x-text="Math.round(current)"></div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">3PL partners</div>
                    </div>

                    <div className="flex bg-white h-28 w-52 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                        <div className="flex flex-row items-center justify-center">
                            <svg className="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
                                version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                            </svg>
                            <span className="font-bold text-black text-3xl"> 2M+ </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Sqft storage</div>
                    </div>

                    <div className="flex bg-white h-28 w-52 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                        <div className="flex flex-row items-center justify-center">
                            <svg className="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
                                version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                            </svg>
                            <span className="font-bold text-black text-3xl"> 400+ </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Customer base</div>
                    </div>

                    <div className="flex bg-white h-28 w-52 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
                        <div className="flex flex-row items-center justify-center">
                            <svg className="mr-3 fill-gray-500/95" xmlns="http://www.w3.org/2000/svg"
                                version="1.1" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                            </svg>
                            <span className="font-bold text-black text-3xl"> 560M+ </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">Transactions</div>
                    </div>
                    
                </div>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={50} />
                </div>
          </div>
        </div>
    </div>
    
  )
}

export default WeProvideReliableServices