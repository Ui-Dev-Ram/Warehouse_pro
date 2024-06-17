"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
 

const NetworkofWarehouzez = () => {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
    
      <LinkPreview url="https://www.warehouzez.com/warehouse-in-ghaziabad" className="font-bold">
        Tailwind CSS
      </LinkPreview>
      <LinkPreview
        url="https://www.warehouzez.com/warehouse-in-whitefield"
        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
      >Aceternity UI
      </LinkPreview>
    
  </div>
  )
}

export default NetworkofWarehouzez;