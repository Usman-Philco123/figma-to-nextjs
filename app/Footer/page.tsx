import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(

        <>
         <div className="md:w-[1280px] md:h-[684px] sm:w-[428px] sm:h-[1411px] md:p-20 md:gap-20">
            <div className="md:w-[1120px] md:h-[524px] md:gap-20">
                 
                <div className="md:w-[1120px] md:h-[82px] sm:w-[380px] sm:h-[261px] md:justify-between md:flex font-[Roboto] sm:justify-center sm:items-center sm:mx-auto">
                 <div className="md:w-[500px] md:h-[51px] sm:w-[287px] sm:h-[91px] sm:justify-center sm:items-center sm:mx-auto">
                  <h1 className="md:w-[500px] md:h-[27px] sm:w-[287px] sm:h-[27px] font-semibold text-lg sm:text-center">Subscribe to our newsletter</h1>
                  <p className="md:w-[500px] md:h-[24px] sm:w-[287px] sm:h-[48px] sm:mt-4 font-normal text-base sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </div>

                 <div className="md:w-[400px] md:h-[82px] sm:w-[380px] sm:h-[146px] md:gap-4 sm:mt-4">
                    <div className="form md:w-[400px] md:h-[48px] gap-4 md:flex sm:justify-center sm:items-center sm:mx-auto">
                        <div className="md:w-[400px] md:h-[48px] rounded border border-black p-3 gap-2">
                            <input type="text" placeholder="Enter your email" className="w-[241px] h-[24px] "/>
                        </div>
                        <div className="button sm:mt-4 md:mt-0 md:w-[119px] h-[48px] sm:w-[380px] py-3 px-6 gap-2 rounded border border-black sm:text-center">
                        <button className="w-[71px] h-[24px] font-normal text-base">Subscribe</button>
                        </div>
                    </div>
                        <p className="md:w-[400px] h-[18px] sm:w-[380px] text-xs font-normal mt-4 sm:text-center md:text-start">By subscribing you agree to with our <span className="underline decoration-solid">Privacy Policy</span></p>
                    </div> 
                  

                </div>
             
             <div className="links md:w-[1120px] md:h-[225px] sm:w-[172px] sm:h-[811px] gap-8 mt-10 md:grid md:grid-cols-4 sm:justify-center sm:items-center sm:mx-auto sm:text-center">
               
                <div className="link1 md:w-[250px] md:h-[40px] sm:h-10 sm:w-[130.6px] flex md:gap-2">
                  <Image width={25} height={26} src='/frame-1.png' alt='design' className="sm:w-[32.58px] sm:h-[30.38px]"/>
                  <p className="w-[90px] h-[30px]">Ddsgnr</p>
                </div>
             
                <div className="link2 md:w-[250px] h-[225px] gap-2 font-[Roboto] sm:mt-4">
                 <h1 className="md:w-[250px] h-[24px] font-semibold text-base">Courses</h1>
                 <div className="md:w-[250px] h-[185px]">
               
                 <div className="md:w[250px] h-[37px] py-2"> 
                <Link className="md:w-[250px] h-[21px] font-normal text-sm flex-row" href={"business"}>Business</Link></div>
               <div className="md:w[250px] h-[37px] py-2">
                <Link className="md:w-[250px] h-[21px] font-normal text-sm flex-row" href={"development"}>Development</Link></div>
                <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"technology"}>Technology</Link>
                  </div>
                  <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"design"}>Design</Link></div>
                  <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"programming"}>Programming</Link></div>
                 </div>
                </div>

                <div className="link3 md:w-[250px] h-[225px] gap-2 font-[Roboto] sm:mt-4">
                 <h1 className="md:w-[250px] h-[24px] font-semibold text-base">Resources</h1>
                 <div className="md:w-[250px] h-[185px]">
               
                 <div className="md:w[250px] h-[37px] py-2"> 
                <Link className="md:w-[250px] h-[21px] font-normal text-sm flex-row" href={"career"}>Career</Link></div>
               <div className="md:w[250px] h-[37px] py-2">
                <Link className="md:w-[250px] h-[21px] font-normal text-sm flex-row" href={"Resume"}>Resume</Link></div>
                <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"learning"}>Learning</Link>
                  </div>
                  <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"interview preparation"}>Interview Preparation</Link></div>
                  <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"jobs"}>Jobs</Link></div>
                 </div>
                </div>

                <div className="link4 md:w-[250px] h-[225px] gap-2 font-[Roboto] sm:mt-4">
                 <h1 className="md:w-[250px] h-[24px] font-semibold text-base">About Us</h1>
                 <div className="md:w-[250px] h-[185px]">
               
                 <div className="md:w[250px] h-[37px] py-2"> 
                <Link className="md:w-[250px] h-[21px] font-normal text-sm flex-row" href={"contact"}>Contact</Link></div>
               <div className="md:w[250px] h-[37px] py-2">
                <Link className="md:w-[250px] h-[21px] font-normal text-sm flex-row" href={"help"}>Help/Support</Link></div>
                <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"faq"}>FAQ</Link>
                  </div>
                  <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"terms and conditions"}>Terms and Conditions</Link></div>
                  <div className="md:w[250px] h-[37px] py-2">
                  <Link className="md:w-[250px] h-[21px] font-normal text-sm" href={"partners"}>Partners</Link></div>
                 </div>
                </div>
             
             </div>
           
           <div className="md:w-[1120px] md:h-[57px] sm:w-[380px] md:mt-8"></div>
           <Image width={1120} height={1} src='/divider.png' alt='design'/>

           <div className="md:w-[1120px] md:h-[24px] sm:-[380px] sm:h-[147px] justify-between mt-6 md:flex">
            <div className="md:w-[564px] md:h-[21px] sm:w-[345px] sm:h-[66px] md:gap-6 md:flex sm:justify-center sm:items-center sm:mx-auto">
            <p className="w-[195px] h-[21px] font-normal text-sm sm:justify-center sm:items-center sm:mx-auto">2023 Ddsgnr. All right reserved.</p>
            <div className="links w-[345px] h-[21px] flex justify-center items-center mx-auto sm:mt-3 md:mt-0">
            <Link className="w-[87px] h-[21px] font-normal text-sm" href={"privacy"}>Privacy Policy</Link>
            <Link className="w-[105px] h-[21px] font-normal text-sm ml-6" href={"terms"}>Terms of Service</Link>
            <Link className="w-[105px] h-[21px] font-normal text-sm ml-6" href={"settings"}>Cookies Settings</Link>
             </div>
             </div>

           <div className="social-link w-[132px] h-[24px] gap-3 flex sm:justify-center sm:items-center sm:mx-auto ">
           <Image width={10} height={18} src='/soc-link1.png' alt='design'/>
           <Image width={18} height={18} src='/soc-link2.png' alt='design'/>
           <Image width={18} height={15.3} src='/soc-link-3.png' alt='design'/>
           <Image width={18} height={18} src='/soc-link4.png' alt='design'/>
           </div>

           </div>
            </div>
         </div>
  </>
)
}