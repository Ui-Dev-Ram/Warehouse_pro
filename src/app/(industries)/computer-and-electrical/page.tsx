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
                        Computer and Electrical Warehousing
						</h1>
					</div>
					<div className="grid grip-rows-2 lg:grid-cols-3 items-start lg:gap-4 mb-8">
						<div className="col-span-2">
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        The Engineering industry is one of the fastest growing industries in the world. The Computer and Electrical sectors in India are witnessing a remarkable growth especially in cities like Mumbai and Bangalore. Due to this, the demand for a well- established warehouse space and logistics services is incredibly increasing in the Computer and Electrical sector. It is not just the requirement for warehouse space that is increasing, but the warehouse design is also transforming, and becoming all the more better.
							</p>
                      
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        At Warehouzez, we deliver the best warehousing and logistics services for the Computer and Electrical sector. We are well equipped with the changing paradigm, customer behavior and online ordering system that has called for a more advanced warehousing system. We also offer reverse digital logistics
							</p>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        experience that is ultra- modern, transparent and technology controlled, and we can assist any organisation with logistical issues in the electrical and engineering sector. At Warehouzez, it is our topmost duty to stay competitive and address the ever changing demands of customers. Our one-of-a-kind solutions, such as direct delivery to chosen stores, help clients save time and money while also ensuring overall efficiency of operations. Warehouzez takes use of its countrywide footprint to offer a variety of storage and distribution options that save money for clients across the supply chain.
							</p>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        As a top- grade logistics firm in the country, we endeavor to offer the best Outsourcing Warehousing Operations and warehouses on lease for the Computer and Electrical industry. We have our ideally located warehouses in over 70 locations throughout the country. We certainly understand the pressures faced by these industries, and we strive to handle these challenges with our cutting- edge technology and unique logistics solutions.
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
                        Enlisted Below are Some of Our Logistics Solutions for the Electrical and Engineering Sector
					</h3>
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Digital Infrastructure.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Packing can be done on-site or off-site.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Supply Chain Management.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Material Handling Equipments.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Air delivery the very next day.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Small shipments with ground transportation facilities.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Pallet shipping that saves you money.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Delivery, unpacking, and installation on-site or at the client's location.
								</span> 
							</p>
						</li>
					</ul>

					<h3 className='text-base font-bold'>
                        With great competency, several years of industry experience, and dealing with premier automakers and tier-one suppliers from all over the world, Warehouzez can assist you
					</h3>
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Ameliorate the product development cycle for victorious launch.
								</span>  
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Become one of the world's leading industries.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Cost-effective reverse logistics.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Transportation and distribution facilities.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                The best-in- class logistics solutions to cut down your expenses.
								</span> 
							</p>
						</li>
					</ul>               

					<VideoSection />
               
					<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    Warehouzez is committed to deliver advanced and future- ready logistics solutions to the electrical and engineering sector across the country. We deliver supreme-quality, unique, innovative and finest solutions to meet all your business requirements.
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
