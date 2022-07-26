import React, { useState, useRef } from 'react'

import { InputAdornment, Popover } from '@mui/material'
import { ChromePicker } from 'react-color'

import { ReactComponent as ColorIcon } from '../../assets/icons/color-icon.svg'
import Input from '../UI/inputs/Input'

function ColorPalette({ getColor, defaultColor }) {
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
         <div ref={divRef}>
            <Input
               height="35px"
               value={color}
               placeholder="Основной цвет"
               endAdornment={
                  <InputAdornment position="end">
                     <ColorIcon onClick={() => handleClick()} />
                  </InputAdornment>
               }
            />
         </div>
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
}

export default ColorPalette
