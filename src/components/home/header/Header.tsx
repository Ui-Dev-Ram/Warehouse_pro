'use client'

import { useState } from 'react';
import Image from 'next/image'
import WarehouzezLogo from '/public/logo.png';
import Menulist from './Menulist';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { navlinks } from '@/components/home/header/Menulist'
import clsx from 'clsx';
import { IoIosArrowDown } from "react-icons/io";

type NavItem = {
    title: string;
    path?: string;
    childrens?:NavItem[];
    icons?: any;
}



const Header = () => {
  
   const[isSideMenu, setSideMenu] = useState(false)
   const[isItemOpen, setItem] = useState(false)

  return ( 
    <div className="header_wrap">
        <div className="container flex items-center justify-around">
            <div className="logohead_wrap">
                <div className="headerLogo_section">
                    <Image src={WarehouzezLogo} alt="Warehouzez Logo" className='w-[115px] lg:w-full' />
                </div>
            </div>
            <div className="headerMenu_section hidden lg:block">
               <Menulist />
            </div>
            <FaBarsStaggered className='text-3xl text-white' onClick={() => setSideMenu(true)} />
            <div className="headerContact_section md:hidden hidden lg:flex">
                <button className="bg-red hover:bg-red text-white font-bold py-4 px-8 rounded-full">
                    Contact Us
                </button>
            </div>
            
            {/* sidebar mobile menu */}
            <div className={clsx(
                "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 left-0 z-[1001] -translate-x-full transition-all",
                isSideMenu && 'translate-x-0'
            )}>
                <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-[1002] flex w-56">
                    <IoClose 
                    onClick={() => setSideMenu(false)}
                    className='mt-0 mb-8 text=-3xl cursor-pointer' />
                     {
                        navlinks.map((navlink, index) => {
                            return(
                               <SingalNavItem key={index} childrens={navlink.childrens} path={navlink.path} title={navlink.title}> 
                                   {/* {navlink.childrens}     */}
                                </SingalNavItem> 
                            )
                        })
                   } 
                      
                        

                    
                </section>
            </div>
        </div>
    </div>
  )
}

export default Header;


function SingalNavItem(navlink: NavItem){
    return(
        <Link href={navlink.path ?? ""} className='group py-3 transition-all font-bold relative'>
            <p className='flex cursor-pointer item-center gap-2 text-neutral-400 group-hover:text-black'>
                <span>{navlink.title}</span>   
                <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0"/>
            </p>
            
            {/** dropdown **/}

            {
                navlink.childrens && (
                    <div className='hidden w-auto flex-col gap-1 rounded-lg py-3 transition-all group-hover:flex'>
                        {
                            navlink.childrens.map((ch, i) => (
                                    <Link key={i} href={ch.path ?? ""} className='flex cursor-pointer items-center text-sm font-normal py-1  text-neutra-400 hover:text-black'>
                                        {ch.title}
                                    </Link>
                                
                            ))
                        }
                    
                </div>
                )
            }
            
        </Link>
    )
          
}