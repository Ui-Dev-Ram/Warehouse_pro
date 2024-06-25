"use client";
 
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ServiceListing from "@/data/3plServicesListing.json"

const OurBouquetListing = () => {
   
  const [services, setService] = useState(ServiceListing.serviceServicesListing);  
 
  return (
     <div className="p-5">
        <div className="flex flex-col lg:flex-row gap-x-2 lg:gap-x-10">
                    {
                    services.map((i, index) => {
                        return(
                            <CardContainer key={index} className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                                    <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                    {i.title}
                                    </CardItem>
                                    <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 lg:h-24 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
                                    >
                                    {i.description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={i.img}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    </CardItem>
                                    
                                    <div className="flex justify-end items-center mt-10">
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Read More
                                    </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        )
                    })  
                    }
        </div>
 
        <div className="flex items-center flex-col gap-y-5 lg:flex-row justify-center gap-x-12 my-7">
            <p className="font-medium">Our list of services does not end here. Find out how we can help you and your business</p>
            <button className="text-sm bg-red text-white px-6 font-bold py-3 hover:bg-white hover:text-red rounded-full border-2 border-red">
                More Services
            </button>
        </div>

        
     </div>

  
  )
}

export default OurBouquetListing;