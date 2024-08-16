import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoLogoLinkedin } from "react-icons/io5";


const AuthorBox = () => {
  return (
    <div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-100 rounded-lg  bg-gray-100">
          <div className="lg:h-auto lg:w-28 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
              <div className="flex flex-col items-center gap-2 justify-end p-4 pr-0">
                <Image className="w-14 h-14 rounded-full" src="https://www.warehouzez.com/assets/akansha.jpg" alt="Avatar of Jonathan Reinink" width={55} height={55} />
                 <Link target='_blank' href={"https://www.linkedin.com/in/aakanksha-gupta-290b3b81"}>
                  <IoLogoLinkedin className='text-xl' />
                 </Link>
              </div>
          </div>
          <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-0">
              <div className="text-gray-900 font-bold text-xl">
                  Aakanksha Gupta
                </div>
                <small>
                  (Senior Content Specialist)
                </small>
              <p className="text-gray-700 text-base mt-4">
                Aakanksha Gupta is a senior content specialist at Warehouzez. She is a passionate and eclectic content writer with proficiency in mobilising thoughts into words. Apart from being a digital native, she is a language enthusiast with a knack for visual storytelling and technical writing. As a writer, she is an easy-going and detail-oriented person who can convey your brand message with efficiency. She firmly believes that words are the best and highest form of self-expression.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AuthorBox