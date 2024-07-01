import React from 'react'
import WarehouseListed from './WarehouseListed'

const OurListedWarehouses = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-10 lg:mt-32 mb-5 lg:mb-14 md:px-7'>
        <h2 className='text-black text-base sm:text-3xl font-bold'>Our Listed Warehouses</h2>
        <span className='text-black text-base sm:text-1xl mt-2'>Check the <span className='text-red'>Live</span> Space Availability</span>
        {/*** warehouse listed ***/}
        <div className="container m-auto">
          <WarehouseListed />
        </div>
    </div>
  )
}

export default OurListedWarehouses;