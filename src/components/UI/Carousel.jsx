import React from 'react'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'

import slidePhone from '../../assets/images/slidePhone.png'
import slidePhoneTwo from '../../assets/images/slidePhoneds.png'

const properties = {
   duration: 4000,
   transitionDuration: 500,
   infinite: true,
   indicators: true,
   scale: 0.3,
   arrows: true,
}
const SimpleSlider = () => {
   return (
      <Box className="slider-wrapper">
         <Slide {...properties}>
            <div>
               <img src={slidePhone} alt="" />
               <img src={slidePhoneTwo} alt="" />
            </div>
            <div>
               <img src={slidePhone} alt="" />
               <img src={slidePhoneTwo} alt="" />
            </div>
            <div>
               <img src={slidePhone} alt="" />
               <img src={slidePhoneTwo} alt="" />
            </div>
         </Slide>
      </Box>
   )
}
export default SimpleSlider
const Box = styled.div`
   height: 500px;
   & > div > div > button > svg {
      width: 12px;
   }
`
// const Styledimg = styled.img`
//    width: 1920px;
//    height: 600px;
// `
