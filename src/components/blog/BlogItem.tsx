// components/blog/BlogItem.tsx
import React from 'react';
import Image from 'next/image'

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

interface BlogItemProps { 
  blogs: {
    data: Blog[];
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


const BlogItem: React.FC<BlogItemProps> = ({ blogs }) => {
  
  const recentBlog = blogs.data.reverse();

 
  return (
    <div>
      <div className="flex flex-wrap gap-8">
        {
          recentBlog?.map((blog) => (
            <article className="post group w-[48%]" key={blog?.id}>
              <div className="post-image overflow-hidden rounded-[10px] h-[200px] md:h-auto relative">
                <a href={`/blogs/${blog.attributes.slug}`} className="">
                  <Image
                    width={500} height={500}
                    src={`http://127.0.0.1:1337${blog?.attributes?.img?.data?.attributes?.url}`}
                    alt={blog.attributes.Title}
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
                  <a href={`/blogs/${blog?.attributes?.slug}`} className="">
                    {blog?.attributes?.Title}
                  </a>
                </h5>
                <div className="mt-3" dangerouslySetInnerHTML={{ __html: blog?.attributes?.Description.length > 80 ? blog?.attributes?.Description.substring(0, 100) + "..." : blog.attributes.Description }}>
                </div>
                <div className="meta flex items-center mt-4">
                  <div className="flex items-center">
                    <i className="icofont-ui-calendar"></i>
                    <p>
                      Published on {new Date(blog?.attributes?.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
}

export default BlogItem;
