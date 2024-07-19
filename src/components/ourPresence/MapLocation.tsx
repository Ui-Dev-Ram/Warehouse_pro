import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaMapMarkerAlt } from "react-icons/fa";

const MapLocation = (props: any) => {
    console.log(props)
  return (
    <div>
        <Link target="_blank" href={props.location} className="relative inline-flex items-center justify-center p-4 px-10 py-3 overflow-hidden font-medium text-red transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red group-hover:translate-x-0 ease">
                <FaMapMarkerAlt className='text-xl' />
            </span>
            <span className="absolute flex items-center justify-center w-full gap-x-2 h-full text-red bg-white transition-all duration-300 transform group-hover:translate-x-full ease">
                <HiOutlineLocationMarker /> Direction <FaArrowRightLong />
            </span>
            <span className="relative invisible">
                Direction
            </span>
        </Link>
    </div>
  )
}

export default MapLocation