"use client"
import React, { FC, ReactNode } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
// import FrontSwipe from './SwiperImage'


const SectionHero = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
        <div className="flex-grow">
        {/* <Image className="w-full" src={rightImg} alt="" priority />  */}
        <img decoding="async" width="500" height="300" src="https://ucrf.org.in/wp-content/uploads/2022/06/doon-silk.jpg" className="elementor-animation-grow attachment-large size-large wp-image-732 w-full" alt="" loading="lazy" srcSet="https://ucrf.org.in/wp-content/uploads/2022/06/doon-silk.jpg 400w, https://ucrf.org.in/wp-content/uploads/2022/06/doon-silk-300x225.jpg 300w" sizes="(max-width: 500px) 100vw, 500px"/>
   
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
