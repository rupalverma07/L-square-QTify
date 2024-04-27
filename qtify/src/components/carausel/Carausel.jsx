import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import Cards from '../card/Cards';
import './carausel.css'
import CarauselLeftBtn from './CarauselLeftBtn';
import CarauselRightBtn from './CarauselRightBtn';

const Controls = ({data}) =>{
    const swiper = useSwiper();
    useEffect(() =>{
        swiper.slideTo(0)
    },[data])
}

const Carausel = ({data,renderCardItem}) => {
  return (
    // <div>
        <Swiper
      spaceBetween={45}
      slidesPerView={"auto"}
    initialSlide={0}
      modules={[Navigation]}
    >
        <Controls data = {data} />
        <CarauselLeftBtn />
        <CarauselRightBtn />
        {data.map((item,index) =>
        (<SwiperSlide key={index}>{renderCardItem(item)}</SwiperSlide>)
            // (<SwiperSlide key={index}><Cards data={item}/></SwiperSlide>)
        )}
      
    </Swiper>
    // </div>
  )
}

export default Carausel
