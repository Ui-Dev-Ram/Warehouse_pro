import React from "react";
import InnerHeroBanner from "@/components/innerHeroBanner/InnerHeroBanner";
import OnlineSupportForm from "@/components/services/OnlineSupportForm";
import Image from "next/image";
import VideoSection from "@/components/services/VideoSection";
import LetCheckoutOurIndustry from "@/components/home/Let-Checkout-Our-Industry/LetCheckoutOurIndustry";
import GetEnquiry from "@/components/services/GetEnquiry";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import Blog from "@/components/home/blog/Blog";
import { RiGlobalLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";
import IndustriesAccord from "@/components/industries/IndustriesAccord";
 
const page = () => {
	return (
		<div>
			<InnerHeroBanner />
			<div className="container m-auto">
				<div className="lg:m-5">
					<div className='mb-5'>
						<h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                        Exhibition and Entertainment Warehousing
						</h1>
					</div>
					<div className="grid grip-rows-2 lg:grid-cols-3 items-start lg:gap-4 mb-8">
						<div className="col-span-2">
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            The gaming and other entertainment industries are witnessing tremendous growth. These industries have successfully outperformed all the other industries in the country. The two most notable cities where the aforementioned industries are growing at an exponential rate include Noida and Pune. With this incredible opportunity of growth for Exhibition and Entertainment business, there is also a challenge to maintain consistency and efficiency. To strike a balance between demand and supply is absolutely necessary for these industries. To thrive in the industry, most of the Exhibition and Entertainment firms rely on the services of a logistics service provider.
							</p>
                      
							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                        High-Quality Logistics Solutions For Project Management And Event Management
							</h2>
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        Warehouzez focuses on a wide range of challenges that the Exhibition and Entertainment industry face like handling of sensitive and high- value entertainment equipments, changing transit cycles and so on. Our specialized International Freight Forwarding are focused on the timely delivery of your expensive and delicate gear and equipment to the designated locations. Warehouzez is a leading logistics firm in India that provides a variety of ultra modern and tech- enabled solutions to the theater and dance groups, orchestras, gaming shows, event coordinators, and production managers so that they can focus on their performance while we take of charge of other things.
							</p>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        As a top- grade logistics firm in the country, we strive to provide unique logistics solutions and warehouses on hire for various Exhibition and Entertainment brands. We have our well- maintained and ideally positioned warehouses in over 70 locations throughout the country.
							</p>

							<div className='grid sm:grid-cols-2 md:grid-cols-2 mt-8 gap-10'>
								<div className="flex gap-4 items-start"> 
									<div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
										<RiGlobalLine className='text-white text-2xl' /> 
									</div> 
									<div> 
										<h3 className="font-semibold text-lg">
                                        Global Supply Chain Solutions
										</h3>  
										<p className="text-slate-500 mt-2 leading-relaxed">
                                        With Warehouzez, you get the state-of-the-art, customized and unique logistics solutions.
										</p> 
									</div> 
								</div>
                            
								<div className="flex gap-4 items-start"> 
									<div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
										<AiOutlineSafetyCertificate className='text-white text-2xl' />
									</div> 
									<div> 
										<h3 className="font-semibold text-lg">
                                        Safe and Reliability Warehousing
										</h3>  
										<p className="text-slate-500 mt-2 leading-relaxed">
                                        We operate on the values of Safety, Reliability and Fairness.
										</p> 
									</div> 
								</div>

								<div className="flex gap-4 items-start"> 
									<div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
										<FaShippingFast className='text-white text-2xl' />
									</div> 
									<div> 
										<h3 className="font-semibold text-lg">
                                        Fast Transportation Service
										</h3>  
										<p className="text-slate-500 mt-2 leading-relaxed">
                                        We provide integrated and best-in-class transportation services.
										</p> 
									</div> 
								</div>

								<div className="flex gap-4 items-start"> 
									<div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
										<MdOutlineManageSearch className='text-white text-2xl' />
									</div> 
									<div> 
										<h3 className="font-semibold text-lg">
                                        Robust Inventory Management Software
										</h3>  
										<p className="text-slate-500 mt-2 leading-relaxed">
                                        In-house developed WMS software for live inventory tracking
										</p> 
									</div> 
								</div>
							</div>
						</div> 
                    
						<div className='col-span-1'> 
							<Image alt="" src="/industries/pages/fashion-and-lifestyle.jpg" width={500} height={500} className='w-100 text-center m-auto' />
							<OnlineSupportForm />
						</div>
					</div>
					<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                        Key Features and Offerings
					</h2>

					<h3 className='text-base font-bold'>
                        Here's a List of Our Key Offerings for Entertainment and Gaming Industry
					</h3>
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Logistics from start to finish
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Pick-ups and deliveries for theaters
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Picking, packing, and storing promotional items
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Moisture Monitoring / Tilt / Press
								</span> 
							</p>
						</li>
					</ul>

					<h3 className='text-base font-bold'>
                        Here's a List of Our Key Offerings for Entertainment and Gaming Industry
					</h3>
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Scanning of Barcodes
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Operation of Plug-in / Plug-out
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Food and Drink Transportation
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Promotional Logistics for Cinema and Theaters
								</span> 
							</p>
						</li>
					</ul>

					<h3 className='text-base font-bold'>
                        Some Other Value Added Services
					</h3>
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Supply Chain Management
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Warehouse Management
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Offering ultra- tech solutions
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Inventory Management
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Planning, and managing the transportation needs
								</span> 
							</p>
						</li>
					</ul>

					<VideoSection />
            
					<h3 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                    With phenomenal skills, industrial experience and involvement with premier automakers and tier-one suppliers from all over the globe, Warehouzez can serve you with the following
					</h3>
                
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Ameliorated product development cycle for a considerably profitable launch.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Transforming into one of the greatest industries of the globe.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Economical reverse logistics.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Ultra- Modern supply chain solutions.
								</span> 
							</p>
						</li>
					</ul>

					<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    At Warehouzez, it is our primary duty to deliver high- quality, innovative, customized and ultra- modern solutions to meet all your business requirements.
					</p>
                
					<p className="text-3xl text-center font-bold my-12 [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                    Your Business Is Indeed Important To Us!
					</p>    
				</div>
			</div>
			<LetCheckoutOurIndustry />
			<GetEnquiry />
			<IndustriesAccord />
			<Blog />
			<NetworkofWarehouzez />
		</div>
	);
};

export default page;
