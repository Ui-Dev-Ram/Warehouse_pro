"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"; 
import Image from "next/image";
import { MdCalendarMonth } from "react-icons/md";

const content = [
  {
    title: "Everything You Need to Know About Cold Storage Warehouses",
    description: "A cold storage warehouse is crucial in modern-day logistics and supply chain management. In today's fast-paced world, consumers demand fresh and high-quality products...",
    link:"#",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="../blog/blog-1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="blog-1"
        />
        <p className="flex items-center justify-center text-md text-white pt-1 pb-2">
          <span className="flex items-center justify-center gap-2"><MdCalendarMonth /> June 13, 2024</span>         
        </p>
      </div>
    ),
  },
  {
    title: "How to Optimize Supply Chain Management for E-commerce Success",
    description:
      "The success of online product-based businesses relies on effective e-commerce supply chain management. The moment an order is placed, it is important to keep track of what's in stock.",
    link:"#",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="../blog/blog-2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <p className="flex items-center justify-center text-md text-white pt-1 pb-2">
          <span className="flex items-center justify-center gap-2"><MdCalendarMonth /> June 07, 2024</span>         
        </p>
      </div>
    ),
  },
  {
    title: "How AI Delivers a Superior 3PL Customer Service Experience",
    description:
      "In this competitive marketplace, customer satisfaction is the key to success. Customers expect top-notch service when placing and receiving orders. Meeting these expectations can result in improved profits.",
      link:"#",
      content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="../blog/blog-3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <p className="flex items-center justify-center text-md text-white pt-1 pb-2">
          <span className="flex items-center justify-center gap-2"><MdCalendarMonth /> May 30, 2024</span>         
        </p>
      </div>
    ),
  },
  {
    title: "The Best Warehousing Companies In Mumbai",
    description:
      "Mumbai, once called Bombay, is the capital city of Maharashtra. It is not a bustling metropolis but a financial hub for India. It is an attractive destination for businesses due to its diverse industrial base.",
      link:"#",
      content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-white">
        <Image
          src="../blog/blog-4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        <p className="flex items-center justify-center text-md text-white pt-1 pb-2">
          <span className="flex items-center justify-center gap-2"><MdCalendarMonth /> May 24, 2024</span>         
        </p>
      </div>
    ),
  },
];
const Blog = () => {
  return (  
    <section className="bg-gray-50">
        <div className="mx-auto max-w-[1340px] sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-14">
            <div className="max-w-7xl items-center justify-center sm:flex sm:pe-6 lg:pe-8">
              <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
                Blog
                  <span className="block text-xl font-normal mt-2">Let's Checkout our All Latest Blogs</span>
              </h2>
            </div>
        </div>
        <StickyScroll content={content} /> 
    </section>
  )
}

export default Blog;