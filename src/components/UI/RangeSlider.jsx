import * as React from 'react'

import { styled } from '@mui/material'
import Slider from '@mui/material/Slider'

function valuetext(value) {
   return `${value}°C`
}

export default function RangeSlider({ onChange }) {
   const [value, setValue] = React.useState([1200, 6000])
   const [f, setF] = React.useState(true)
   React.useEffect(() => {
      if (f) {
         setF(false)
         return () => {}
      }
      const debounceRange = setTimeout(() => {
         onChange(value[0], value[1])
      }, [1000])
      return () => {
         clearTimeout(debounceRange)
      }
   }, [value])

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   const onChangeInputHandler = (index, value) => {
      setValue((prev) => {
         return prev.map((elem, idx) => {
            if (idx === index) {
               return value
            }
            return elem
         })
      })
   }

   return (
      <Container>
         <InputsPrice>
            <PriceItem right="10px">
               <input
                  placeholder="от"
                  value={value[0]}
                  onChange={(e) => onChangeInputHandler(0, e.target.value)}
               />
            </PriceItem>
            <PriceItem left="10px">
               <input
                  placeholder="до"
                  value={value[1]}
                  onChange={(e) => onChangeInputHandler(1, e.target.value)}
               />
            </PriceItem>
         </InputsPrice>
         <Slide
            getAriaLabel={() => 'Temperature range'}
            value={value}
            min={500}
            max={30000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
         />
      </Container>
   )
}
const Container = styled('div')`
   width: 100%;
`
const InputsPrice = styled('div')`
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
`
const PriceItem = styled('div')`
   padding-left: ${(props) => props.left || ''};
   padding-right: ${(props) => props.right || ''};
   width: 50%;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #292929;
   input {
      width: 100%;
      padding: 5%;
      border: 1px solid #d5d5d5;
      border-radius: 4px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #292929;
      height: 37px;
   }
`
const Slide = styled(Slider)`
   margin-top: 15px;
   margin-bottom: 25px;
   .MuiSlider-thumb::after {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      background: #cb11ab;
      border: 0.5px solid #cb11ab;
   }

   .MuiSlider-track {
      width: 265px;
      height: 0px;
      color: #cb11ab;
   }
   .MuiSlider-rail {
      opacity: 0.38;
      width: 100%;
      height: 2.5px;
      color: gray;
   }
   .MuiSlider-valueLabel {
      display: none;
   }
`
