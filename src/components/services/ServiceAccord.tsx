"use client";

import React, {useState} from "react";
import AccordTab from "@/components/home/frequentlyAskedQuestion/AccordTab";
import ServicesAccord from "@/data/serviceAccord.json";

const ServiceAccord = () => {
	const[open, setOpen] = useState<boolean>(true);  
	const[freqData, setFreqData] = useState(ServicesAccord.serviceAccord);

	return (
		<div className='container m-auto'>
			<h2 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2 text-center my-8'>Frequently Asked Questions</h2>
			<div className="flex flex-col justify-center item-center my-8 mx-auto px-6 lg:px-20">
				{
					freqData.map((freqDatas, index) => {
						return(
							<AccordTab key={index} i={index} title={freqDatas.title} subtitle={freqDatas.description} isOpen={open} setIsOpen={setOpen} /> 
						);
					})
				}
			</div>
		</div>
	);
};

export default ServiceAccord;
