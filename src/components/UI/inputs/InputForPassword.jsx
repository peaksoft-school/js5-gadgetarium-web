import { useState, forwardRef } from 'react'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

import { ReactComponent as OpenedEye } from '../../../assets/icons/Visible.svg'
import { ReactComponent as ClosedEye } from '../../../assets/icons/VisibleOff.svg'

const InputForPassword = forwardRef((props) => {
   const { ref, type, placeholder, name, id, onChange, ...others } = props
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => {
      setShowPassword((prev) => !prev)
   }
   const handleDownPassword = (event) => {
      event.preventDefault()
   }

   return (
      <StyledInput
         placeholder={placeholder}
         name={name}
         id={id}
         onchange={onChange}
         ref={ref}
         {...others}
         type={showPassword ? 'text' : 'password'}
         endAdornment={
            <InputAdornment position="end">
               <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleDownPassword}
                  edge="end"
               >
                  {showPassword ? <OpenedEye /> : <ClosedEye />}
               </IconButton>
            </InputAdornment>
         }
      />
   )
})

export default InputForPassword

const StyledInput = styled(OutlinedInput)((props) => ({
   boxSizing: 'borderBox',
   width: props.width || '100%',
   height: props.height,
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   backgroundColor: '#F7F7F7',
   color: '#909CB5',
   borderRadius: '6px',
   border: props.border,

   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(19, 18, 18, 0.23) !important',
   },
}))
