import React from 'react'
import Image from 'next/image'

export default function Testimonial() {
  return (
    <div className='md:w-[1280px] md:h-[830.89px] md:bg-gray-50 sm:w-[428px] sm:h-[681.89px]'>

      <div className='md:w-[560px] md:h-[109px] pt-20 sm:w-[361px] sm:h-[120px] sm:justify-center sm:items-center sm:mx-auto md:-ml-0'>
        <h2 className='md:w-[560px] h-[58px] font-bold md:text-5xl sm:text-3xl font-[Roboto] ml-6 sm:text-center '>Customer testimonial</h2>
        <p className='md:w-[560px] h-[27px] font-[Roboto] ml-6 sm:text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

      <div className="container md:w-[1152px] md:h-[417.89px] sm:mt-12">
        
        <div className="sub-container md:w-[1152px] md:h-[417.89px] md:flex md:flex-row">
          
          <div className="cont1 md:w-[416px] h-[294.89px] sm:w-[380px] border border-black p-8 ">
             <div className="stars w-[116px] h-[18.89px] gap-4 flex">
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
             </div>

             <div className="content md:w-[352px] h-[188px] sm:w-[316px] sm:h-[215px] mt-6">
              <p className='md:w-[352px] md:h-[108px] font-normal text-base font-[Roboto] '>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus mi quis viverra ornare.</p>

             <div className="detail md:w-[254px] md:h-[56px] sm:mt-5 gap-5 relative flex">
                <Image className='rounded-full'  width={56} height={56} src='/card3.png' alt='person-img'/>
                <div className='w-[178px] h-[48px]'>
                <h4 className='w-[111px] h-[24px] font-semibold text-base'>James Nkudu</h4>
                <p className='w-[178px] h-[24px] font-normal text-base'>Software Developer</p>
                </div>
             </div>
             </div>
          </div>

          <div className="cont2 sm:hidden md:flex md:flex-col w-[416px] h-[294.89px] border border-black p-8 ml-4">
             <div className="stars w-[116px] h-[18.89px] gap-4 flex">
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
             </div>

             <div className="content w-[352px] h-[188px] mt-6">
              <p className='md:w-[352px] md:h-[108px] font-normal text-base font-[Roboto] md:mt-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus mi quis viverra ornare.</p>

             <div className="detail md:w-[254px] md:h-[56px] gap-5 relative flex">
                <Image className='rounded-full'  width={56} height={56} src='/card1.png' alt='person-img'/>
                <div className='md:w-[178px] md:h-[48px]'>
                <h4 className='w-[117px] h-[24px] font-semibold text-base'>Erick Kipkemboi</h4>
                <p className='w-[178px] h-[24px] font-normal text-base'>Scrum Master</p>
                </div>
             </div>
             </div>
          </div>

          <div className="cont3 sm:hidden md:flex md:flex-col w-[416px] h-[294.89px] border border-black p-8 ml-4">
             <div className="stars w-[116px] h-[18.89px] gap-4 flex">
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
              <Image width={20} height={18} src='/star.png' alt='star-image'/>
             </div>

             <div className="content w-[352px] h-[188px] mt-6">
              <p className='md:w-[352px] md:h-[108px] font-normal text-base font-[Roboto] '>Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus mi quis viverra ornare.</p>

             <div className="detail md:w-[254px] md:h-[56px] gap-5 relative flex">
                <Image className='rounded-full'  width={56} height={56} src='/card6.png' alt='person-img'/>
                <div className='w-[178px] h-[48px]'>
                <h4 className='w-[111px] h-[24px] font-semibold text-base'>Stephen Kerubo</h4>
                <p className='w-[178px] h-[24px] font-normal text-base'>UI/UX Designer</p>
                </div>
             </div>
             </div>
          </div>
     
     
     
        </div>
      </div>
   
     <div className='md:w-[1280px] md:h-[48px] sm:w-[380px] sm:h-[321.89px] flex relative sm:mt-8'>
      <div className="dots w-[72px] h-[8px] gap-2 flex relative ml-6 mt-5">
        <Image width={8} height={8} src='/dot.png' alt='dots'/>
        <Image width={8} height={8} src='/dot-gray.png' alt='dots'/>
        <Image width={8} height={8} src='/dot-gray.png' alt='dots'/>
        <Image width={8} height={8} src='/dot-gray.png' alt='dots'/>
        <Image width={8} height={8} src='/dot-gray.png' alt='dots'/>
     </div>
     
      <div className='w-[1152px] h-[48px] gap-[15px] flex relative justify-end items-end mx-auto'>
        <button className='w-[48px] h-[48px] border border-gray-600 rounded-[50px] p-3'>
          <Image width={16} height={16} src='/vector-1.png' alt='vector-img'/>
        </button>
        <button className='w-[48px] h-[48px] border border-gray-600 rounded-[50px] p-3'>
         <Image width={16} height={16} src='/vector-2.png' alt='vector-img'/>
        </button>
      </div>
      </div>
   
      
      </div>
    </div>
  )
}
