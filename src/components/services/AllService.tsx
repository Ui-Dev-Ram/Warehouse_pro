'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { navlinks } from '@/components/home/header/Menulist'



const AllService = () => {
    const [serviceCard, setServiceCard] = useState(navlinks[1].childrens);
  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">All Service</h2>
                <hr />
                <div className="m-0"></div>
                {
                    serviceCard?.map((d, i)=> {
                    return(
                            <Link key={i} className='flex items-center justify-between mt-4 mb-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red' href="#">
                                {d.title}
                                <span>
                                    <FaArrowRightLong />
                                </span>
                            </Link>
                        )
                    })
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default AllService