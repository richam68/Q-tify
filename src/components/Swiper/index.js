// import Swiper core and required modules
import React from "react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Cards from "../Cards";
import {ReactComponent as LeftArrow} from "./left1.svg"
import {ReactComponent as RightArrow} from "./right1.svg"
import "./swiper.css"

export default function Swipper({topAlbum, navId }) {
  return (
    <div className="swipper-container">
    <Swiper
      // install Swiper modules
      modules={[Virtual, Navigation, Pagination]}
      spaceBetween={15}
      slidesPerView={7}
      virtual
      navigation={{ prevEl: `.arrow-left${navId}`, nextEl: `.arrow-right${navId}` }}
    >
      {topAlbum.length && topAlbum.map((item) => 
        (
        <SwiperSlide key={item.id}>
          <Cards
            imgSrc={item.image}
            followers={item.follows}
            songTitle={item.title}
            title={item.songs ? `${item.songs.length}`: ''}
          />
        </SwiperSlide>
      ))}
        <button className= {`arrow-left${navId} arrow-left arrow`}>
          <LeftArrow width={20} height={20}/>
        </button>
        <button className={`arrow-right${navId} arrow-right arrow`}>
          <RightArrow width={20} height={20}/>
        </button>
    </Swiper>
    </div>
  );
}
