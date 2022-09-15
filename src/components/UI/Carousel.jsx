import React from 'react'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

import macbook from '../../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg'
import slidePhoneTwo from '../../assets/images/denis-cherkashin-zgUkIMKeJq4-unsplash.jpg'
// import slidePhone from '../../assets/images/slidePhone.png'
import macbookCarousel from '../../assets/images/wallpaperForCarousel.jpg'

const properties = {
   duration: 4000,
   transitionDuration: 500,
   infinite: true,
   indicators: true,
   scale: 0.3,
   arrows: true,
}
const Carousel = () => {
   return (
      <Box className="slider-wrapper">
         <Slide {...properties}>
            <div>
               <CarouselImage src={macbookCarousel} alt="" />
            </div>
            <div>
               <CarouselImage src={macbook} alt="" />
            </div>
            <div>
               <CarouselImage src={slidePhoneTwo} alt="" />
            </div>
         </Slide>
      </Box>
   )
}
export default Carousel

const Box = styled.div`
   height: 650px;
   & > div > div > button > svg {
      width: 12px;
   }
`

const CarouselImage = styled.img`
   width: 1620px;
   height: 650px;
   object-fit: cover;
`
