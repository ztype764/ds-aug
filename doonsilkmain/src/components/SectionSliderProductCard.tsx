"use client";

import React, { FC, useEffect, useId, useState } from "react";
import Heading from "@/components/Heading/Heading";
// @ts-ignore
import Glide from "@glidejs/glide/dist/glide.esm";

import axios from "axios";
import NewProduct from "@/app/NewProduct/page";
interface variant{
  varient_id:number;
  product_id:number;
  image1: string;
  image2: string;
  image3:string;
  color_hex:string;
  color:string;
}
interface Product {
  image1: string;
  image2: string;
  image3: string;
  new_varient_S: variant[];
  name:string;
  color:string;
  color_hex:string;
  product_id: number;
  description: string;
  price: number;
  discount: number;
 category_id:number;
}
export interface SectionSliderProductCardProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  headingFontClassName?: string;
  headingClassName?: string;
  subHeading?: string;
   product?: Product;
}


const SectionSliderProductCard: FC<SectionSliderProductCardProps> = ({
  className = "",
  itemClassName = "",
  headingFontClassName,
  headingClassName,
  heading,
  subHeading = "",
  product
  //data = PRODUCTS.filter((_, i) => i < 8 && i > 2),
}) => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  //
  const [isShow, setIsShow] = useState(false);
const [data , setData]=useState<Product|null>(product);

useEffect(() => {
  const fetchData = async () => {
    try {
      axios.get('http://localhost:8000/getRandomProducts')
    .then((response)=>{
      console.log(response)
      if(response.status===200){
        setData(response.data)
      }else{
        setData(product)
      }
   
   
    }
    )
    .catch((error)=>{console.log(error)})
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

fetchData();


  
}, []);

  useEffect(() => {
  

    const OPTIONS: Partial<Glide.Options> = {
      perView: 4,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: 4 - 1,
        },
        1024: {
          gap: 20,
          perView: 4 - 1,
        },
        768: {
          gap: 20,
          perView: 4 - 2,
        },
        640: {
          gap: 20,
          perView: 1.5,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    setIsShow(true);
    return () => {
      slider.destroy();
    };
  }, [UNIQUE_CLASS]);

  return (
    <div className={`nc-SectionSliderProductCard ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root ${isShow ? "" : "invisible"}`}>
        <Heading
          className={headingClassName}
          fontClass={headingFontClassName}
          rightDescText={subHeading}
          hasNextPrev
        >
          {heading || `New Arrivals`}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            
          {
  data ? (
    Array.isArray(data) ? (
    data.map((item, index) => (
      <li key={index} className={`glide__slide ${itemClassName}`}>
        <NewProduct item={item} />
      </li>
    ))): <>unexpected format</>
  ) : (
    <p>Loading...</p>
  )
}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderProductCard;
