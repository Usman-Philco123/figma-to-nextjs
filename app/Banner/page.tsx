import React from "react";
import Image from "next/image";

export default function Banner() {
    return(
  <>
  <div className="md:flex relative md:h-[228px] md:w-[1280px] md:bg-gray-50 md:pt-20 sm:-w-[428px] sm:h-[239.34px] sm:my-12 sm:px-6 md:mt-0">
 <h1 className="w-[320px] h-[68px] md:flex justify-center items-center mx-auto ml-0 font-bold text-2xl">Trusted by 2000+ companies worldwide</h1>

 <div className="Logos lg:w-[880px] md:w-[428px] md:h-[65.34px] sm:mt-10 h-14 flex justify-around items-center mx-auto">
   
   <Image width={100} height={100} src='/logo1.png' alt='logo1' className="w-[123.8px] h-[38.52px]"/>

   <Image width={100} height={100} src='/logo2.png' alt='logo1' className="ml-2" />

   <Image width={100} height={100} src='/logo3.png' alt='logo1' className="ml-2"/>

   <Image width={100} height={100} src='/logo4.png' alt='logo1' className="ml-2"/>

   <Image width={100} height={100} src='/logo5.png' alt='logo1' className="ml-2"/>

   <Image width={100} height={100} src='/logo6.png' alt='logo1' className="ml-2 mr-2"/>

 
 </div>
  </div>
  </>

    )
}