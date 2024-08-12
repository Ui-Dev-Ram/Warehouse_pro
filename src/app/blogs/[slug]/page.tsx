// app/blogs/[slug]/page.tsx (or .js if using JavaScript)
import { notFound } from 'next/navigation';
import React from 'react';

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
    slug: string;
    publishedAt: string;
  };
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

  if (!blog) {
    notFound(); // Show 404 page if blog not found
  }

  return (
    <div>
      <h1>{blog.attributes.Title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.attributes.Description }}></div>
      <img src={`http://127.0.0.1:1337${blog.attributes.img.data.attributes.url}`} alt={blog.attributes.Title} />
      <p>Published on {new Date(blog.attributes.publishedAt).toLocaleDateString()}</p>
    </div>
  );
}

export default BlogDetails;
