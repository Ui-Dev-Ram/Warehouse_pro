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

  return ( 
    <div className="header_wrap">
        <div className="container max-w-screen-xl flex items-center justify-around">
            <div className="logohead_wrap">
                <div className="headerLogo_section p-3 w-[140px] lg:w-[240px] lg:p-5">
                    <Link href={"/"}>
                        <Image src='/logo.png'  width={177} height={44} alt="Warehouzez Logo" className='w-[115px] lg:w-full' />
                    </Link>
                </div>
            </div>
            <div className="headerMenu_section hidden lg:block">
               <Menulist />
            </div>
            <FaBarsStaggered className='text-2xl text-white block lg:text-3xl lg:hidden' onClick={() => setSideMenu(true)} />
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
                <section className="overflow-scroll text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-2 z-[1002] flex w-56">
                    <IoClose 
                    onClick={() => setSideMenu(false)}
                    className="mt-0 mb-8 text-2xl cursor-pointer absolute right-3 top-3" />
                     {
                        navlinks.map((navlink, index) => {
                            return(
                               <SingalNavItem key={index} childrens={navlink.childrens} path={navlink.path} title={navlink.title}> 
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
    
   const[isItemOpen, setItem] = useState(false)

   function toggleItem() {
    return setItem(!isItemOpen)
   }

    return(
        <Link href={navlink.path ?? ""} onClick={toggleItem} className='group py-3 transition-all font-bold relative border-b-[1px] border-gray-300'>
            <p className='flex cursor-pointer items-center gap-2 text-black group-hover:text-black'>
                <span>{navlink.title}</span>   
                {
                    navlink.childrens && (
                        <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0"/>
                    )
                }
            </p>
            
            {/** dropdown **/}

            {
                isItemOpen && navlink.childrens && (
                    <div className='w-auto flex-col gap-1 rounded-lg py-3 transition-all flex'>
                        {
                            navlink.childrens.map((ch, i) => (
                                <Link key={i} href={ch.path ?? ""} className='flex cursor-pointer items-center text-sm font-normal py-1 text-black hover:text-black'>
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