"use client"
import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import './SectionStatistic.css';


const FOUNDER_DEMO = [
  {
    id: "1",
    heading: "10 million",
    subHeading:
      "Tender notice for firewood ",
  },
  {
    id: "2",
    heading: "100,000",
    subHeading: "Tender for procurement of Firewood ",
  },
  {
    id: "3",
    heading: "220+",
    subHeading:
      "Tender Notice dry Cocoon Purchase ",
  },
];



const SectionStatistic = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        🚀 Updates
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
     
<div className="text-center">
    <h3 className="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">
           Latest News
            </h3>
    <div className="marquee-wrapper">
	  <div className="container">
		<div className="marquee-block">
			<div className="marquee-inner to-left">
				<span>
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="marquee-item"
          >
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              <a> {item.subHeading}</a>  
            </span>
          </div>
        ))} 

					
				</span>
			</div>
		</div>

	</div>
</div>
</div>

<div className="text-center">
    <h3 className="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">
         Facebook
            </h3>
    <div className="marquee-wrapper">
	  <div className="container">
		<div className="marquee-block">
			<div className="marquee-inner to-left">
				<span>
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="marquee-item"
          >
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              <a> {item.subHeading}</a>  
            </span>
          </div>
        ))} 

					
				</span>
			</div>
		</div>

	</div>
</div>
</div>

<div className="text-center">
    <h3 className="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">
         Tender/EOI
            </h3>
    <div className="marquee-wrapper">
	  <div className="container">
		<div className="marquee-block">
			<div className="marquee-inner to-left">
				<span>
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="marquee-item"
          >
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              <a> {item.subHeading}</a>  
            </span>
          </div>
        ))} 

					
				</span>
			</div>
		</div>

	</div>
</div>
</div>
      </div>
    </div>
  );
};

export default SectionStatistic;
