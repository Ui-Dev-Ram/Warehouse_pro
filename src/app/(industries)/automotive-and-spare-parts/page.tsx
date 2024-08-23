import React from "react";
import InnerHeroBanner from "@/components/innerHeroBanner/InnerHeroBanner";
import OnlineSupportForm from "@/components/services/OnlineSupportForm";
import Image from "next/image";
import VideoSection from "@/components/services/VideoSection";
import LetCheckoutOurIndustry from "@/components/home/Let-Checkout-Our-Industry/LetCheckoutOurIndustry";
import GetEnquiry from "@/components/services/GetEnquiry";
import ServiceAccord from "@/components/services/ServiceAccord";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import Blog from "@/components/home/blog/Blog";
import { RiGlobalLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineManageSearch } from "react-icons/md";

const page = () => {
	return (
		<div>
			<InnerHeroBanner />
			<div className="container m-auto">
				<div className="lg:m-5">
					<div className='mb-5'>
						<h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                        Automotive and Spare Parts Warehousing
						</h1>
					</div>
					<div className="grid grip-rows-2 lg:grid-cols-3 items-start lg:gap-4 mb-8">
						<div className="col-span-2">
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            An efficient warehouse layout is utmost important for spare parts and automotive giants. In recent times, the automotive and spare parts industry is indeed one of the fastest growing sectors globally. The two most notable cities where the aforementioned industry is growing at an exponential rate include Delhi and Goa. Warehouzez follows premium standards of service levels (SLAs) to ensure optimized service for aircraft parts, defense spare parts and automotive items. We offer top-quality logistics and Warehousing and Distribution services along with inventory management and timely delivery.
							</p>
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            The Automotive Industry includes a variety of firms that are involved in manufacturing and selling of vehicles. Statistics show that the Automotive Industry is primarily responsible for macroeconomic growth as it constitutes 3 percent of the GDP (globally).
							</p>
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            India is one of the greatest producers of automotives in the world. With this rapid growth, there are some pressures too. For automobile components manufacturers involved in high-end production, we follow worldwide standards to produce top-level supply chain logistics.
							</p>
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Warehouzez provides an efficient warehouse layout for the automotive industry and helps in maintaining the supply chain. Our main aim is to minimize the errors and reduce the costs considerably. Through our improvement operations, we give complete support for continuous growth in the automotive sector.
							</p>
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                            Being one of the leading logistics and warehouse service providers in the industry, we provide the finest services as per the requirements of our customers. We have our warehouses in over 70 plus locations across the nation; and our warehouses are ideally positioned in the prime locations.
							</p>
							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                            Our Mission
								<b className='block text-base font-medium'>
                                We intend to deliver premium quality services to our clients.
								</b>
							</h2>

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
							<Image alt="" src="/industries/pages/automotive-and-spare-parts.png" width={500} height={500} className='w-100 text-center m-auto' />
							<OnlineSupportForm />
						</div>
					</div>

					<VideoSection />
            
					<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                    The Logistics of Warehouzez provides enhanced and specialised services for firms in the automotive sector, based on our in-depth knowledge of the industry and extensive experience:-
					</h2>

					<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    A digitalized logistics network is significant because it streamlines procedures and increases decision-making abilities, in addition to the monetary benefits. Furthermore, robotic operations can let SCM specialists focus on more important responsibilities by streamlining their work. A good consultant analyzes the client's requirements and gives ideas or blueprints for consideration. They seek out, acquire, and manage new projects, as well as make suggestions for improvements to the technique. All these requirements are effectively met by Warehouzez. Putting money in supply chain technology allows your business to streamline its production chain, eliminate superfluous linkages, increase productivity, and cut costs. Leading firms are adopting our models to optimize their value chains, which combines the best of both machine-human.
					</p>

					<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    We involve our customers in a systematic digitization process that includes the following steps:
					</p>

					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Containers or Specialized Fleet
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Transportation of Raw Materials
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Become one of the world's fastest-growing industries.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Logistics that are efficient and can help you save money.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                            Another important priority area for us is reducing the transit waste.
								</span> 
							</p>
						</li>
					</ul>

					<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    Warehouzez is committed to deliver advanced logistics solutions to the aviation and automotive industry across the country. We deliver high- quality, innovative and ultra- modern solutions to meet all your business requirements.
					</p>
                
					<p className="text-3xl text-center font-bold my-12 [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                    Your Business Is Indeed Important To Us!
					</p>
            
				</div>
			</div>
			<LetCheckoutOurIndustry />
			<GetEnquiry />
			<ServiceAccord />
			<Blog />
			<NetworkofWarehouzez />
		</div>
	);
};

export default page;
