// app/blogs/[slug]/page.tsx (or .js if using JavaScript)
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { MdOutlineAccessTime } from "react-icons/md";
import ContactCard from '@/components/blog/ContactCard';
import RecentBlog from '@/components/blog/RecentBlog';
import { Metadata } from 'next';
import AuthorBox from '@/components/blog/AuthorBox';
import { getStrapiURL } from '@/utils/url';

interface Blog {
  id: number;
  openGraph: any;
  
  attributes: {
    Title: string;
    Description: string;
    MetaDescription: string;
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


async function fetchBlog() {
  const option = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`  // Ensure this is the correct environment variable for the token
    }
  };

  try {
    const url = `${getStrapiURL()}/api/blogs?populate=*`;
    const res = await fetch(url, option);

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

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

async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${getStrapiURL()}/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
      },
      cache: 'no-store', // ensure fresh data
    });
    const response = await res.json();
    console.log("=>>>>>>>>>>>>", response, slug)
    return response.data[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
} 


export async function generateMetadata({params} : {params: {slug: string}}): Promise<Metadata> {
  const blog = await fetchBlogBySlug(params.slug); 
  const title = blog?.attributes?.Title;
  const desc = blog?.attributes?.MetaDescription;
  const imgUrl = blog?.attributes?.innerImage?.data?.attributes?.url || "";
  

  return{
      title: title,
      description: desc,
      openGraph: {
        images: [imgUrl],
      },
      metadataBase: new URL(getStrapiURL() + `/blogs/${blog?.attributes?.slug}` ),
      alternates: {
        canonical: '/',
        languages: {
          'en-US': '/en-US',
          'de-DE': '/de-DE',
        },
      }
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
                      <Image src={`${getStrapiURL()}/uploads/akansha_1_1_2ff63e4569.jpg`} 
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
              <Image className='blog-banner' src={`${blog?.attributes?.innerImage?.data?.attributes?.url}`} alt={blog?.attributes?.Title} width={250} height={250} />
                <div dangerouslySetInnerHTML={{ __html: blog?.attributes?.Description }}></div>
                
                <div className="my-8">
                  <AuthorBox />
                </div>
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
