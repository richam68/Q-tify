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
import { useSnackbar } from "notistack";

export default function Swipper({topAlbum, navId, handleCardClick }) {

  const {enqueueSnackbar} = useSnackbar();

  const handleReachEnd = () => {
    if (topAlbum.length > 0) {
      enqueueSnackbar("You've reached the end. Please use the left arrow to go back.", {
        variant: 'info',
      });
    }
  };

  const handleReachBeginning = () => {
    enqueueSnackbar("You've reached the beginning. Please use the right arrow to go forward.", {
      variant: 'info',
    });
  };

  return (
    <div className="swipper-container">
    <Swiper
      // install Swiper modules
      modules={[Virtual, Navigation, Pagination]}
      spaceBetween={15}
      slidesPerView={7}
      virtual
      navigation={{ prevEl: `.arrow-left${navId}`, nextEl: `.arrow-right${navId}` }}
      onReachEnd={handleReachEnd}
      onReachBeginning={handleReachBeginning}
    >
      {Boolean(topAlbum.length) && topAlbum.map((item) => 
        (
        <SwiperSlide key={item.id}>
          <Cards
            imgSrc={item.image}
            followers={item.follows}
            songTitle={item.title}
            title={item.songs ? `${item.songs.length}`: ''}
           onClick={() => handleCardClick(item.id)}
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
