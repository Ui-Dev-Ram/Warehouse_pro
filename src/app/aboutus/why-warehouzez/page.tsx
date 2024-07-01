import React from 'react'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner';
import Image from 'next/image';
import aboutImg from '/public/aboutus/about.jpg'
import Blog from "@/components/home/blog/Blog";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import LookingForBest from "@/components/home/lookingForBest/LookingForBest";


const page = () => {
  return (
    <div>
        <InnerHeroBanner />
        <div className="container">
          <div className="m-5">
            <div className="flex items-start">
                <div className="flex flex-col flex-1">
                  <h1 className='block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4'>
                      Why Choose Us
                  </h1>
                    <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 mb-3'>
                    Selecting a warehousing and logistics firm is an absolutely important decision for your company. This is because the supply chain operations of your company will depend on it. Warehouzez is one stop destination for all your supply chain and logistics needs. We are a team of supply chain management and logistics experts you can surely count on to efficiently manage your logistics. We offer our customers with cost- effective solutions based on their business requirements. We have decades of experience and industrial knowledge. What sets us apart from your conventional logistics firm is our commitment to investing in cutting-edge information system, visibility, and tracking technologies, as well as our pride in being a whole solutions service provider.
                    </p>

                    <div className="my-2">
                      <h2 className='text-sm lg:text-2xl font-semibold'>
                         Excellent Customer Service
                      </h2>
                      <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 my-3'>
                       Satisfaction of our customers is our topmost priority. We remain focused on our goal of providing our clients with "PREMIUM QUALITY SERVICES". We understand that each customer is unique and has distinct needs, thus we deliver a personalised service experience for them.
                      </p>
                    </div>

                    <div className="my-2">
                      <h2 className='text-sm lg:text-2xl font-semibold'>
                        Extensive Experience And Industry Knowledge
                      </h2>
                      <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 my-3'>
                        Our team of experts recognizes the need of staying updated with industry trends, issues, and game-changing developments in order to evaluate the effect on our customers. We have thorough knowledge about various industries.
                      </p>
                    </div>
                </div>
                <div className="hidden lg:block relative flex-1 w-full mt-16 items-center justify-center">
                  <Image src={aboutImg} alt="" className='relative w-3/4 m-auto' />
                </div>
            </div>

            <div className="my-2">
                <h2 className='text-sm lg:text-2xl font-semibold'>
                  Several Value Added Services
                </h2>
                <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 my-3'>
                  We provide a variety of value-added services to our clients, all of which are aimed to increase bottom-line savings and improve our service skills. Our area of specialization includes Warehouse Management and Distribution Services.
                </p>
              </div>

              <div className="my-2 mt-5">
                  <h2 className='text-sm lg:text-2xl font-semibold'>
                    How Do You Get The Win
                  </h2>
                  <p className='block antialiased font-sans text-base leading-relaxed font-normal text-gray-700 my-3'>
                   With excellent skills, competencies and several years of experience, Warehouzez can help you win by-
                  </p>
              </div>

            <div className="flex items-start flex-col lg:flex-row mt-6">
              <div className="flex flex-col flex-1">
                <div>
                  <ul role="list" className="space-y-5">
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Ameliorating the product development cycle for fruitful launch.
                          </span>
                      </li>
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Becoming one of the largest -growing industries of the world.
                          </span>
                      </li>
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Cost-effective reverse logistics.
                          </span>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="my-2">
                  <ul role="list" className="pt-2 space-y-5">
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                          Transportation of raw material.
                          </span>
                      </li>
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                          Best-in-class logistics solutions to cut down your expenses and meet the challenges.
                          </span>
                      </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start flex-col lg:flex-row mt-8">
              <div className="flex flex-col flex-1"> 
                <h2 className='text-sm lg:text-xl font-semibold'>
                 In Our Warehouses You Can Find Many Types Of Products Like
                </h2>
                <div className="my-2">
                  <div className="flex flex-col lg:flex-row">
                    <ul role="list" className="pt-2 space-y-5">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            Items related to Food and Beverage Industry
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                              Lighting
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                              Consumer packaged goods
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                              Automobiles
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                              Medical Supplies and Equipment
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                              Paper (papers for the office/marketing materials)
                            </span>
                        </li>
                    </ul>

                    <ul role="list" className="pt-2 space-y-5">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                             Materials for Industry
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                             Pet Supplies
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                             Minerals
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                             Decorative and Gift Items
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                              Machineries
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                              Clothes
                            </span>
                        </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <h2 className='text-sm lg:text-xl font-semibold'>
                  Warehouzez Can Also Assist You In The Following Ways
                </h2>
                <div className="my-2">
                  <ul role="list" className="pt-2 space-y-5">
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                          Strategically located warehouses and distribution centres.
                          </span>
                      </li>
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                          Your items are protected by international security standards, such as fire extinguishers, CCTV cameras, and round-the-clock security.
                          </span>
                      </li>
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                          To quickly escalate and fulfill new operational requirements, you will need bench strength.
                          </span>
                      </li>
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                          Leases with a wide range of options and price structures.
                          </span>
                      </li>
                      <li className="flex space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-rose-900 dark:text-rose-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                          Consolidated transportation, packaging, and order fulfillment services.
                          </span>
                      </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className='my-5 text-base'> 
              Our 'Customer Driven Approach' makes Warehouzez the Digital Supply Chain the most widely chosen logistics and warehousing company in the industry.
            </p>


            <h3 className='text-center m-auto my-10'>
              <span className="text-3xl font-bold [&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                Your business is indeed essential to us!
              </span>
            </h3>

            
           
          </div>
        </div>
        <Blog />
        <NetworkofWarehouzez />
        <LookingForBest />
    </div>
  )
}

export default page