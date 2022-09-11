import React from 'react'

import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const PreviewSlider = ({ images }) => {
   return (
      <div>
         <CarouselStyle
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={4000}
            showIndicators={false}
         >
            {images.map((img) => (
               <div key={img.id}>
                  <img src={img} alt="#" />
               </div>
            ))}
         </CarouselStyle>
      </div>
   )
}

export default PreviewSlider

const CarouselStyle = styled(Carousel)`
   .carousel {
      display: flex;
      justify-content: center;
      padding-top: 40px;
      background-color: transparent;
   }
   .carousel .slide {
      height: 750px;
   }
   .carousel .slide img {
      width: 750px;
      height: 750px;
   }
   .thumbs-wrapper {
      margin-top: -0px;
   }
`
