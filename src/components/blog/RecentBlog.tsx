import React from 'react'
import Image from 'next/image'

const RecentBlog = () => {
  return (
    <div className='flex flex-col items-center'>
        <h2 className="text-md tracking-tight text-gray-900 sm:text-xl text-left mb-2">
            Recent Post
        </h2>
        <div className="overflow-hidden rounded-xl border border-default-200 w-5/6 p-2">
            <Image src="https://www.warehouzez.com/assets/img/bonded-vs-private-wzz-out-side.png" width={100} height={100} className='w-full rounded-md' alt='' />
            <div className="p-4 px-2"><div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-5 text-default-950" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="M8 14h.01"></path><path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path><path d="M8 18h.01"></path>
                    <path d="M12 18h.01"></path><path d="M16 18h.01"></path>
                    </svg>
                    <p className="text-base text-default-950">October 10,2023</p>
                </div>
                </div>
                <a href="/aeropage/landing/portfolio-2">
                    <h2 className="mt-3 text-xl font-medium text-default-950">Six Hands-On Exercises for Mastering UI/UX Design.</h2>
                </a>
            </div>
        </div>
    </div>
  )
}

export default RecentBlog