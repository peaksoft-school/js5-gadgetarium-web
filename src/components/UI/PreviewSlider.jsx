import React from 'react'

import { styled } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import Samsung from '../../assets/images/SamsungForSlider.png'

const image = [
   { images: Samsung, id: 2 },
   { images: Samsung, id: 3 },
   { images: Samsung, id: 4 },
]

const PreviewSlider = () => {
   return (
      <div>
         <CarouselStyle
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={4000}
            showIndicators={false}
         >
            {image.map((img) => (
               // eslint-disable-next-line react/no-array-index-key
               <div key={img.id}>
                  <img src={img.images} alt="#" />
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
