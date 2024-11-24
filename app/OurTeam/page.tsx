import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OurTeam() {
  return (
    <div className='md:w-[1280px] md:h-[895px] sm:relative sm:w-[428px] sm:h-[1075px] bg-gray-50'>
       
        <div className='md:w-[768px] md:h-[109px] sm:w-[363px] sm:h-[120px] justify-center items-center mx-auto md:pt-20 sm:pt-12'>
            <h1 className='md:w-[768px] md:h-[58px] font-bold text-5xl text-center'>Our team</h1>
            <p className='md:w-[768px] md:h-[27px] font-normal text-lg text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        <div className='md:w-[1280px] md:h-[482px] relative ml-0'>

            <div className="row1 w-[1280px] h-[273px] pt-36 sm:w-[380px] sm:h-[723px] md:flex relative">

                <div className="card1 w-[394.67px] md:h-[273px] sm:h-[209px] md:ml-0">
                   
                    <div className="img w-20 h-20 flex justify-center items-start mx-auto">
                        <Image width={80} height={80} src="/card1.png" alt="team-img"/>
                    </div>
                    <div className='w-[394.67px] md:h-[121px] mt-4'>
                        <h1 className='w-[394.67px] md:h-[30px] font-semibold text-xl text-center'>James Nduku</h1>
                        <h5 className='w-[394.67px] md:h-[27px] font-normal text-base text-center mt-2'>Marketing Coordinator</h5>
                        <p className='md:w-[394.67px] md:h-[48px] sm:hidden md:flex font-normal text-sm text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>

                    <div className="links w-[100px] h-[24px] relative flex justify-center items-center mx-auto mt-6">
                       
                    <Link className='w-[24px] h-[24px]' href="www.linkedin.com">
                        <Image width={18} height={18} src="/linkedin.png" alt="linkedin"/>
                        </Link>
                    <Link className='w-[24px] h-[24px] ml-[14px]' href="www.twitter.com">
                        <Image width={18} height={15.3} src="/twitter.png" alt="twitter"/>
                        </Link> 
                    <Link className='w-[24px] h-[24px] ml-[14px]' href="www.linkedin.com">
                        <Image width={18} height={18} src="/dribble.png" alt="dribble"/>
                        </Link>   

                    </div>

                </div>

                <div className="card2 w-[394.67px] md:h-[273px] sm:mt-12 md:mt-0 sm:h-[209px] md:ml-12">
                   
                   <div className="img w-20 h-20 flex justify-center items-start mx-auto">
                       <Image width={80} height={80} src="/card2.png" alt="team-img"/>
                   </div>
                   <div className='w-[394.67px] md:h-[121px] mt-4'>
                       <h1 className='w-[394.67px] md:h-[30px] font-semibold text-xl text-center'>Joseph Munyambu</h1>
                       <h5 className='w-[394.67px] md:h-[27px] font-normal text-base text-center mt-2'>Nursing Assistant</h5>
                       <p className='md:w-[394.67px] md:h-[48px] sm:hidden md:flex font-normal text-sm text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                   </div>

                   <div className="links w-[100px] h-[24px] relative flex justify-center items-center mx-auto mt-6">
                      
                   <Link className='w-[24px] h-[24px]' href="www.linkedin.com">
                       <Image width={18} height={18} src="/linkedin.png" alt="linkedin"/>
                       </Link>
                   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.twitter.com">
                       <Image width={18} height={15.3} src="/twitter.png" alt="twitter"/>
                       </Link> 
                   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.linkedin.com">
                       <Image width={18} height={18} src="/dribble.png" alt="dribble"/>
                       </Link>   

                   </div>

               </div>

               <div className="card3 w-[394.67px] md:h-[273px] sm:mt-12 md:mt-0 sm:h-[209px] md:ml-12">
                   
                   <div className="img w-20 h-20 flex justify-center items-start mx-auto">
                       <Image width={80} height={80} src="/card3.png" alt="team-img"/>
                   </div>
                   <div className='w-[394.67px] md:h-[121px] mt-4'>
                       <h1 className='w-[394.67px] md:h-[30px] font-semibold text-xl text-center'>Joseph Ngumbau</h1>
                       <h5 className='w-[394.67px] md:h-[27px] font-normal text-base text-center mt-2'>Medical Assistant</h5>
                       <p className='md:w-[394.67px] md:h-[48px] sm:hidden md:flex font-normal text-sm text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                   </div>

                   <div className="links w-[100px] h-[24px] relative flex justify-center items-center mx-auto mt-6">
                      
                   <Link className='w-[24px] h-[24px]' href="www.linkedin.com">
                       <Image width={18} height={18} src="/linkedin.png" alt="linkedin"/>
                       </Link>
                   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.twitter.com">
                       <Image width={18} height={15.3} src="/twitter.png" alt="twitter"/>
                       </Link> 
                   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.linkedin.com">
                       <Image width={18} height={18} src="/dribble.png" alt="dribble"/>
                       </Link>   

                   </div>

               </div>




            </div>
        
            <div className="row2 md:w-[1280px] md:h-[273px] md:flex sm:hidden relative -mt-56">

<div className="card4 w-[394.67px] h-[273px] ml-0">
   
    <div className="img w-20 h-20 flex justify-center items-start mx-auto">
        <Image width={80} height={80} src="/card4.png" alt="team-img"/>
    </div>
    <div className='w-[394.67px] h-[121px] mt-4'>
        <h1 className='w-[394.67px] h-[30px] font-semibold text-xl text-center'>Erick Kipkemboi</h1>
        <h5 className='w-[394.67px] h-[27px] font-normal text-base text-center mt-2'>Web Designer</h5>
        <p className='w-[394.67px] h-[48px] font-normal text-sm text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>

    <div className="links w-[100px] h-[24px] relative flex justify-center items-center mx-auto mt-6">
       
    <Link className='w-[24px] h-[24px]' href="www.linkedin.com">
        <Image width={18} height={18} src="/linkedin.png" alt="linkedin"/>
        </Link>
    <Link className='w-[24px] h-[24px] ml-[14px]' href="www.twitter.com">
        <Image width={18} height={15.3} src="/twitter.png" alt="twitter"/>
        </Link> 
    <Link className='w-[24px] h-[24px] ml-[14px]' href="www.linkedin.com">
        <Image width={18} height={18} src="/dribble.png" alt="dribble"/>
        </Link>   

    </div>

</div>

<div className="card5 w-[394.67px] h-[273px] ml-12">
   
   <div className="img w-20 h-20 flex justify-center items-start mx-auto">
       <Image width={80} height={80} src="/card5.png" alt="team-img"/>
   </div>
   <div className='w-[394.67px] h-[121px] mt-4'>
       <h1 className='w-[394.67px] h-[30px] font-semibold text-xl text-center'>Stephen Kerubo</h1>
       <h5 className='w-[394.67px] h-[27px] font-normal text-base text-center mt-2'>President of Sales</h5>
       <p className='w-[394.67px] h-[48px] font-normal text-sm text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
   </div>

   <div className="links w-[100px] h-[24px] relative flex justify-center items-center mx-auto mt-6">
      
   <Link className='w-[24px] h-[24px]' href="www.linkedin.com">
       <Image width={18} height={18} src="/linkedin.png" alt="linkedin"/>
       </Link>
   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.twitter.com">
       <Image width={18} height={15.3} src="/twitter.png" alt="twitter"/>
       </Link> 
   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.linkedin.com">
       <Image width={18} height={18} src="/dribble.png" alt="dribble"/>
       </Link>   

   </div>

</div>

<div className="card6 w-[394.67px] h-[273px] ml-12">
   
   <div className="img w-20 h-20 flex justify-center items-start mx-auto">
       <Image width={80} height={80} src="/card6.png" alt="team-img"/>
   </div>
   <div className='w-[394.67px] h-[121px] mt-4'>
       <h1 className='w-[394.67px] h-[30px] font-semibold text-xl text-center'>Jojn Leboo</h1>
       <h5 className='w-[394.67px] h-[27px] font-normal text-base text-center mt-2'>Dog Trainer</h5>
       <p className='w-[394.67px] h-[48px] font-normal text-sm text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
   </div>

   <div className="links w-[100px] h-[24px] relative flex justify-center items-center mx-auto mt-6">
      
   <Link className='w-[24px] h-[24px]' href="www.linkedin.com">
       <Image width={18} height={18} src="/linkedin.png" alt="linkedin"/>
       </Link>
   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.twitter.com">
       <Image width={18} height={15.3} src="/twitter.png" alt="twitter"/>
       </Link> 
   <Link className='w-[24px] h-[24px] ml-[14px]' href="www.linkedin.com">
       <Image width={18} height={18} src="/dribble.png" alt="dribble"/>
       </Link>   

   </div>

</div>




</div>
   
<div className="sm:w-[89px] sm:h-[40px] md:hidden sm:flex sm:justify-center sm:items-center sm:mx-auto sm:mt-2 sm:ml-[158px]">
            <button className="sm:w-[89px] sm:h-10 border border-black rounded-md px-4 py-2 font-normal text-sm">View All</button>
        </div>


    </div>
    </div>
  )
}
