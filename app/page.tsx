
import React from "react";
import Herosection from "./Herosection/page";
import Navigation from "./Navigation/page";
import Banner from "./Banner/page";
import Achievement from "./Achievement/page";
import Achievements from "./achievements/page";
import Services from "./Services/page";
import OurTeam from "./OurTeam/page";
import Testimonial from "./Testimonial/page";
import Footer from "./Footer/page";
import Courses from "./Courses/page";

export default function Home() {
  return (
  
 <div>
        <Navigation />
        <Herosection />
        <Banner />
        <Services />
        <Achievements />
        <Achievement />
        <Courses />
        <OurTeam />
        <Testimonial />
        <Footer />
 </div>
 

  );
}
