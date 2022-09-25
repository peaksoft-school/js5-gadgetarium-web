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
            {images?.map((img, id) => (
               // eslint-disable-next-line react/no-array-index-key
               <div key={id}>
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
   .carousel .slide img {
      width: 310px;
      height: 370px;
      object-fit: contain;
   }
   .thumbs-wrapper {
      margin-top: -0px;
   }
`
