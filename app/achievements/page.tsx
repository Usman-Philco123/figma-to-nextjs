import React from "react";

export default function Achievements() {
    return(
        <>
        <div className="relative md:w-[1280px] md:h-[488px] ms:pt-[82px] sm:w-[428px] sm:h-[451px]">
           
            <div className="md:w-[1152px] md:h-[136px] sm:w-[380px] sm:h-[147px] flex-row justify-center items-center mx-auto">
                <h2 className="md:h-[58px] sm:h-[42px] sm:text-3xl font-bold md:text-5xl text-center">Our Achievements</h2>
                <p className="md:h-[54px] sm:h-[81px] font-normal text-lg text-center mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>

            <div className="List md:h-[96px] md:w-[1256px] sm:w-[380px] sm:h-[176px] mt-6 justify-start items-center mx-auto grid sm:grid-cols-2 md:grid-cols-4 sm:mt-12">

                <div className="list1 md:w-[296px] md:h-[80px] sm:w-[182px] sm:h-[60px]">
                    <h1 className="font-bold text-4xl text-center">+200</h1>
                    <p className="font-normal text-base text-center pt-3">Courses</p>
                </div>

                <div className="list2 md:w-[296px] md:h-[80px] sm:w-[182px] sm:h-[60px] ">
                    <h1 className="font-bold text-4xl text-center">50K</h1>
                    <p className="font-normal text-base text-center pt-3">Mentors</p>
                </div>

                 <div className="list3 md:w-[296px] md:h-[80px] sm:w-[182px] sm:h-[60px]">
                    <h1 className="font-bold text-4xl text-center">370k</h1>
                    <p className="font-normal text-base text-center pt-3">Students</p>
                </div>

                <div className="list4 md:w-[296px] md:h-[80px] sm:w-[182px] sm:h-[60px]">
                    <h1 className="font-bold text-4xl text-center">100+</h1>
                    <p className="font-normal text-base text-center pt-3">Recognition</p>
                </div>

            </div>

        </div>
        </>
    )
}