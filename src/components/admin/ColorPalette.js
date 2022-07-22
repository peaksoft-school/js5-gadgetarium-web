import React, { useState } from 'react'

import { Paper, Popover, styled } from '@mui/material'

import colorList from '../../utils/constants/colors'

function ColorPalette({ isOpen, onClose, colorHandler }) {
   const [color, setColor] = useState('')
   const colorChangeHandler = (col) => {
      setColor(col)
      colorHandler(col)
   }

   return (
      <Popover
         open={isOpen}
         onClose={onClose}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
         }}
      >
         <Container>
            {colorList.map((item, index) => {
               return (
                  <Column key={item[index]}>
                     {item.map((el, ind) => {
                        return (
                           <Color
                              key={el[ind]}
                              background={el}
                              border={color === el ? 'red' : el}
                              onClick={() => colorChangeHandler(el)}
                           />
                        )
                     })}
                  </Column>
               )
            })}
         </Container>
      </Popover>
   )
}

export default ColorPalette

const Container = styled(Paper)`
   display: flex;
   width: 396px;
   height: 268px;
   padding: 2px 6px;
   border-radius: 4px;
   box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
   & * {
      box-sizing: border-box;
   }
`

const Column = styled('div')`
   width: 32px;
   margin: 2px;
`

const Color = styled('div')`
   height: 28px;
   width: 28px;
   margin: 4px 0 4px 0;
   background-color: ${(props) => props.background};
   border: ${(props) => `2px solid ${props.border}`};
   &:hover {
      transform: scale(1.1);
   }
`
