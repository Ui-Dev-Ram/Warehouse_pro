import React from 'react'
import Image from 'next/image'
import GetEnquiry from '@/components/services/GetEnquiry';
import Blog from '@/components/home/blog/Blog';
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez';
import { MdOutlineWatchLater } from "react-icons/md";
import ContactCard from '@/components/blog/ContactCard';
import RecentBlog from '@/components/blog/RecentBlog';

async function fetchBlogs(id : number){
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }

  try {
    const res =await fetch(`http://127.0.0.1:1337/api/blogs/${id}?populate=*`, option);
    const response = await res.json();
    return response
  } catch (err) {
    console.error(err);
  }
}

   const page = async ({params}: any) => {
   
    const blog = await fetchBlogs(params.id)

  return (
    <div className='mt-5'>
        <div className="container max-w-screen-xl mx-auto mb-5">
          <div className="grid grid-cols-4 gap-4 lg:m-3">
            <div className="col-span-3 bg-slate-100 p-10">
              <div className="text-center lg:text-left mb-20 lg:mb-0 flex-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
                    <span className="inline-flex items-center rounded-md bg-red px-2 py-1 text-xs font-medium text-white">
                      Supply chain
                    </span>
                  </div>

                  <h1 className="font-bold text-gray-800 text-4xl md:text-4xl mb-10">
                    {blog?.data?.attributes?.Title}
                  </h1>

                  <div className='flex gap-4 mb-3'>
                    <div className="">
                        <span className="text-[#9b9ea1]">By </span> 
                        <a href="" className="hover:text-primary">
                        Aakanksha
                        </a>
                    </div>

                    <p className='flex items-center gap-1'>
                      <MdOutlineWatchLater /> Published on {" "} {new Date(blog?.data?.attributes?.publishedAt).toLocaleDateString() + ""}
                    </p>
                  </div>

                  
                    <Image className='w-full mb-5' width={150} height={150} alt='' src={"http://127.0.0.1:1337" + blog?.data.attributes?.innerImage.data.attributes.url} />
                    <div className="my-3" dangerouslySetInnerHTML={{__html: blog?.data?.attributes?.Description}}>
                  </div>
              </div>
            </div>
            <div>
              <div className="w-5/6 m-auto mb-5">
                <ContactCard />
              </div>
              <RecentBlog />
            </div>
          </div>
        </div> 
       
        <GetEnquiry />
        <Blog />
        <NetworkofWarehouzez />
    </div>
  )
}

export default page