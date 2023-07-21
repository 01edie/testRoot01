import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";
/* eslint-enable */

import { FreeMode, Pagination, Autoplay } from "swiper";



// type Props = {};

export default function Banner() {
  return (
    <Box  mt={1} >
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // freeMode
        pagination
        grabCursor
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        loop
        modules={[FreeMode, Pagination, Autoplay]}
        className="banner"
      >
        {/* slidesPerView attribute requiring  <= SwiperSlides/2 to be in loop */}
        <SwiperSlide>
            <img src='/image1.jpg' style={{ objectFit: 'fill', width:'100%', height:'400px', borderRadius:'10px'}}  alt="" />
            <Typography variant="h6">Caption 1</Typography>
        </SwiperSlide>
        <SwiperSlide>
            <img src='/image2.jpg' style={{ objectFit: 'fill', width:'100%', height:'400px', borderRadius:'10px'}} alt="" />
            <Typography variant="h6">Caption 2</Typography>
        </SwiperSlide>
        <SwiperSlide>
            <img src='/image3.jpg' style={{ objectFit: 'fill', width:'100%', height:'400px', borderRadius:'10px'}} alt="" />
            <Typography variant="h6">Caption 3</Typography>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
