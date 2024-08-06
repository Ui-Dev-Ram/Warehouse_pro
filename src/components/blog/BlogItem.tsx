import React from 'react'

const BlogItem = () => {
  return (
    <div>
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
                                <a href={"/blog/23"} className="">
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
    </div>
  )
}

export default BlogItem