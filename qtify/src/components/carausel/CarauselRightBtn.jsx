import React, { useEffect, useState } from 'react';
import {ReactComponent as RightArrow} from '../../assets/RightArrow.svg';
import { useSwiper } from 'swiper/react';
import './carausel.css'

const CarauselRightBtn = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)

    useEffect(() =>{
        swiper.on("slideChange",() =>{
            setIsEnd(swiper.isEnd)
        })
    },[swiper.isEnd])
  return (
    <div className='rightBtn'>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarauselRightBtn
