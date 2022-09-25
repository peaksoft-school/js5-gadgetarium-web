import React from 'react'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

import { ReactComponent as ArrowSlider } from '../../assets/icons/arrow2.svg'
import macbookCarousel from '../../assets/images/Gadgetarium.webp'
import macbook from '../../assets/images/iphone14probanner-2560x800.webp'
import slidePhoneTwo from '../../assets/images/macbookairm2chipkopija-2560x800.webp'

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
         <Slide
            {...properties}
            nextArrow={<RightArrowSlider />}
            prevArrow={<LeftArrowSlider />}
         >
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
   .react-slideshow-container + ul.indicators .each-slideshow-indicator:before {
      background: #cb11ab;
      margin-top: 20px;
   }
   .each-slideshow-indicator {
   }
   .react-slideshow-container
      + ul.indicators
      .each-slideshow-indicator.active:before {
      background: #cb11ab;
      width: 10px;
      height: 10px;
   }
   .react-slideshow-container + ul.indicators li {
      margin-left: 15px;
   }
`
const CarouselImage = styled.img`
   width: 100%;
   height: 650px;
   object-fit: cover;
`

const LeftArrowSlider = styled(ArrowSlider)`
   top: 50%;
   width: 50px;
   height: 50px;
   background: #fff;
   position: absolute;
   left: 0;
   transform: rotate(180deg);
   padding: 15px;
   border-radius: 25px;
   cursor: pointer;
   border: 1px solid #cb11ab;
   transition: 0.4s;
   opacity: 0.5;
   margin-left: 10px;
   &:hover {
      box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
      opacity: 1;
   }
`
const RightArrowSlider = styled(ArrowSlider)`
   top: 50%;
   width: 50px;
   height: 50px;
   position: absolute;
   right: 0;
   background: #fff;
   padding: 15px;
   border-radius: 25px;
   cursor: pointer;
   border: 1px solid #cb11ab;
   transition: 0.4s;
   opacity: 0.5;
   margin-right: 10px;
   &:hover {
      box-shadow: 0px 2px 6px rgb(0 0 0 / 7%), 0px 0px 25px rgb(0 0 0 / 10%);
      opacity: 1;
   }
`
