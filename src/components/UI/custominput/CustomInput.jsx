import React from 'react'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

import { ReactComponent as Visible } from '../../../assets/icons/Visible.svg'
import { ReactComponent as VisibleOff } from '../../../assets/icons/VisibleOff.svg'

const CustomInput = ({
   eyes,
   value,
   placeholder,
   onChange,
   width,
   height,
   type,
}) => {
   const [values, setValues] = React.useState(false)
   const handleClickShowPassword = () => {
      setValues((prev) => !prev)
   }
   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }
   return (
      <OutlinedInputStyled
         type={type || values ? 'text' : 'password'}
         value={value}
         placeholder={placeholder}
         onChange={onChange}
         width={width}
         height={height}
         endAdornment={
            eyes && (
               <InputAdornment position="end">
                  <IconButton
                     onClick={handleClickShowPassword}
                     onMouseDown={handleMouseDownPassword}
                     edge="end"
                  >
                     {values ? <Visible /> : <VisibleOff />}
                  </IconButton>
               </InputAdornment>
            )
         }
      />
   )
}
export default CustomInput

const OutlinedInputStyled = styled(OutlinedInput)`
   box-sizing: border-box;
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   border-radius: 6px;
`
