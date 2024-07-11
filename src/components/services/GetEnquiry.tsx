import React from 'react';
import Image from 'next/image';

const GetEnquiry = () => {
  return (
    <div style={{"backgroundImage": "url(/services/Query.jpg)"}} className="bg-cover bg-center bg-no-repeat">
      <section
          id='get-free-shares-today'
          className='relative  bg-gray-900 bg-opacity-80 '
        > <div className="container m-auto relative py-20 sm:py-8">
          <Image alt="" src="/services/Aiimg.png" width={350} height={350} className="hidden lg:block absolute right-10 bottom-0"></Image>
              <div className='absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 hidden lg:block'>
                <svg
                  viewBox='0 0 558 558'
                  width='458'
                  height='458'
                  fill='none'
                  aria-hidden='true'
                  className='animate-spin-slower'
                >
                  <defs>
                    <linearGradient
                      id=':S3:'
                      x1='79'
                      y1='16'
                      x2='105' 
                      y2='237'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#fff'></stop>
                      <stop offset='1' stop-color='#fff' stop-opacity='0'></stop>
                    </linearGradient>
                  </defs>
                  <path
                    opacity='.2'
                    d='M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z'
                    stroke='#fff'
                  ></path>
                  <path
                    d='M1 279C1 125.465 125.465 1 279 1'
                    stroke='url(#:S3:)'
                    stroke-linecap='round'
                  ></path>
                </svg>
              </div>
              <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-md text-center'>
                  <h2 className='text-3xl font-medium tracking-tight text-white sm:text-4xl'>
                    Want to <span className='text-3xl md:text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient'>know more?</span>
                  </h2>
                  <p className='mt-4 text-lg text-gray-300'>
                      We offer the best and most authentic warehouse services.
                  </p>
                  <div className='mt-8 flex justify-center'>
                  <button className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                      Get a Query
                  </button>
                  </div>
                </div>
              </div>
        </div>
         
        </section>
    </div>
  );
};

export default GetEnquiry;
