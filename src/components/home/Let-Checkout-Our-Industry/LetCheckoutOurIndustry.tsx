import React from 'react'
import IndustryCard from '@/components/home/Let-Checkout-Our-Industry/IndustryCard'
import WarehouseListed from '../our-listed-warehouses/WarehouseListed'



const LetCheckoutOurIndustry = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mb-20 py-8 mx-7'>
        <h2 className='text-black text-base sm:text-2xl font-bold'>Let's Checkout</h2>    
        <p className='text-black text-base sm:text-2xl font-bold'>Our Industry Wise Offerings</p>
        <IndustryCard />
    </div>
  ) 
}

export default LetCheckoutOurIndustry;