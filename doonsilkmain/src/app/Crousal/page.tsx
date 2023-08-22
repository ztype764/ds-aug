"use client"
import React,{useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { baseImgUrl } from '@/Url';




const Crousal: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/getBanner')
    .then((response)=>{setImages(response.data.data[0]),console.log('getbannr',image)})
    .catch((error)=>{console.log(error)})
    console.log('images',images)
  },[])
  return (
    <div className="w-full h-full ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
          <SwiperSlide>
            <img src={`${baseImgUrl}${images.image1}`} alt={`Banner `} className="w-full h-full object-cover" />
           
          </SwiperSlide>
          <SwiperSlide>
          
       <img src={`${baseImgUrl}${images.image2}`} alt={`Banner `} className="w-full h-full object-cover" />
          
          </SwiperSlide>
          <SwiperSlide>
           
            <img src={`${baseImgUrl}${images.image3}`} alt={`Banner `} className="w-full h-full object-cover" /> 
          </SwiperSlide>      
      </Swiper>
    </div>
  );
};

export default Crousal;
