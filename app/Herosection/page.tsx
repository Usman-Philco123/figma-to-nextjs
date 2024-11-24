import React from "react";
import Image from "next/image";

export default function Herosection() {
    return(

        <>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 relative md:h-[800px] md:w-[1280px] sm:w-[428px] sm:h-[780px] md:pl-12 font-[Roboto] bg-pink-300">
           
            <div className="md:pt-60 md:pr-[60px] md:pl-[80px] md:w-[640px] md:h-[300px] sm:w-[428px] sm-h-[390px]">
           
            <div className="md:w-[500px] md:h-[212px] sm:w-[380px] sm:h-[174px] sm:mt-6 sm:justify-center sm:items-center sm:mx-auto">
            <h1 className="font-bold md:text-6xl sm:text-5xl md:w-[500px] md:h-[134px] sm:h-[96px] sm:w-[380px]sm:text-center">Learn new skills online with ease</h1>
            <p className="text-lg mt-6 md:w-[500px] h-[54px] sm:text-center">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>
            
            <div className="buttons w-[358px] h-16 mt-6 flex gap-4 sm:pt-6 sm:justify-center sm:items-center sm:mx-auto">
            <div className="w-[178px] h-[48px] py-3 px-6 border border-red-700 bg-black rounded-md">
            <button className="text-white hover:bg-gray-700 font-normal text-base w-[130px] h-[24px]">Start learning now</button></div>
            <div className="h-[48px] w-[164px] py-3 px-6 border border-black rounded-md">
            <button className="bg-white text-black hover:bg-gray-300 w-[116px] h-[24px] font-normal text-base">Explore Courses</button></div>
            </div>
               </div>

             <div className="flex md:w-[640px] md:h-[800px] sm:ml-0 justify-end items-start mx-auto md:mb-4">
             <Image width={640} height={800} src='/main-img.png' alt='main-image' 
             className="object-cover sm:w-[428px] sm:h-[390px] md:w-[640px] md:h-[800px]"/>
            </div>

        </div>
        </>
    )
}