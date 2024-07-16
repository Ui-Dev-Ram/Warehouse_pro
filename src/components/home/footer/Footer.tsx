import React from 'react';
import Image from 'next/image';
import WarehouzezLogo from '/puiblic/logo.png';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="flex flex-col bg-neutral">
        <div className="container">
            <footer className="footer p-10 text-neutral-content">
                <aside className='m-auto lg:m-[0]'>
                    <Link href={"/"}>
                        <Image src='/logo.png'  width={177} height={44} alt="Warehouzez Logo" />
                    </Link>
                    <p>One stop destination for all your <br /> warehousing and logistics solutions. <br />Revolutionize your business with us!</p>
                </aside> 
                <nav>
                    <h6 className="footer-title">Main Link</h6> 
                    <Link href="#" className="link link-hover">Home</Link>
                    <Link href="#" className="link link-hover">About Us</Link>
                    <Link href="#" className="link link-hover">Industries</Link>
                    <Link href="#" className="link link-hover">Blog</Link>
                    <Link href="#" className="link link-hover">Our Presence</Link>
                    <Link href="#" className="link link-hover">Contact Us</Link>
                </nav> 
                <nav>
                    <h6 className="footer-title">Major Cities</h6> 
                    <Link href="#" className="link link-hover">Delhi</Link>
                    <Link href="#" className="link link-hover">Gurgaon</Link>
                    <Link href="#" className="link link-hover">Mumbai</Link>
                    <Link href="#" className="link link-hover">Hyderabad</Link>
                    <Link href="#" className="link link-hover">Bangalore</Link>
                    <Link href="#" className="link link-hover">Kolkata</Link>
                    <Link href="#" className="link link-hover">Chennai</Link>
                </nav> 
                <nav>
                    <h6 className="footer-title">Quick Link</h6> 
                    <Link href="#" className="link link-hover">Career</Link>
                    <Link href="#" className="link link-hover">Vendor</Link>
                    <Link href="#" className="link link-hover">Investor</Link>
                    <Link href="#" className="link link-hover">Sitemap</Link>
                    <Link href="#" className="link link-hover">Login</Link>
                    <Link href="#" className="link link-hover">Sign Up</Link>
                    <Link href="#" className="link link-hover">Forget Password</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Official info</h6> 
                    <div className="flex items-start link link-hover">
                        <FaMapMarkerAlt className="m-1" />
                        <span>
                            Survey No - 92/7 Koralur,
                            <br />Hoskote TQ, Kasaba - Hobli ,
                            <br />Koralur Village, Bangalore-560067
                        </span>
                    </div>
                    <div className="flex items-start link link-hover">
                        <IoMdMail className="m-1" />
                        <span>info@warehouzez.com</span>
                    </div>
                    <div className="flex items-start link link-hover">
                        <IoMdPhonePortrait className="m-1" />
                        <span>+91-9999615962</span>
                    </div> 
                    <p className='flex gap-x-3 my-2'>
                        <Link href="#"><FaFacebookF /></Link>
                        <Link href="#"><FaXTwitter /></Link>
                        <Link href="#"><FaLinkedinIn /></Link>
                        <Link href="#"><FaYoutube /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaPinterestP /></Link>
                        <Link href="#"><FaWhatsapp /></Link>
                    </p>
                </nav>
            </footer>
        </div>
                  
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                <p>Copyrights © 2019-2023 All Rights Reserved by Warehouzez Team.</p>
                </aside>
        </footer>
    </div>
   
  )
}

export default Footer;