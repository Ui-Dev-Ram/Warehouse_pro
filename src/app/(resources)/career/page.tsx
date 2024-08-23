
import Blog from "@/components/home/blog/Blog";
import LookingForBest from "@/components/home/lookingForBest/LookingForBest";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { LuSmartphone } from "react-icons/lu";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div>
			<div className="container m-auto">
				<div className="m-5">
					<div className="flex">
						<div className="flex flex-col lg:flex-1">
							<h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:mt-5 lg:mb-10 text-center'>
                        Career
							</h1>
						</div>  
					</div>

					<div id="hero" className="pt-5 lg:flex items-center">
						<div className="sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
							<div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
								<h1 className="text-2xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                            Be Part of our mission
								</h1>
								<p className="mt-4 xl:mt-2">
                            We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
								</p>
							</div>

							<div className="flex-1">
								<div className="flex flex-col lg:flex-row gap-x-5">
									<div className="lg:flex-1">
										<div className="relative mt-4 md:mt-0 lg:mt-4">
											<div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
												<LuUser2 />
											</div>
											<input
												type="text"
												className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
												placeholder="First Name"
											/>
										</div>
									</div>
									<div className="lg:flex-1">
										<div className="relative mt-4 md:mt-0 lg:mt-4">
                                       
											<input
												type="text"
												className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded"
												placeholder="Last Name"
											/>
										</div>
									</div>
								</div>

								<div className="flex flex-col lg:flex-row gap-x-5">
									<div className="flex-1">
										<div className="relative mt-4">
											<div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
												<HiOutlineMail />
											</div>
											<input
												type="text"
												className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
												placeholder="Email Address"
											/>
										</div>
									</div>
									<div className="flex-1">
										<div className="relative mt-4">
											<div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
												<LuSmartphone />
											</div>
											<input
												type="text"
												className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
												placeholder="Phone Number"
											/>
										</div>
									</div>
								</div>

								<div className="flex flex-col mt-4">
									<input type="file"
										className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
									<p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
								</div>
                       
								<div>
									<button className="transition-all duration-300 mt-5 w-full border border-transparent rounded-full font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-red text-gray-100 hover:bg-red hover:text-gray-200">
                                Send Resume
									</button>
								</div>
							</div>
						</div>
						<div className="mt-6 w-full flex-1 lg:mt-0">
							<Image
								className="hidden lg:block"
								src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85"
								alt="Career image"
							/>
						</div>
					</div>
				</div>
			</div>
			<Blog />
			<NetworkofWarehouzez />
			<LookingForBest />
		</div>
	);
};

export default page;
