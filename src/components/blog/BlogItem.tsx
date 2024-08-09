import React from 'react'

const BlogItem = ({blogs}: any) => {

  return (
    <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-[30px] gap-y-[40px]">
            {
                blogs?.data?.map((blog: any) => (
                    <article className="post group" key={blog.id}>
                                <div className="post-image overflow-hidden rounded-[10px] h-[200px] md:h-auto relative">
                                    <a href={`/blogs/${blog?.attributes?.path}`} className="">
                                    <img
                                        src={"http://127.0.0.1:1337" + blog?.attributes?.img.data.attributes.url}
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
                                        {blog.attributes.Title}
                                    </a>
                                    </h5>
                                    <p className="mt-3" dangerouslySetInnerHTML={{__html: blog?.attributes?.Description.length > 80 ? blog?.attributes?.Description.substring(0, 100) + "..." : blog?.attributes?.Description}}>
                                        
                                    </p>
                                    <div className="meta flex items-center mt-4">
                                        <div className="flex items-center">
                                            <i className="icofont-ui-calendar"></i>
                                            <p className="pl-2">
                                                Published on {" "} {new Date(blog?.attributes?.publishedAt).toLocaleDateString() + ""}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                    </article>
                ))
            }
        </div>
    </div>
  )
}

export default BlogItem