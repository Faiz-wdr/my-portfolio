import React, { useRef, useState } from "react";
// Import Swiper React components
import CardContent from '@mui/material/CardContent';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <div className="bg">
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="Testcards">
           <div className="t-card1">
             <CardContent>
               <div className="t-card-content">
                 <div className="t-content-text">
                   <p className="p">
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica. Lizards are a widespread group of squamate
                     reptiles, with over 6,000 species, ranging across all
                     continents except Antarctica.
                   </p>
                 </div>
               </div>
             </CardContent>
             <div className="c-btm">
               <div className="avatar"></div>
               <div className="cli-name">
                 <h4 className="h4">Robert Alexander</h4>
                 <p className="p1">Founder, Gustavo Pvt Ltd</p>
               </div>
             </div>
           </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Testcards">
           <div className="t-card1">
             <CardContent>
               <div className="t-card-content">
                 <div className="t-content-text">
                   <p className="p">
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica. Lizards are a widespread group of squamate
                     reptiles, with over 6,000 species, ranging across all
                     continents except Antarctica.
                   </p>
                 </div>
               </div>
             </CardContent>
             <div className="c-btm">
               <div className="avatar"></div>
               <div className="cli-name">
                 <h4 className="h4">Robert Alexander</h4>
                 <p className="p1">Founder, Gustavo Pvt Ltd</p>
               </div>
             </div>
           </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Testcards">
           <div className="t-card1">
             <CardContent>
               <div className="t-card-content">
                 <div className="t-content-text">
                   <p className="p">
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica. Lizards are a widespread group of squamate
                     reptiles, with over 6,000 species, ranging across all
                     continents except Antarctica.
                   </p>
                 </div>
               </div>
             </CardContent>
             <div className="c-btm">
               <div className="avatar"></div>
               <div className="cli-name">
                 <h4 className="h4">Robert Alexander</h4>
                 <p className="p1">Founder, Gustavo Pvt Ltd</p>
               </div>
             </div>
           </div>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
