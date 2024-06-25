"use client";
import React, { useState } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import networkofWarehouse from "@/data/networkofWarehouse.json" 



const NetworkofWarehouzez = () => {
  
  const [network, setNetwork] = useState(networkofWarehouse.networkofwarehouzez)

  return (
    <div className="flex flex-col my-12">
       <div className="max-w-7xl items-center justify-center text-center sm:flex sm:pe-6 lg:pe-8 xl:mt-14 mb-8">
        <h2 className="max-w-xl text-md font-bold tracking-tight text-gray-900 sm:text-3xl">
           Network of Warehouzez Across India
        </h2> 
      </div>
      <div className="flex justify-normal items-start gap-x-5 mx-5 mb-5 px-4 flex-wrap">
        {
            network.map((network, index) => {
              return(
              <LinkPreview key={index}
                url= {`${network.link}`}
                className="font-normal bg-clip-text mb-4 text-transparent text-black hover:text-red">
                {network.title}
              </LinkPreview>
             )
            }) 
        }
      </div>
    </div>

  )
}

export default NetworkofWarehouzez;