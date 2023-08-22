
"use client";


import rightImg from "@/images/hero-right1.png";
import React from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "@/components/SectionPromo3";
import HeaderTitle from './HeaderTitle';

//import SectionVideo from "./SectionVideos"
import Crousal from "../Crousal/page";

const PageAbout = ({}) => {
 
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}

      <BgGlassmorphism />
      <Crousal 
      />
     
      <div className="pt-2 ">
      <HeaderTitle/>
      </div>
     
       <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">

       <div className="relative overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 rounded">
        <iframe
          className="w-full h-full absolute top-0 left-0 rounded"
          src={'https://www.youtube.com/embed/pcZivOPnsJU'}
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
       {/* <SectionVideo/> */}
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="

          After the Creation of Uttarakhand state in November 9, 2000 as 27 state of India. It was felt by Govt. of Uttarakhand that vide extension of sericulture in all over the state it is necessary to establish a separate Directorate.Through which DOS Uttarakhand can generate the employment opportunities for unemployed people as well as up-liftmen of the socio economic condition of rural people in the state. After some time in year 2001 A separate Directorate of Sericulture Uttarakhand was established in the state by Govt. of Uttarakhand under the Ministry of Horticulture.
          
          Since inception DOS Uttarakhand was already a vast infrastructure for development of various type of sericulture in the state.But a newly created Uttarakhand state has a long traditional and great history of silk production.
         "
        />

        <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <SectionStatistic />
        <div style={{display:'flex' , alignItems:'center', justifyContent:'center'}}>
        <iframe loading="lazy" src="https://maps.google.com/maps?q=silk%20park%20bhawan%20premanagr%20dehradun&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
         title="silk park bhawan premanagr dehradun" aria-label="silk park bhawan premanagr dehradun" className="w-100" style={{width:'80vw' , height:'50vh'}}></iframe>
        </div>
      
        <SectionPromo3 />
      </div>
    </div>
  );
};

export default PageAbout;
