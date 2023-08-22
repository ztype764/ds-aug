"use client"
import React,{useEffect, useState} from "react";
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
//import SectionPromo1 from "@/components/SectionPromo1";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionSliderLargeProduct from "@/components/SectionSliderLargeProduct";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
//import DiscoverMoreSlider from "@/components/DiscoverMoreSlider";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "@/components/SectionPromo2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
//import SectionPromo3 from "@/components/SectionPromo3";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
//import Heading from "@/components/Heading/Heading";
//import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import { PRODUCTS, SPORT_PRODUCTS } from "@/data/data";
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";
//import SectionMagazine5 from "@/app/blog/SectionMagazine5";
//import {Banner} from '../images/Banner.jpg'
import axios from "axios";
import { baseUrl } from "@/Url";
//import Crousal from "./Crousal/page";

function PageHome() {
  const [data , setData]= useState('');

  useEffect(()=>{

    const fetchData = async () => {
      try {
        axios.get(`${baseUrl} /getRandomProducts`)
      .then((response)=>{
        console.log(response)
        setData(response.data)
      console.log('success')
      }
      )
      .catch((error)=>{console.log(error)})
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
  fetchData();
  
  },[])
 
  
  const banners = [
  // Banner,
    '/banner2.jpg',
    '/banner3.jpg',
  ];

  return (
    <div className="nc-PageHome relative overflow-hidden">
 
 <SectionHero2/>

      {/* <div className="mt-24 lg:mt-32">
        <DiscoverMoreSlider />
      </div> */}

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* <SectionSliderProductCard
         product={data}
        /> */}

        <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>
        {/* <SectionPromo1 /> */}

        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>

        {/* <SectionSliderProductCard
          heading="Best Sellers"
          subHeading="Best selling of the month"
        /> */}

        {/* <SectionPromo2 /> */}

      

        {/* <SectionSliderCategories /> */}

        {/* <SectionPromo3 /> */}

        {/* <SectionGridFeatureItems /> */}

        {/* <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <div>
            <Heading rightDescText="From the Ciseco blog">
              The latest news
            </Heading>
            <SectionMagazine5 />
            <div className="flex mt-16 justify-center">
              <ButtonSecondary>Show all blog articles</ButtonSecondary>
            </div>
          </div>
        </div> */}
        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
