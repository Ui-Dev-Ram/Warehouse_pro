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
                        Consumer Goods Warehousing
						</h1>
					</div>
					<div className="grid grip-rows-2 lg:grid-cols-3 items-start lg:gap-4 mb-8">
						<div className="col-span-2">
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        Warehouzez has decades of industry wide experience of handling unique and complicated Consumer Goods supply chains. Warehouzez, the Digital Supply Chain is a prominent Consumer Goods Logistics and Supply Chain firm with intensive experience of handling complicated supply chains for leading corporations of the country and worldwide.
							</p>
                      
							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        We are indeed one of the leading and best- in- class Consumer Goods Supply Chain companies in the industry. Leading companies stay updated by improving their procedures incrementally.
							</p>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        A durable good is also known as hard good. As the name suggests, a durable good provides utility over time instead of being consumed entirely in one use.
							</p>

							<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        In addition to that, it doesn't wear out easily. Highly durable items like Air Conditioners, Microwave ovens, etc are often functional for five or more years. In all likelihood, warehousing is an essential element of consumer durable items. The two most notable places where the aforementioned industry is growing at an exponential rate include Hyderabad and Noida.
							</p>

							<h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-2'>
                        Consumer Durable Goods are Divided into Three Groups
							</h2>        

							<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-4">
								<li className="flex flex-col space-x-3 w-full">
									<p className='flex place-items-starts justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    White Goods -   
											<span className='antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                                            Air conditioners, washing machines, refrigerators, televisions, etc are some examples of white goods.
											</span>
										</span>  
                               
									</p>
								</li>

								<li className="flex flex-col space-x-3 w-full">
									<p className='flex place-items-starts justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                        Brown Goods, Also Referred as Kitchen Appliances -  
											<span className='antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                                        Microwave ovens, mixers, grinders, stoves, irons, electric fans, and chimneys are all examples of brown goods.
											</span>
										</span>  
                               
									</p>
								</li>

								<li className="flex flex-col space-x-3 w-full">
									<p className='flex place-items-starts justify-start mb-2'>
										<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
										<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Consumer Electronics -   
											<span className='antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                                            Cell Phones, Televisions, DVD players, speakers are some prominent examples of Consumer electronic goods.
                                        Warehouzez is a defined-benefit supply chain service provider firm that specializes in back- to- back tactical planning and management facilities for the consumer durable items. We have our well- maintained warehouses in over 70 locations across the country.
											</span>
										</span>  
                               
									</p>
								</li>
							</ul>

							<div className='grid sm:grid-cols-2 md:grid-cols-2 mt-8 gap-10'>
								<div className="flex gap-4 items-start"> 
									<div className="mt-1 bg-black rounded-full p-2 w-10 h-10 shrink-0"> 
										<RiGlobalLine className='text-white text-2xl' /> 
									</div> 
									<div> 
										<h3 className="font-semibold text-lg">
                                    Global Supply Chain Solutions
										</h3>  
										<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
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
                        Our Prominent Features and Offerings
					</h2>

					<h3 className='text-base font-bold'>
                        Here's a List of Our Logistics Solutions for Consumer Durable Items
					</h3>
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Inventory Management.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Efficient Warehouse Management.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Compliance with quality standards.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Strategically located and well- maintained warehouses.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Keeping up with the ever- changing demands in the industry.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Packing the products.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Transportation for consumer durables.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                In-plant Logistics.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Advanced technology processes.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Transportation and Distribution facilities.
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
					</ul>

					<h3 className='text-base font-bold'>
                        With Several Years of Industry Experience in Dealing With the Best Automakers and Tier-one Suppliers from all Over the World, Warehouzez Can Help You
					</h3>
					<ul role="list" className="flex flex-wrap justify-start space-y-5 items-baseline mb-6 mt-5 gap-x-6 lg:mt-0">
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Advanced the product development cycle for a profitable launch.
								</span>  
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                    Making up your space into the list of the leading industries of the world.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Cost- effective reverse logistics.
								</span> 
							</p>
						</li>

						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Personalized and ultra- modern supply chain solutions for Consumer durables.
								</span> 
							</p>
						</li>
                        
						<li className="flex flex-col space-x-3 w-full lg:w-[350px]">
							<p className='flex place-items-starts justify-start mb-2'>
								<svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
								<span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                                Finest logistics solutions to cut down your expenses and meet the challenges, thereby staying competitive in the market place.
								</span> 
							</p>
						</li>
					</ul>               

					<VideoSection />
               
					<p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                    Warehouzez The Digital Supply Chain offers the best-in- class warehousing and logistics services for a wide range of consumer durable products. We remain focused on our goal of thriving in the competitive business scenario by offering the best- in- class logistics and warehouse facilities.
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
