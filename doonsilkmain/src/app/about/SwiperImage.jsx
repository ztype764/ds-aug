"use client"
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Swiper, { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
// configure Swiper to use modules
modules: [FreeMode, Pagination],

// Optional parameters
direction: 'horizontal',
loop: true,

// If we need pagination
pagination: {
  clickable: true,
},

  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

export default function FrontSwipe() {
return (
  <div>
    <Swiper>
      <SwiperSlide>
       1
      </SwiperSlide>
      <SwiperSlide>
       1
      </SwiperSlide>
    </Swiper>
  </div>
 );
}
