import ContactCard from '@/components/blog/ContactCard'
import RecentBlog from '@/components/blog/RecentBlog'
import Blog from '@/components/home/blog/Blog'
import LookingForBest from '@/components/home/lookingForBest/LookingForBest'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import React from 'react'


const page = ({}) => {
  return (
    <div>
        <div className="container m-auto">
          <div className="m-5">
              <div className="flex">
                  <div className="flex flex-col lg:flex-1">
                      <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 mt-5 mb-10 text-center'>
                        Our Blogs
                      </h1>
                  </div>  
              </div>
              
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[30px] gap-y-[40px]">
                        <article className="post group">
                            <div className="post-image overflow-hidden rounded-[10px] h-[200px] md:h-auto relative">
                                <a href="/blog/the-best-website-templates-layouts-for-your-business-company" className="">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1663040001568-f07cab70d71f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="The best website template layout for your business"
                                    className="object-cover h-full w-full group-hover:scale-110 transition-all duration-500"
                                />
                                </a>
                            </div>
                            <div className="post-info pt-6">
                                <div className="flex items-center">
                                <a href="/categories/javascript" className="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-red hover:text-white">
                                    Supply Chain
                                </a>
                                <div className="author ml-4 md:ml-6">
                                    <span className="text-[#9b9ea1]">By </span> 
                                    <a href="/author/uzzalht" className="hover:text-primary">
                                    Aakanksha
                                    </a>
                                </div>
                                </div>
                                <h5 className="md:font-semibold pt-4 mb-0 hover:text-red lg:text-xl">
                                <a href="/blog/the-best-website-templates-layouts-for-your-business-company" className="">
                                    Top 10 Order Picking Methods for E-Commerce Warehouses
                                </a>
                                </h5>
                                <p className="mt-3">
                                    In today's fast-paced world, order picking is a crucial part of e-commerce warehouse operations.
                                </p>
                                <div className="meta flex items-center mt-4">
                                    <div className="flex items-center">
                                        <i className="icofont-ui-calendar"></i>
                                        <p className="pl-2">July 18, 2024</p>
                                    </div>
                                    <div className="flex items-center pl-5">
                                        <i className="icofont-clock-time"></i>
                                        <p className="pl-2"> 3 min read</p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="post group">
                            <div className="post-image overflow-hidden rounded-[10px] h-[200px] md:h-auto relative">
                                <a href="/blog/the-best-website-templates-layouts-for-your-business-company" className="">
                                <img
                                    src="https://images.unsplash.com/photo-1664382950442-0748f82f2752?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="The best website template layout for your business"
                                    className="object-cover h-full w-full group-hover:scale-110 transition-all duration-500"
                                />
                                </a>
                            </div>
                            <div className="post-info pt-6">
                                <div className="flex items-center">
                                <a href="/categories/javascript" className="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-red hover:text-white">
                                    Supply Chain
                                </a>
                                <div className="author ml-4 md:ml-6">
                                    <span className="text-[#9b9ea1]">By </span>
                                    <a href="/author/uzzalht" className="hover:text-primary">
                                    Aakanksha
                                    </a>
                                </div>
                                </div>
                                <h5 className="md:font-semibold pt-4 mb-0 hover:text-red lg:text-xl">
                                    <a href="/blog/the-best-website-templates-layouts-for-your-business-company" className="">
                                        Reverse Logistics: How to Manage Your E-Commerce Returns Effectively
                                    </a>
                                </h5>
                                <p className="mt-3">
                                    With the rise of online shopping, there has been an increase in the volume of product returns.
                                </p>
                                <div className="meta flex items-center mt-4">
                                <div className="flex items-center">
                                    <i className="icofont-ui-calendar"></i>
                                    <p className="pl-2">July 11, 2024</p>
                                </div>
                                <div className="flex items-center pl-5">
                                    <i className="icofont-clock-time"></i>
                                    <p className="pl-2"> 3 min read</p>
                                </div>
                                </div>
                            </div>
                        </article>

                        <article className="post group">
                            <div className="post-image overflow-hidden rounded-[10px] h-[200px] md:h-auto relative">
                                <a href="/blog/the-best-website-templates-layouts-for-your-business-company" className="">
                                <img
                                    src="https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="The best website template layout for your business"
                                    className="object-cover h-full w-full group-hover:scale-110 transition-all duration-500"
                                />
                                </a>
                            </div>
                            <div className="post-info pt-6">
                                <div className="flex items-center">
                                <a href="/categories/javascript" className="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-red hover:text-white">
                                    Supply Chain
                                </a>
                                <div className="author ml-4 md:ml-6">
                                    <span className="text-[#9b9ea1]">By </span>
                                    <a href="/author/uzzalht" className="hover:text-primary">
                                    Aakanksha
                                    </a>
                                </div>
                                </div>
                                <h5 className="md:font-semibold pt-4 mb-0 hover:text-red lg:text-xl">
                                <a href="/blog/the-best-website-templates-layouts-for-your-business-company" className="">
                                    Top 10 Logistics Trends to Watch in 2024 and Beyond
                                </a>
                                </h5>
                                <p className="mt-3">
                                    The logistics industry is constantly evolving to meet ever-changing consumer and market demands.
                                </p>
                                <div className="meta flex items-center mt-4">
                                <div className="flex items-center">
                                    <i className="icofont-ui-calendar"></i>
                                    <p className="pl-2"> July 04, 2024</p>
                                </div>
                                <div className="flex items-center pl-5">
                                    <i className="icofont-clock-time"></i>
                                    <p className="pl-2"> 3 min read</p>
                                </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <ContactCard />
                    <RecentBlog />
                </div>
            </div>



          </div>
        </div>        
        <Blog />
        <NetworkofWarehouzez />
        <LookingForBest />
    </div>
  )
}

export default page