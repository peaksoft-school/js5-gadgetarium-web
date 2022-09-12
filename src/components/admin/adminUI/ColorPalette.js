import React, { useState, useRef, forwardRef } from 'react'

import { InputAdornment, Popover } from '@mui/material'
import { ChromePicker } from 'react-color'
import styled from 'styled-components'

import { ReactComponent as ColorIcon } from '../../../assets/icons/color-icon.svg'
import Input from '../../UI/inputs/Input'

const ColorPalette = forwardRef(({ getColor, defaultColor }, ref) => {
   const [color, setColor] = useState(defaultColor && '')
   const colorChangeHandler = (col) => {
      setColor(col)
      getColor(col)
   }
   const [anchorEl, setAnchorEl] = useState(null)
   const divRef = useRef()
   function handleClick() {
      setAnchorEl(divRef.current)
   }

   function handleClose() {
      setAnchorEl(null)
   }

   const open = Boolean(anchorEl)

   return (
      <>
         <ContainerColor ref={divRef}>
            <Input
               height="35px"
               width="396px"
               value={color}
               ref={ref}
               placeholder="Основной цвет"
               endAdornment={
                  <InputAdornment position="end">
                     <ColorIcon onClick={() => handleClick()} />
                  </InputAdornment>
               }
            />
         </ContainerColor>
         <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={() => handleClose()}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
         >
            <ChromePicker
               color={color}
               onChangeComplete={(сolor) => colorChangeHandler(сolor.hex)}
               disableAlpha
            />
         </Popover>
      </>
   )
})

export default ColorPalette

const ContainerColor = styled.div`
   width: 396px;
   cursor: pointer;
`
