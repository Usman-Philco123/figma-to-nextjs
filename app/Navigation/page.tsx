"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";                    
import { useState } from "react";

export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return(

        <>
        <div className="nav1 hidden relative bg-gray-50 w-[1280px] h-[54px] mb-2 pt-2 lg:flex">
            <div className="w-[396px] gap-4 flex">
         <h1 className="phone pl-14 text-xs text-center font-medium pt-3">Phone Number 956 742 455 678</h1>
         <Image width={50} height={50} src='/line-3.png' alt='line-image' className="w-[1px]"/>
         <h1 className="email text-xs text-center font-medium pt-3">Email:info@ddsgnrcom</h1>
         </div>

         <div className="social-media flex justify-end items-center mx-auto w-[736px] mr-0">
            <button className="facebook ml-[320px]">
            <FaFacebookF />
            </button>
            <button className="instagram ml-2">
            <FaInstagram />
            </button>
            <button className="twitter ml-2">
            <FaTwitter />
            </button>
            <button className="linkedin ml-2">
            <FaLinkedin />
            </button>
        </div>
       </div>



       <div className="nav2 flex relative bg-gray-50 pt-4 h-[72px] md:w-[1280px] sm:w-[428px] justify-between">
        <div className="logo flex ml-10 pt-2 font-bold w-[130px] h-[41px] gap-2">
            <Image width={32.58} height={30.38} src='/logo-image.png' alt='logo-image' className="flex object-cover ml-2"/>
            <p className="w-[90px] h-[30px]"> Ddsgnr</p>
           </div>

            {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col items-end justify-center space-y-1 sm:w-[48px] sm:h-[48px]"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </button>

        <div className="navbar hidden bg-white ml-40 rounded-md w-[910px] h-[44px] m-1 lg:flex">
            <nav className=" justify-start items-center mx-auto py-1 font-normal w[687px] h-[44px] lg:flex">
                <Link className="ml-8 underline w-[64px]" href='/'>Home</Link>
                <Link className="ml-8 w-[79px]" href='/courses'>Courses</Link>
                <Link className="ml-8 w-[81px]" href='/services'>Services</Link>
                <Link className="ml-8 w-[113px]" href='/achievements'>Achievements</Link>
                <Link className="ml-8 w-[86px]" href='/about'>About Us</Link>
                <Link className="ml-8 w-[104px]" href='/testimonial'>Testimonial</Link>
            </nav>
        </div>
            <div className="hidden relative ml-8 w-[191px] lg:flex">
            <button className="relative ml-6 border border-black p-2 flex justify-center items-center mx-auto m-2 rounded-md bg-white text-black text-sm w-20 h-10">Login</button>
            <button className="relative ml-2 border border-black p-2 flex justify-center items-center mx-auto m-2 rounded-md bg-black text-white text-sm w-[95px] h-10">SignUp</button>
            </div>
            
       </div>


        </>
    )
}