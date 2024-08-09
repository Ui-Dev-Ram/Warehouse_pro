import BlogItem from '@/components/blog/BlogItem'
import ContactCard from '@/components/blog/ContactCard'
import RecentBlog from '@/components/blog/RecentBlog'
import Blog from '@/components/home/blog/Blog'
import LookingForBest from '@/components/home/lookingForBest/LookingForBest'
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez'
import React from 'react'

async function fetchBlog(){
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }

  try {
    const res =await fetch("http://127.0.0.1:1337/api/blogs?populate=*", option);
    const response = await res.json();
    return response
  } catch (err) {
    console.error(err);
  }
}


export default async function page() {
  
  const blog = await fetchBlog();

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
                      <BlogItem blogs={blog} /> 
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-5/6">
                    <ContactCard />
                  </div>
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
