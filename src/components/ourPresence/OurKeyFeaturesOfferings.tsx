"use client";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import OurVideo from "@/components/ourPresence/OurVideo";

const OurKeyFeaturesOfferings = () => {
	return (
		<div>
			<div className="relative max-w-screen-xl mx-auto grid grid-cols-12 gap-x-6">
				<div className="col-span-12 lg:col-span-6 space-y-6">
					<h2 className="block antialiased tracking-normal font-sans text-2xl lg:text-2xl font-bold leading-[1.3] text-blue-gray-900 mb-2 mt-14">
                Our Key Features and Offerings
					</h2>
					<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                Here's a list of our key features and service offerings that sets us apart from other warehousing firms-
					</p>

					<ul className='flex flex-col mt-4 gap-y-4'>
						<li className='w-full'>
							<div className='flex items-center space-x-2'>
								<span className='material-design-icon check-circle-icon text-red'>
									<FaCircleCheck />
								</span>
								<span>
                            Top-of-the-range safety and security measures.
								</span>
							</div>
						</li>

						<li className='w-full'>
							<div className='flex items-center space-x-2'>
								<span className='material-design-icon check-circle-icon text-red'>
									<FaCircleCheck />
								</span>
								<span>
                            Modernized technology and latest digital tools.
								</span>
							</div>
						</li>

						<li className='w-full'>
							<div className='flex items-center space-x-2'>
								<span className='material-design-icon check-circle-icon text-red'>
									<FaCircleCheck />
								</span>
								<span>
                            Best-in-class warehousing solutions.
								</span>
							</div>
						</li>

						<li className='w-full'>
							<div className='flex items-center space-x-2'>
								<span className='material-design-icon check-circle-icon text-red'>
									<FaCircleCheck />
								</span>
								<span>
                            Outsourcing warehousing operations.
								</span>
							</div>
						</li>

						<li className='w-full'>
							<div className='flex items-center space-x-2'>
								<span className='material-design-icon check-circle-icon text-red'>
									<FaCircleCheck />
								</span>
								<span>
                            Global Supply Chain Management Technology.
								</span>
							</div>
						</li>

						<li className='w-full'>
							<div className='flex items-center space-x-2'>
								<span className='material-design-icon check-circle-icon text-red'>
									<FaCircleCheck />
								</span>
								<span>
                            Provide live inventory information
								</span>
							</div>
						</li>

						<li className='w-full'>
							<div className='flex items-center space-x-2'>
								<span className='material-design-icon check-circle-icon text-red'>
									<FaCircleCheck />
								</span>
								<span>
                            CCTV to manage your inventory in real time
								</span>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-span-12 lg:col-span-6 space-y-6">
					<OurVideo thumb="" />
				</div>
			</div>
       
		</div>
	);
};

export default OurKeyFeaturesOfferings;
