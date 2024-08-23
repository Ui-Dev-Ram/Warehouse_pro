import Blog from "@/components/home/blog/Blog";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import InnerHeroBanner from "@/components/innerHeroBanner/InnerHeroBanner";
import AllService from "@/components/services/AllService";
import CoverdHandled from "@/components/services/CoveredHandled";
import GetEnquiry from "@/components/services/GetEnquiry";
import OnlineSupportForm from "@/components/services/OnlineSupportForm";
import ServiceAccord from "@/components/services/ServiceAccord";
import VideoSection from "@/components/services/VideoSection";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div>
			<InnerHeroBanner />
			<div className="container m-auto">
				<div className="lg:m-5">
					<div className='mb-5'>
						<h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                        Reverse Logistics
						</h1>
					</div>
					<div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4">
						<div className="col-span-2">
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Warehouzez is one of the best Logistics Service Providers in the industry. We understand that indeed a crucial aspect of Supply Chain Management. In simple terms, it is a process of moving goods or products from the customers back to their sellers. Reverse Logistics is required for returning or recycling the goods.
							</p>
                        
							<Image alt="" src="/services/ecommerce-fulfillment.jpg" width={750} height={750} className='w-100' />
                        
							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                            Make Reverse Logistics Easy With Warehouzez
							</h2>
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            With Warehouzez's Warehouse, monitoring and controlling the flow of surplus, damaged or unneeded goods, products and equipment is a breeze. With the support of our digital solutions, our team of reverse logistics experts can expedite returns and reduce time for asset recovery.
							</p>
							<p>
                            Warehouzez's Reverse Logistics Solutions are cost - effective and provide customers with more satisfaction and transparency. We execute live tracking measures in order to improve your supply chain. We intend to achieve maximum asset retrieval at considerably lower costs. You can trust our warehouse services to provide the necessary method, staff, and technology so as to help you manage the complicated process of returns.
							</p>

							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                            Our Logistics Professionals
							</h2>

							<p>
                            We have experts who absolutely understand your business and its requirements. In all likelihood, our primary aim is the satisfaction of our customers. This is rightly demonstrated in our finest supply chain solutions. The customers can surely count on our team of professionals and cutting - edge technology to design the best and reliable reverse supply chain solutions as per their needs.
							</p>

							<div className="relative">
								<CoverdHandled />
							</div> 

							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                           Key Offerings
							</h2>
							<p>
                            Enlisted below is a list of all our major offerings under the service of Reverse Logistics -
							</p>
							<ul role="list" className="flex flex-wrap justify-between space-y-5 items-baseline mb-6 mt-5 lg:mt-0">
								<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
									<p className='flex items-center justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Receiving the Initial Return Request
										</span> 
									</p>
								</li>

								<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
									<p className='flex items-center justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Request for confirmation and verification
										</span> 
									</p>
								</li>

								<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
									<p className='flex items-center justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Arranging for Reverse Door to Door Transportation.
										</span> 
									</p>
								</li>

								<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
									<p className='flex items-center justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Receiving and Inspection
										</span> 
									</p>
								</li>

								<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
									<p className='flex items-center justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Testing and Reporting on demand
										</span> 
									</p>
								</li>

								<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
									<p className='flex items-center justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Repairing, mending and putting into order.
										</span> 
									</p>
								</li>
							</ul>
						</div> 
                    
						<div className='col-span-1'> 
							<AllService />
							<OnlineSupportForm />
						</div>
					</div>
                
					<ul role="list" className="flex flex-wrap space-y-5 items-baseline mb-6 mt-5 lg:mt-0"> 
						<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
							<p className='flex items-center justify-start  mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Repacking
								</span>
							</p>
						</li>
						<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
							<p className='flex items-center justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Sending the goods back to the customer or stock.
								</span>
							</p>
						</li>
						<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
							<p className='flex items-center justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Recycling
								</span> 
							</p>
						</li>
						<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
							<p className='flex items-center justify-start  mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        IT Solutions that work alongside
								</span> 
							</p>
						</li>
						<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
							<p className='flex items-center justify-start  mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Live tracking of orders
								</span> 
							</p>
						</li>
						<li className="flex flex-col space-x-3 w-full lg:w-[400px]">
							<p className='flex items-center justify-start  mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Highly secured transportation services
								</span> 
							</p>
						</li>
					</ul>
					<VideoSection />

					<p className="text-3xl text-center font-bold my-12 [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                    Your Business Is Indeed Important To Us!
					</p>
            
				</div>
			</div>
       
			<GetEnquiry />
			<ServiceAccord />
			<Blog />
			<NetworkofWarehouzez />
		</div>
	);
};

export default page;
