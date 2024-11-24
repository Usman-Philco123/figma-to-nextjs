import React from "react";

export default function Achievements() {
    return(
        <>
        <div className="sm:hidden md:flex md:flex-col md:w-[1280px] md:h-[488px] md:pt-[82px]">
           
            <div className="w-[1152px] h-[136px] md:flex-row md:justify-center md:items-center mx-auto ">
                <h2 className="h-[58px] font-bold text-5xl text-center">Our Achievements</h2>
                <p className="h-[54px] font-normal text-lg text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>

            <div className="List md:h-[96px] md:w-[1256px] mt-6 justify-start items-center mx-auto flex">

                <div className="list1 w-[296px] h-[80px]">
                    <h1 className="font-bold text-4xl text-center">+200</h1>
                    <p className="font-normal text-base text-center pt-3">Courses</p>
                </div>

                <div className="list2 w-[296px] h-[80px] ml-6">
                    <h1 className="font-bold text-4xl text-center">50K</h1>
                    <p className="font-normal text-base text-center pt-3">Mentors</p>
                </div>

                 <div className="list3 w-[296px] h-[80px] ml-6">
                    <h1 className="font-bold text-4xl text-center">370k</h1>
                    <p className="font-normal text-base text-center pt-3">Students</p>
                </div>

                <div className="list4 w-[296px] h-[80px] ml-6">
                    <h1 className="font-bold text-4xl text-center">100+</h1>
                    <p className="font-normal text-base text-center pt-3">Recognition</p>
                </div>

            </div>

        </div>
        </>
    )
}