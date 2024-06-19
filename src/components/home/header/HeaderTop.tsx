"use client"

import Link from "next/link";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsFacebook, BsTwitterX, BsLinkedin, BsYoutube, BsInstagram, BsPinterest, BsWhatsapp, BsTelephone} from "react-icons/bs";


 

const HeaderTop = () => {
  return (
    <div className="headerTop">
        <div className="lg:container md:w-full md:px-4 flex items-center">
            <div className="flex items-center gap-x-5 md:gap-x-2 lg:gap-8">
              <div className="mailBox flex items-center gap-x-2 py-4">
                <FaRegEnvelopeOpen /> 
                <Link className="font-display text-sm tracking-tight text-slate-100 sm:text-4xs" href="https://mail.google.com/" target="_blank">info@warehouzez.com</Link>
              </div>
              <div className="hidden md:flex mailBox items-center gap-x-2">
                <HiOutlineDocumentText />
                <Link className="font-display text-sm tracking-tight text-slate-100 sm:text-4xs" href="https://mail.google.com/" target="_blank">Company Profile</Link>
              </div>
              <div className="hidden md:flex mailBox items-center gap-x-2">
                <HiOutlineDocumentText />
                <Link className="font-display text-sm tracking-tight text-slate-100 sm:text-4xs" href="https://mail.google.com/" target="_blank">Partners Profile</Link>
              </div>
              <div className="hidden md:flex mailBox items-center gap-x-2">
                <HiOutlineDocumentText />
                <Link className="font-display text-sm tracking-tight text-slate-100 sm:text-4xs" href="https://mail.google.com/" target="_blank">Brochure</Link>
              </div>
              <div className="hidden md:flex mailBox items-center gap-x-2">
                <div className="headerTop_icons_wrap">
                  <BsFacebook />
                </div>

                <div className="headerTop_icons_wrap">
                  <BsTwitterX />
                </div>

                <div className="headerTop_icons_wrap">
                  <BsLinkedin />
                </div>

                <div className="headerTop_icons_wrap">
                  <BsYoutube />
                </div>

                <div className="headerTop_icons_wrap">
                 <BsInstagram />
                </div>

                <div className="headerTop_icons_wrap">
                 <BsPinterest />
                </div>

                <div className="headerTop_icons_wrap">
                  <BsWhatsapp />  
                </div>
              </div>
            </div>
            <div className="hidden md:flex ml-auto items-center md:before:hidden md:after:hidden">
              <div className="headerTop-getintouchh flex items-center bg-red gap-x-1 md:gap-x-1">
                  <div className="md:hidden lg:flex items-center justify-center ft-header-cta-icon ft-header-cta-icons">
                    <BsTelephone />
                  </div>
                  <div className="ft-header-cta-icon ft-header-cta-number ">
                    <p>Get in Touch</p>
                    <h2 className="lg:text-lg font-bold md:text-xs">+91 9999615962</h2>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop;