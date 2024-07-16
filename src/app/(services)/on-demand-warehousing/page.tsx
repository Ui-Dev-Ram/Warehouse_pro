import Blog from '@/components/home/blog/Blog'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import InnerHeroBanner from '@/components/innerHeroBanner/InnerHeroBanner'
import AllService from '@/components/services/AllService'
import CoverdHandled from '@/components/services/CoveredHandled'
import GetEnquiry from '@/components/services/GetEnquiry'
import OnlineSupportForm from '@/components/services/OnlineSupportForm'
import ServiceAccord from '@/components/services/ServiceAccord'
import ServiceTab from '@/components/services/ServiceTab'
import VideoSection from '@/components/services/VideoSection'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
    <InnerHeroBanner />
    <div className="container m-auto">
        <div className="lg:m-5">
            <div className='mb-5'>
                <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-2'>
                    On-Demand Warehousing
                </h1>
            </div>
            <div className="grid grip-rows-3 lg:grid-cols-3 lg:gap-4">
                <div className="col-span-2">
                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        We are an accredited On-Demand Warehouse Services Provider. We provide storage services for any period of time and for any size as per the requirements of the firm. It is the primary duty of our experts to ensure that our customers receive excellent services. Additionally, all our warehouses are technologically advanced. Several consumers look for on demand warehousing companies for rent. However, most of them find Warehouzez the Digital Supply Chain to be the most cost-effective and competent option.
                    </p>
                    
                    <Image alt="" src="/services/image1.jpg" width={750} height={750} />
                    
                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                        In addition, Warehouzez the Digital Supply Chain provides on demand warehousing storage spaces in over 69 locations across the country. We are considered as one of India's leading on-demand warehousing firms, having a nation wide network of warehouses.
                    </p>

                    <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-8 mb-2'>
                        Get The Most Cost-Effective Warehouse Management Solutions
                    </h2> 
                    <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify'>
                        Here's a list of handful of the Warehouse Management Services we provide
                    </p>
                    <div className='relative'>
                        <ServiceTab />
                    </div>
                   
                    <div className="relative mt-64 lg:mt-32">
                        <h2 className='block antialiased tracking-normal font-sans text-xl lg:text-2xl font-semibold leading-[1.3] text-blue-gray-900 mt-8 mb-2'>
                            Services For Warehouse Management And Storage
                        </h2> 
                        <p className='block antialiased font-sans text-sm lg:text-base leading-relaxed font-normal text-gray-700 mb-3 text-justify mt-5'>
                            Warehouzez The Digital Supply Chain is the finest top logistics companies in india the country. Depending on your needs, we provide a variety of warehouse management services. We provide completely functional warehouse spaces to both small and large businesses.
                        </p>

                        <CoverdHandled />
                    </div>
                                   
                </div> 
                
                <div className='col-span-1'> 
                    <AllService />
                    <OnlineSupportForm />
                </div>
            </div>
            <p className="text-3xl text-center font-bold my-12 [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                Your Business Is Indeed Important To Us!
            </p>
           
        </div>
    </div>
      <VideoSection />
      <GetEnquiry />
      <ServiceAccord />
      <Blog />
      <NetworkofWarehouzez />

</div>
  )
}

export default page;