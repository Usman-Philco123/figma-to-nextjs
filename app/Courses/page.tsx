import React from "react";
import Image from "next/image";

export default function Courses() {
    return(
        <>
       <div className="md:w-[1280px] md:h-[1742px] sm:w-[428px] sm:h-[2050px]">
        <div className="md:w-[768px] md:h-[118px] sm:w-[249px] sm:h-[93px] flex-row justify-center items-center mx-auto md:pt-[112px]">
            <h1 className="md:h-[67px] md:w-[768px] sm:w-[119px] sm:h-[42px] md:text-6xl sm:text-3xl font-bold md:text-center justify-center items-center mx-auto">Courses</h1>
            <p className="h-[27px] w-[249px] font-normal text-base justify-center items-center mx-auto mt-6">Your Ultimate Guide to Learning</p>
        </div>

        <div className="md:w-[1280px] md:h-[1340px] sm:w-[380px] sm:h-[1898px] text-center">
         
         <div className="buttons w-[336px] h-[40px] font-normal text-base flex justify-center items-center mx-auto md:mt-36 sm:mt-8">
            <button className="1 w-[87] h-[24px] border-1 border-b-2 text-center">Popular</button>
            <button className="2 w-[108px] h-[24px] ml-2 text-center">Recommended</button>
            <button className="3 w-[77px] h-[24px] ml-2 text-center">Best Price</button>
         </div>

         <div className="row-1 md:h-[534px] md:w-[1280px] sm:w-[380px] sm:h-[1690px] mt-16 grid md:grid-cols-3 sm:grid-cols-1">
          
           <div className="box1 w-[416px] h-[534px] bg-gray-100 relative">
            <Image width={200} height={200} src="/design1.jpg" alt="ui/ux-design" className="w-[416px] h-[300px]" />
           
            <div className="h-[210px] w-[416px] mt-6 relative">
              <div className="w-[382px] h-[24px] flex justify-center items-start mx-auto">
            <h4 className="w-[326px] h-[21px] mt-2 text-left ml-0 font-semibold text-sm">Design</h4>
            <Image width={50} height={50} src="/star-1.png" alt="star image" className="w-6 h-6"/>
            <p className="w-5 h-6 ml-1">5.0</p>
            </div>
            
            <div className="w-[382px] h-[140px] mt-2 justify-center items-start mx-auto">
            <h5 className="w-[382px] h-[34px] font-bold text-2xl text-left">UI/UX Design 201</h5>
            <p className="w-[382px] h-[48px] font-normal text-base ml-0 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam cumque.</p>
           
            <div className="h-[40px] w-[382px] justify-start items-start mx-auto relative flex">
           
           <div className="w-[117] h-[40px]  py-2 px-5 border border-black rounded font-normal mt-4 flex">
            <button className="w-[77px] h-[24px] flex text-sm">Enroll Now</button>
            </div>
             <div className="w-[77] h-[40px]  py-2 px-5 rounded font-normal text-base mt-4 flex justify-center items-center mx-auto ml-2">
            <button className="w-[37px] h-[24px] rounded text-base">$400</button>
            </div>
            </div>
            </div>
            </div>
           </div>

           <div className="box2  w-[416px] h-[534px] bg-gray-100 relative md:ml-4">
            <Image width={200} height={200} src="/program1.png" alt="program-img" className="w-[416px] h-[300px]" />
           
            <div className="h-[210px] w-[416px] mt-6 relative">
              <div className="w-[382px] h-[24px] flex justify-center items-start mx-auto">
            <h4 className="w-[326px] h-[21px] mt-2 text-left ml-0 font-semibold text-sm">Programming</h4>
            <Image width={50} height={50} src="/star-1.png" alt="star image" className="w-6 h-6"/>
            <p className="w-5 h-6 ml-1">5.0</p>
            </div>
            
            <div className="w-[382px] h-[140px] mt-2 justify-center items-start mx-auto">
            <h5 className="w-[382px] h-[34px] font-bold text-2xl text-left">Introdection to Python</h5>
            <p className="w-[382px] h-[48px] font-normal text-base ml-0 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam cumque.</p>
           
            <div className="h-[40px] w-[382px] justify-start items-start mx-auto relative flex">
           
           <div className="w-[117] h-[40px]  py-2 px-5 border border-black rounded font-normal mt-4 flex">
            <button className="w-[77px] h-[24px] flex text-sm">Enroll Now</button>
            </div>
             <div className="w-[77] h-[40px]  py-2 px-5 rounded font-normal text-base mt-4 flex justify-center items-center mx-auto ml-2">
            <button className="w-[37px] h-[24px] rounded text-base">$400</button>
            </div>
            </div>
            </div>
            </div>
           </div>

           <div className="box3 w-[416px] h-[534px] bg-gray-100 relative md:ml-8">
            <Image width={200} height={200} src="/business.png" alt="business-img" className="w-[416px] h-[300px]" />
           
            <div className="h-[210px] w-[416px] mt-6 relative">
              <div className="w-[382px] h-[24px] flex justify-center items-start mx-auto">
            <h4 className="w-[326px] h-[21px] mt-2 text-left ml-0 font-semibold text-sm">Business</h4>
            <Image width={50} height={50} src="/star-1.png" alt="star image" className="w-6 h-6"/>
            <p className="w-5 h-6 ml-1">5.0</p>
            </div>
            
            <div className="w-[382px] h-[140px] mt-2 justify-center items-start mx-auto">
            <h5 className="w-[382px] h-[34px] font-bold text-2xl text-left">Data Analysis for Beginners</h5>
            <p className="w-[382px] h-[48px] font-normal text-base ml-0 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam cumque.</p>
           
            <div className="h-[40px] w-[382px] justify-start items-start mx-auto relative flex">
           
           <div className="w-[117] h-[40px]  py-2 px-5 border border-black rounded font-normal mt-4 flex">
            <button className="w-[77px] h-[24px] flex text-sm">Enroll Now</button>
            </div>
             <div className="w-[77] h-[40px]  py-2 px-5 rounded font-normal text-base mt-4 flex justify-center items-center mx-auto ml-2">
            <button className="w-[37px] h-[24px] rounded text-base">$400</button>
            </div>
            </div>
            </div>
            </div>
           </div>

         </div>

         <div className="row-2 h-[534px] w-[1280px] mt-8 md:flex sm:hidden">
          
          <div className="box4 w-[416px] h-[534px] bg-gray-100 relative">
           <Image width={200} height={200} src="/art.png" alt="art-design" className="w-[416px] h-[300px]" />
          
           <div className="h-[210px] w-[416px] mt-6 relative">
             <div className="w-[382px] h-[24px] flex justify-center items-start mx-auto">
           <h4 className="w-[326px] h-[21px] mt-2 text-left ml-0 font-semibold text-sm">Art</h4>
           <Image width={50} height={50} src="/star-1.png" alt="star image" className="w-6 h-6"/>
           <p className="w-5 h-6 ml-1">5.0</p>
           </div>
           
           <div className="w-[382px] h-[140px] mt-2 justify-center items-start mx-auto">
           <h5 className="w-[382px] h-[34px] font-bold text-2xl text-left">Art Specialization</h5>
           <p className="w-[382px] h-[48px] font-normal text-base ml-0 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam cumque.</p>
          
           <div className="h-[40px] w-[382px] justify-start items-start mx-auto relative flex">
          
          <div className="w-[117] h-[40px]  py-2 px-5 border border-black rounded font-normal mt-4 flex">
           <button className="w-[77px] h-[24px] flex text-sm">Enroll Now</button>
           </div>
            <div className="w-[77] h-[40px]  py-2 px-5 rounded font-normal text-base mt-4 flex justify-center items-center mx-auto ml-2">
           <button className="w-[37px] h-[24px] rounded text-base">$400</button>
           </div>
           </div>
           </div>
           </div>
          </div>

          <div className="box5 w-[416px] h-[534px] bg-gray-100 relative ml-7">
           <Image width={200} height={200} src="/law-img.png" alt="law-image" className="w-[416px] h-[300px]" />
          
           <div className="h-[210px] w-[416px] mt-6 relative">
             <div className="w-[382px] h-[24px] flex justify-center items-start mx-auto">
           <h4 className="w-[326px] h-[21px] mt-2 text-left ml-0 font-semibold text-sm">Law</h4>
           <Image width={50} height={50} src="/star-1.png" alt="star image" className="w-6 h-6"/>
           <p className="w-5 h-6 ml-1">5.0</p>
           </div>
           
           <div className="w-[382px] h-[140px] mt-2 justify-center items-start mx-auto">
           <h5 className="w-[382px] h-[34px] font-bold text-2xl text-left">Rule of Law</h5>
           <p className="w-[382px] h-[48px] font-normal text-base ml-0 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam cumque.</p>
          
           <div className="h-[40px] w-[382px] justify-start items-start mx-auto relative flex">
          
          <div className="w-[117] h-[40px]  py-2 px-5 border border-black rounded font-normal mt-4 flex">
           <button className="w-[77px] h-[24px] flex text-sm">Enroll Now</button>
           </div>
            <div className="w-[77] h-[40px]  py-2 px-5 rounded font-normal text-base mt-4 flex justify-center items-center mx-auto ml-2">
           <button className="w-[37px] h-[24px] rounded text-base">$400</button>
           </div>
           </div>
           </div>
           </div>
          </div>

          <div className="box6 w-[416px] h-[534px] bg-gray-100 relative ml-7">
           <Image width={200} height={200} src="/tech.png" alt="tech-img" className="w-[416px] h-[300px]" />
          
           <div className="h-[210px] w-[416px] mt-6 relative">
             <div className="w-[382px] h-[24px] flex justify-center items-start mx-auto">
           <h4 className="w-[326px] h-[21px] mt-2 text-left ml-0 font-semibold text-sm">Tech</h4>
           <Image width={50} height={50} src="/star-1.png" alt="star image" className="w-6 h-6"/>
           <p className="w-5 h-6 ml-1">5.0</p>
           </div>
           
           <div className="w-[382px] h-[140px] mt-2 justify-center items-start mx-auto">
           <h5 className="w-[382px] h-[34px] font-bold text-2xl text-left">Introduction to webflow</h5>
           <p className="w-[382px] h-[48px] font-normal text-base ml-0 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam cumque.</p>
          
           <div className="h-[40px] w-[382px] justify-start items-start mx-auto relative flex">
          
          <div className="w-[117] h-[40px]  py-2 px-5 border border-black rounded font-normal mt-4 flex">
           <button className="w-[77px] h-[24px] flex text-sm">Enroll Now</button>
           </div>
            <div className="w-[77] h-[40px]  py-2 px-5 rounded font-normal text-base mt-4 flex justify-center items-center mx-auto ml-2">
           <button className="w-[37px] h-[24px] rounded text-base">$400</button>
           </div>
           </div>
           </div>
           </div>
          </div>

        </div>
      
        <div className="md:w-[1280px] mt-16">
            <button className="w-[152px] h-10 border border-black rounded-md px-4 py-2 font-normal text-sm flex justify-center items-center mx-auto">View All Courses</button>
        </div>
      
      
       </div>
       </div>
        </>
    )
}