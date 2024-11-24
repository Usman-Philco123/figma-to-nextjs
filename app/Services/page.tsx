import React from "react";
import { GrCodepen } from "react-icons/gr";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbArrowsShuffle } from "react-icons/tb";
import { GiSatelliteCommunication } from "react-icons/gi";
import { SiShutterstock } from "react-icons/si";
import { LuArrowRightLeft } from "react-icons/lu";
import { MdBusinessCenter } from "react-icons/md";
import { TfiBook } from "react-icons/tfi";
import { PiNotepad } from "react-icons/pi";

export default function Services() {
    return(
        <>
        <div className="relative md:h-[1049px] md:w-[1280px] sm:w-[428px] sm:h-[862px] sm:px-6 sm:ml-2">
        <div className="heading grid justify-center items-center mx-auto md:w-[1280px] md:h-[109px]">
        <h1 className="font-bold md:text-5xl sm:text-3xl md:pt-36 sm:text-center">Explore Courses by Category</h1>
        <p className="mt-6 sm:text-lg">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
         </div>


        <div className="container grid md:grid-cols-3 md:h-[636px] md:w-[1280px] md:mt-[199px] sm:w-[380px] sm:h-[556px] sm:mt-12">

            <div className="box1 bg-gray-200 h-[132px] md:w-[410px] sm:w-[380px] pl-2 flex justify-start items-center mx-auto rounded-md ml-0">
           <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <GrCodepen className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Design & Development</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
            
            <div className="box2 bg-gray-200 h-[132px] md:w-[410px] sm:w-[380px] pl-2 flex justify-start items-center mx-auto rounded-md sm:ml-0 md:ml-24">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <HiOutlineSpeakerWave className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Marketing</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
           
            <div className="box3 bg-gray-200 h-[132px] md:w-[410px] sm:w-[380px] pl-2 flex justify-start items-center mx-auto rounded-md sm:ml-0 md:ml-48">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <TbArrowsShuffle className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Development</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
           
            <div className="box4 sm:hidden bg-gray-200 h-[132px] w-[410px] pl-2 md:flex justify-start items-center mx-auto rounded-md ml-0">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <GiSatelliteCommunication className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Communication</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
            
            <div className="box5 sm:hidden bg-gray-200 h-[132px] w-[410px] pl-2 md:flex justify-start items-center mx-auto rounded-md sm:ml-0 md:ml-24">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <SiShutterstock className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Digital Marketing</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
           
            <div className="box6 sm:hidden bg-gray-200 h-[132px] w-[410px] pl-2 md:flex justify-start items-center mx-auto rounded-md sm:ml-0 md:ml-48">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <LuArrowRightLeft className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Self Development</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>

            <div className="box7 sm:hidden bg-gray-200 h-[132px] w-[410px] pl-2 md:flex justify-start items-center mx-auto rounded-md sm:ml-0">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <MdBusinessCenter  className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Business</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
            
            <div className="box8 sm:hidden bg-gray-200 h-[132px] w-[410px] pl-2 md:flex justify-start items-center mx-auto rounded-md sm:ml-0 md:ml-24">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <TfiBook className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Finance</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
           
            <div className="box9 sm:hidden bg-gray-200 h-[132px] w-[410px] pl-2 md:flex justify-start items-center mx-auto rounded-md sm:ml-0 md:ml-48">
            <div className="h-[100px] w-[100px] bg-gray-50 rounded flex justify-center items-center mx-auto">
            <PiNotepad className="h-[32px] w-[32px]"/>
            </div> 
            <div className="ml-6 w-[267.67] h-[57px]">
            <h1 className="font-semibold text-xl">Development</h1>
            <p className="font-normal text-lg">50+ Courses Available</p>
            </div>
            </div>
             
             <div className="md:w-[1280px]  pt-8">
            <button className="w-[155px] h-12 border border-black rounded-md px-6 py-3 font-normal text-sm flex justify-center items-center mx-auto">View All Courses</button>
        </div>
       
       </div>
        </div>
        </>
    )
}