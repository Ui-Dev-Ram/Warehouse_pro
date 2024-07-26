import Blog from '@/components/home/blog/Blog';
import LookingForBest from '@/components/home/lookingForBest/LookingForBest';
import NetworkofWarehouzez from '@/components/home/networkofWarehouzez/NetworkofWarehouzez';
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { LuSmartphone } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const page = () => {
  return (
    <div>
        <section className="mb-10 lg:mb-0">
        <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8698367560787!2d77.75538111534318!3d12.980176018200828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f2ce9fae88d%3A0xf596d40350aa5ab1!2sWarehouzez%20The%20digital%20supply%20chain!5e0!3m2!1sen!2sin!4v1654600975952!5m2!1sen!2sin"
            width="100%" height="480" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
            ></iframe>
        </div>
        <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-10 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <h1 className='block antialiased tracking-normal font-sans text-2xl lg:text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:mb-10 text-center'>
                Contact Us
            </h1>
            <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
               
                <form>
                    <div className="relative mt-4">
                        <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                            <LuUser2 />
                        </div>
                        <input
                            type="text"
                            className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                            placeholder="Name"
                        />
                    </div>

                    <div className="relative mt-4">
                        <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                            <HiOutlineMail />
                        </div>
                        <input
                            type="text"
                            className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                            placeholder="Email Id"
                        />
                    </div>

                    <div className="relative mt-4">
                        <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                            <LuSmartphone />
                        </div>
                        <input
                            type="text"
                            className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="relative mb-6 mt-4" data-te-input-wrapper-init>
                        <textarea
                            className="peer bg-gray-100  block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                    <input
                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-error checked:bg-error checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                        type="checkbox"
                        value=""
                        id="exampleCheck96"
                        checked
                    />
                    <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="exampleCheck96"
                    >
                        Send me a copy of this message
                    </label>
                    </div>
                    <button
                    type="button"
                    className="transition-all duration-300 mt-5 w-full border border-transparent rounded-full font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-red text-gray-100 hover:bg-red hover:text-gray-200"
                    >
                    Send Message
                    </button>
                </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 mt-6">
                    <div className="flex flex-col flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6">
                           <div className="flex w-full gap-x-5">
                            <div>
                                <FaMapMarkerAlt className='mt-2 text-3xl text-gray-600' />
                            </div>
                            <div className="flex-1">
                                <div className="text-neutral-600">
                                    <h4 className="text-lg font-semibold text-neutral-900">
                                        OFFICE ADDRESS                        
                                    </h4>
                                    <p>Survey No- 92/7 Koralur, Hoskote TQ, Kasaba - Hobli , Koralur Village, Bangalore-560067</p>
                                </div>
                            </div>
                           </div>
                           
                        </div>
                        
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6">
                            <div className="flex w-full gap-x-5">
                                <div>
                                    <FaPhone className='mt-2 text-3xl text-gray-600' />
                                </div>
                                <div className='flex-1'>
                                    <div className="text-neutral-600">
                                        <h4 className="text-lg font-semibold text-neutral-900">
                                            TELEPHONE NUMBER
                                        </h4>
                                        <p>+91 9999615962</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6">
                            <div className="flex w-full gap-x-5">
                                <div>
                                    <HiOutlineMail className='mt-2 text-3xl text-gray-600' />
                                </div>
                                <div className='flex-1'>
                                    <div className="text-neutral-600">
                                        <h4 className="text-lg font-semibold text-neutral-900">
                                            MAIL ADDRESS
                                        </h4>
                                        <p>Info@warehouzez.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <Blog />
        <NetworkofWarehouzez />
        <LookingForBest />
    </div>
  )
}

export default page