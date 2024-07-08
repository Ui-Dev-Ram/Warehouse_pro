import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi';


interface Iitem{
    title: string;
    subtitle: string;
    isOpen: any;
    setIsOpen: any;
    i:number;

}

const AccordTab = (item:Iitem) => {
    const expanded = item.i === item.isOpen;
  return (
    <div className="relative border-b border-gray-200">
        <motion.header 
        className='flex w-full px-4 py-4 text-left items-center justify-between' 
        initial={false} 
        onClick={()=> item.setIsOpen(expanded ? false : item.i )}>
            <div className='flex space-x-4 space-x-reverse items-start'>
                <span className='text-base'>{item.title}</span>
            </div>
            <motion.div 
                className='flex p-0 m-0 text-4xl'
                animate={{
                    rotate:expanded ? 180 : 0,
                }}
                >
                 <BiChevronDown className={`w-3 ${expanded ? "text-blue-500" : "text-gray-500"}`} />
                </motion.div>
        </motion.header>

        <AnimatePresence initial={false}>
           {
                expanded && (
                    <motion.div 
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open:{opacity:1 , height:"auto"},
                        collapsed:{opacity: 0, height: 0}
                    }}
                    transition={{duration: 0.5, ease:[0.04, 0.62, 0.23, 0.98]}}
                   >
                        <div className='mt-0'>
                           <p className='text-base font-light text-left px-4 pb-4'>
                            {item.subtitle}
                           </p>
                        </div>
                    </motion.div>
                )   
           }
        </AnimatePresence>
       
    </div>
  )
}

export default AccordTab