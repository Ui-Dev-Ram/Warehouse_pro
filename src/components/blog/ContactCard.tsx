import React from 'react'
import { GlareCard } from "@/components/ui/glare-card";
import Link from 'next/link';

const ContactCard = () => {
  return (
    <Link href="tel:+919999615962" className='w-full'>
        <GlareCard className="flex flex-col items-center justify-end relative">
        
            <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
    
        

        <div className="absolute text-white top-0 bottom-0 right-0 left-0 flex flex-col gap-y-5 justify-center items-start pl-14 z-[99999]">
            <h1 className='font-bold text-2xl'>
                Warehouse & <br /> Logistics Services
            </h1>
            <button className='bg-red hover:bg-red text-white text-sm font-bold py-3 px-4 rounded-full'>
                Contact Now
            </button>
        </div>
    </GlareCard>
  </Link>
  )
}

export default ContactCard