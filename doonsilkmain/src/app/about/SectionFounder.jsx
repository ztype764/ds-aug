"use client"
import Heading from "@/components/Heading/Heading";
import React from "react";
import NcImage from "@/shared/NcImage/NcImage";



const FOUNDER_DEMO = [
 
 
 
  {
    id: "4",
    name: `Dr. BVRC Purushottam (IAS)`,
    job: "Secretary Co-Operatives Uttarakhand",
    avatar:
    "https://ucrf.org.in/wp-content/uploads/2022/06/BVRC-Purushottam-150x150.jpeg",
  },
  {
    id: "5",
    name: `Mr. Alok Kumar Pandey`,
    job: "Registrar Co-Operatives Societies Uttarakhand",
    avatar:
    "https://ucrf.org.in/wp-content/uploads/2022/06/Alok-Kumar-Pandey-150x150.jpg",
  },
 
  {
    id: "1",
    name: `Chaudhary Ajeet Singh`,
    job: "Chairman",
    avatar:
    "https://ucrf.org.in/wp-content/uploads/2022/06/Chairman-Chaudhary-Ajeet-Singh-150x150.jpg"
  },
  {
    id: "2",
    name: `Vikram Singh Bisht`,
    job: "Vice-Chairman",
    avatar:
    "https://ucrf.org.in/wp-content/uploads/2022/06/testimonial-1-150x150.jpg",
  },
  {
    id: "3",
    name: `Anand A.D. Shukla`,
    job: "Managing Director",
    avatar:
    "https://ucrf.org.in/wp-content/uploads/2022/09/sukla-1.jpg",
  },

];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        ⛱ Message Desk
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-3 xl:gap-x-8 ">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              alt=""
              fill
              sizes="300px"
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
