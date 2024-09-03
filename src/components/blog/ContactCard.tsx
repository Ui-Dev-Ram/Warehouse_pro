import React from "react";
import { GlareCard } from "@/components/ui/glare-card";
import Link from "next/link";
import Image from "next/image";

const ContactCard = () => {
	return (
		<Link href="tel:+919999615962" className='w-full'>
			<GlareCard className="flex flex-col items-center justify-end relative">
        
				<Image
					className="h-full w-full absolute inset-0 object-cover"
					src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt='contact card image'
					width={250}
					height={250}
				/>
    
				<div className="absolute text-white top-0 bottom-0 right-0 left-0 flex flex-col gap-y-5 justify-center items-start pl-14 z-[99999]">
					<h3 className='font-bold text-2xl contact-card'>
                Warehouse & <br /> Logistics Services
					</h3>
					<button className='bg-red hover:bg-red text-white text-sm font-bold py-3 px-4 rounded-full'>
                Contact Now
					</button>
				</div>
			</GlareCard>
		</Link>
	);
};

export default ContactCard;
