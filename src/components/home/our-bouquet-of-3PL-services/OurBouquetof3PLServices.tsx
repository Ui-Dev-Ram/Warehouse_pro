import React from 'react'
import OurBouquetListing from './OurBouquetListing'

const OurBouquetof3PLServices = () => {
  return (
    <div className='bg-slate-300 flex flex-col justify-center items-center text-center py-8'>
        <h1 className='text-black text-base sm:text-3xl font-bold'>Our Bouquet of 3PL Services</h1>    

        {/*** 3PL Services ***/}       
         <OurBouquetListing />

    </div>
  )
}

export default OurBouquetof3PLServices