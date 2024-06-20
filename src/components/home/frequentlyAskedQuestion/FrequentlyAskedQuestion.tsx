'use client'
import React, {useState} from 'react'
import AccordTab from './AccordTab'
import FreqTabData from '@/data/FreqTab.json'
import WhyChooseUs from '@/components/home/frequentlyAskedQuestion/WhyChooseUs'


const FrequentlyAskedQuestion = () => {
  const[open, setOpen] = useState<boolean>(false)
  const[freqData, setFreqData] = useState(FreqTabData.FreqTabs)

  return (

    <div className='flex flex-col justify-center items-center text-center mb-10 lg:mb-20 py-8'>
        <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
            Frequently Asked Question
            <span className="block text-xl font-normal mt-2">Have an Any Question?</span>
             
            <div className="grid grid-row-12 lg:grid-cols-12 items-start justify-center gap-8 lg:gap-16 xl:gap-24">
              <div className="col-span-12 lg:col-span-6">
                  <div className="flex flex-col justify-center item-center mt-8">
                    {
                      freqData.map((freqDatas, index) => {
                        return(
                          <AccordTab title={freqDatas.title} subtitle={freqDatas.description} key={index} i={index} isOpen={open} setIsOpen={setOpen} /> 
                        )
                      })
                    }
                  </div>
              </div> 
                
                <div className="col-span-12 lg:col-span-6">
                  <WhyChooseUs />
                </div>
            </div>
             

        </h2>
    </div>
  )
}

export default FrequentlyAskedQuestion