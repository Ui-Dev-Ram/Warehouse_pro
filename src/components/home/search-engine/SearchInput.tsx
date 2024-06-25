"use client";

import { useState } from "react";
import PlaceholdersAndVanishInput  from "@/components/ui/placeholders-and-vanish-input";
import { TbBuildingWarehouse } from "react-icons/tb";
import networkofWarehouse from "@/data/networkofWarehouse.json" 


export default function PlaceholdersAndVanishInputDemo() {

  const [network, setNetwork] = useState(networkofWarehouse.networkofwarehouzez)

  const placeholders = [''];

  {
    network.map((network, index) => {
      console.log({network})
      return(
        <>
        {
          placeholders.push(`Search "Warehouse in ${network.title}"`)
        }
          
         
        </>
        
     )
    }) 
}
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="relative flex flex-col justify-center items-center">
      <TbBuildingWarehouse className="absolute size-6 z-10 left-6 text-slate-700 hidden sm:block" />
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}