import React from 'react'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

const properties = {
   duration: 5000,
   transitionDuration: 500,
   infinite: true,
   indicators: true,
   scale: 0.4,
   arrows: true,
}

const SimpleSlider = ({ imgs }) => {
   return (
      <Box className="slider-wrapper">
         <Slide {...properties}>
            {imgs.map((el) => (
               <Styledimg src={el.url} key={el.id} alt={el.id} />
            ))}
         </Slide>
      </Box>
   )
}

export default SimpleSlider

const Box = styled.div`
   width: 1920px;
   height: 500px;
   & > div > div > button > svg {
      width: 12px;
   }
`
const Styledimg = styled.img`
   width: 1920px;
   height: 500px;
`
