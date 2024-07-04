"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Temperature Controlled Warehouses",
      value: "Temperature Controlled Warehouses",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4 items-center">
             <div className="col-span-2">
                <p className="text-2xl mb-5 font-normal">Temperature Controlled Warehouses</p>
                <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-justify">
                    Warehouzez the Digital Supply Chain provide special solutions for freight that require temperature controlled warehousing. Depending upon the business needs and temperature specifications, we provide the right infrastructure to our clients. We ensure to meet all the requirements of inventory management and dispatches.
                </p>
             </div>
             <div className="col-span-1">
                <Temperature />
             </div>
          </div>
        </div>
      ),
    },
    {
      title: "Shared Warehouse Spaces",
      value: "Shared Warehouse Spaces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="col-span-2">
                <p className="text-2xl mb-5 font-normal">Shared Warehouse Spaces</p>
                <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-justify">
                    Warehouzez the Digital Supply Chain offers shared warehouse spaces in a variety of locations across the country. All our services are reliable and cost - effective. We also offer other value- added services like real time inventory visibility and distribution of items.
                </p>
            </div>
            <div className="col-span-1">
                <Shared />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dedicated Warehouse Spaces",
      value: "Dedicated Warehouse Spaces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="col-span-2">
            <p className="text-2xl mb-5 font-normal">Dedicated Warehouse Spaces</p>
            <p className="block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-justify">
                Warehouzez the Digital Supply Chain provides warehousing solutions that are customized to the needs of each customer. Our team of experts provide digital and simple- to- manage solutions. We strive to expand our technological reach.Our other services include -
            </p>

            <div className="flex mt-4">
                    <div className="flex-1">
                        <ul role="list" className="space-y-2">
                            <li className="flex space-x-1">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-400 dark:text-rose-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-base font-medium leading-tight dark:text-white">
                                Inventory Management
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-rose-400 dark:text-rose-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span className="text-base font-medium leading-tight dark:text-white">
                                Planning, arranging and managing the transportation needs.

                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
              <Dedicated />
            </div>
          </div>
        </div>
      ),
    },   
  ];

  return (
    <div className="h-[20rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const  Temperature = () => {
  return (
    <Image
      src="/services/Temperature_Controlled_Warehouses.jpg"
      alt="dummy image"
      width="500"
      height="500"
      className="object-cover object-left-top h-[100%] md:h-[100%] -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const  Shared = () => {
    return (
      <Image
        src="/services/Shared_Warehouse_Spaces.jpg"
        alt="dummy image"
        width="500"
        height="500"
        className="object-cover object-left-top h-[100%] md:h-[100%] -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const  Dedicated = () => {
    return (
      <Image
        src="/services/Dedicated_Warehouse_Spaces.jpg"
        alt="dummy image"
        width="500"
        height="500"
        className="object-cover object-left-top h-[100%] md:h-[100%] -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };