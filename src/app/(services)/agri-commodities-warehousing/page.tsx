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
                        Agricultural Commodities Warehousing
						</h1>
					</div>
					<div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4 mb-5">
						<div className="col-span-2">
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Warehouzez specializes in the division of commodities. We provide a agricultural commodity value chain to a wide range of stockholders, corporates, traders and so on. We offer a variety of services related to agricultural commodities storage like sample quality, pest control service and collateral management. Almost all our warehouses are strategically positioned and designed to meet the needs of all individuals. In all probability, we concentrate on our goal of "providing the high quality services" to all our customers. We expertise in most essential operations of Commodities Trade Warehousing, management of finances and quality accreditation.
							</p>
                        
							<Image alt="" src="/services/agri-commodities-warehousing.jpg" width={750} height={750} className='w-100' />
                        
							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5'>
                            Warehouse Service Network With A Broad Reach
							</h2>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Our top- of- the- line warehousing services, quality assurance and certification, security management system and trade finance services are widely known throughout the country. The majority of our clients who use our warehouse services, also avail our transportation services.
							</p>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            We use ultra- modern technology to provide the best storage facilities. Apart from that, we have our warehouses in over 70 locations in India like Delhi, Mumbai, Kolkata etc. We store all the commodities including the seasonal commodities.
							</p>

							<div className="relative">
								<CoverdHandled />
							</div> 

							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5'>
                            Key Offerings
							</h2>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-2'>
                            Enlisted below is a list of all key offerings of Warehouzez under Commodities Storage Facility.
							</p>

							<ul role="list" className="space-y-5 mt-5">
								<li className="flex space-x-3">
									<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
									<span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Well- kept and maintained warehouses
									</span>
								</li>
								<li className="flex space-x-3">
									<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
									<span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Warehouses with cold storage facility
									</span>
								</li>
								<li className="flex space-x-3">
									<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
									<span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Checks on quality of the commodities
									</span>
								</li>
								<li className="flex space-x-3">
									<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
									<span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        All of our warehouses are well-protected with 24-hour manned security, fire extinguishers and CCTVs.
									</span>
								</li>
								<li className="flex space-x-3">
									<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
									<span className="text-sm lg:text-base font-medium leading-tight text-gray-900 dark:text-white">
                                        Regular Sanitization and fumigation.
									</span>
								</li>
							</ul>
						</div> 
                    
						<div className='col-span-1'> 
							<AllService />
							<OnlineSupportForm />
						</div>
					</div>
               
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
