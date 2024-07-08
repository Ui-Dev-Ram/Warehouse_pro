"use client";
import React, { useState } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import networkofWarehouse from "@/data/networkofWarehouse.json" 



const NetworkofWarehouzez = () => {
  
  const [network, setNetwork] = useState(networkofWarehouse.networkofwarehouzez)

  return (
    <div className="flex flex-col my-12">
       <div className="items-center justify-center text-center sm:flex mb-8">
        <h2 className="text-md font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
           Network of Warehouzez Across India
        </h2> 
      </div>
      <div className="container m-auto">
        <div className="flex justify-normal items-start gap-x-5 mx-5 mb-5 px-4 flex-wrap">
          {
              network.map((network, index) => {
                return(
                <LinkPreview key={index}
                  url= {`${network.link}`}
                  className="font-normal lg:border-r-2  w-[90px] lg:w-[120px] text-center pr-3 bg-clip-text mb-4 text-transparent text-black hover:text-red">
                  {network.title}
                </LinkPreview>
              )
              }) 
          }
        </div>
      </div>
    </div>

  )
}

export default NetworkofWarehouzez;