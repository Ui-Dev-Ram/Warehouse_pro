// app/blogs/[slug]/page.tsx (or .js if using JavaScript)
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { MdOutlineAccessTime } from "react-icons/md";
import ContactCard from '@/components/blog/ContactCard';
import RecentBlog from '@/components/blog/RecentBlog';



interface Blog {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    innerImage:{
      data: {
        attributes: {
          url: string;
        };
      };
    };
    slug: string;
    publishedAt: string;
  };
}


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


async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`http://127.0.0.1:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      },
      cache: 'no-store', // ensure fresh data
    });
    const data = await res.json();
    return data.data[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchBlogBySlug(params.slug); 
  const blogs = await fetchBlog();

  
  if (!blog) {
    notFound(); // Show 404 page if blog not found
  }
 
  return  (
    <div className='container max-w-screen-xl mx-auto rich-text mt-10'>
      <div className='lg:m-4'>
        <div className='w-full mx-auto flex flex-wrap'>
          <div className="flex flex-col">
              <h1>{blog?.attributes?.Title}</h1>
              <div className='flex items-center gap-4 mt-2'>
                  <div className='flex items-center gap-2'>
                    <div>
                      <Image src={"http://localhost:1337/uploads/akansha_1_1_2ff63e4569.jpg"} 
                            width={22} height={22}
                            className="profileDp" 
                            alt="Bordered avatar" />
                    </div>
                    <div>
                      <span className='text-gray-500'> by</span> 
                      <span className='text-gray-900 font-medium'> Aakanksha</span>
                    </div>
                    
                  </div>
                  <div>
                    <p className='flex items-center gap-1 date'> 
                        <MdOutlineAccessTime />
                        Published on {new Date(blog?.attributes?.publishedAt).toLocaleDateString()}
                      </p>
                  </div>
              </div>
          </div>
            
          <div className='flex w-full lg:w-3/4'>
              <div key={blog.id}>
                <img className='blog-banner' src={`http://127.0.0.1:1337${blog?.attributes?.innerImage?.data?.attributes?.url}`} alt={blog?.attributes?.Title} />
                <div dangerouslySetInnerHTML={{ __html: blog?.attributes?.Description }}></div>
              </div>
          </div>
          <div className='flex flex-col items-center w-full lg:w-1/4 mt-3'>
              <div className="w-5/6">
                <ContactCard />
              </div>
                <RecentBlog blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
