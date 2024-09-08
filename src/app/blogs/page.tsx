import BlogItem from "@/components/blog/BlogItem";
import ContactCard from "@/components/blog/ContactCard";
import RecentBlog from "@/components/blog/RecentBlog";
import Blog from "@/components/home/blog/Blog";
import LookingForBest from "@/components/home/lookingForBest/LookingForBest";
import NetworkofWarehouzez from "@/components/home/networkofWarehouzez/NetworkofWarehouzez";
import { getStrapiURL } from "@/utils/url";
import React from "react";



async function fetchBlog() {
    const option = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`  // Ensure this is the correct environment variable for the token
      }
    };
  
    try {
      const url = `${getStrapiURL()}/api/blogs?populate=*`;
      const res = await fetch(url, option);
	  console.log(url, res)
  
    //   if (!res.ok) {
    //     throw new Error(`Network response was not ok: ${res.statusText}`);
    //   }
  
      const response = await res.json();
  
      // Debugging response structure
      console.log('API Response:', response);
  
      // Handle response structure based on the actual data
      if (response && response.data) {
        return response.data;  // Adjust based on actual structure
      } else {
        throw new Error('Response data is undefined or missing');
      }
    } catch (err) {
      console.error(err);
    }
  }


export default async function page() {
	const blogItem = await fetchBlog();

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
							<BlogItem blogs={blogItem} /> 
						</div>
						<div className="flex flex-col items-center">
							<div className="w-5/6">
								<ContactCard />
							</div>
							<RecentBlog blogs={blogItem} />
						</div>
					</div>

				</div>
			</div>        
			<Blog />
			<NetworkofWarehouzez />
			<LookingForBest />
		</div>
	);
}
