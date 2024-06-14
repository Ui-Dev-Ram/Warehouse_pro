"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"; 
import Image from "next/image";

const content = [
  {
    title: "Everything You Need to Know About Cold Storage Warehouses",
    description: "A cold storage warehouse is crucial in modern-day logistics and supply chain management. In today's fast-paced world, consumers demand fresh and high-quality products...",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/public/OurIndustryImg/port1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Latest Blog"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/public/blog/blog-1.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/public/blog/blog-1.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/public/blog/blog-1.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const Blog = () => {
  return (
   
    <section className="bg-gray-50">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
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