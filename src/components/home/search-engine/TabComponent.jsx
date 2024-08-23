"use client";

import {useEffect, useRef, useState} from "react";

const TabComponent = ({ items }) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const firstBtnRef = useRef();

	useEffect(() => {
		firstBtnRef.current.focus();
	}, []);

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='flex flex-col gap-y-2 w-full'>       
				<div className='w-52 bg-lightRed p-1 rounded-full flex justify-between items-center gap-x-2 font-bold text-white'>
					{items.map((item, index)=> (
						<button onClick={() => setSelectedTab(index)} ref={index === 0 ? firstBtnRef : null } key={index} 
							className={`outline-none w-full text-sm md:text-base p-2 hover:bg-red-300 rounded-full text-center text-slate-500 focus:bg-white hover:text-black focus:text-black ${selectedTab === index ? "bg-white text-black focus:text-black" : "" }`}>
							{item.title}
						</button>
					))}
				</div>
				<div>
					{items.map((item, index) => (
						<div key={index} className={`${selectedTab === index ? "" : "hidden"}`}>
							{item.content}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TabComponent;
