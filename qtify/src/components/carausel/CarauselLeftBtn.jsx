import React, { useEffect, useState } from 'react';
import {ReactComponent as LeftArrow} from '../../assets/LeftArrow.svg';
import { useSwiper } from 'swiper/react';
import './carausel.css'

const CarauselLeftBtn = () => {
    const swiper = useSwiper();
    const [isStart, setIsStart] = useState(swiper.isBeginning)

    useEffect(() =>{
        swiper.on("slideChange",() =>{
            setIsStart(swiper.isBeginning)
        })
    },[])
  return (
    <div className='leftBtn'>
      {!isStart && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarauselLeftBtn
