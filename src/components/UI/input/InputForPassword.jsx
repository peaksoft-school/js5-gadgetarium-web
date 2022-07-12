import { useState, forwardRef } from 'react'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

import { ReactComponent as OpenedEye } from '../../../assets/icons/Visible.svg'
import { ReactComponent as ClosedEye } from '../../../assets/icons/VisibleOff.svg'

const InputForPassword = forwardRef((props, ref) => {
   const [showPassword, setShowPassword] = useState(false)

   const handleClickShowPassword = () => {
      setShowPassword((prev) => !prev)
   }
   const handleDownPassword = (event) => {
      event.preventDefault()
   }

   return (
      <StyledInput
         {...props}
         ref={ref}
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
   width: props.width || '460px',
   height: props.height || '43px',
   borderRadius: '6px',
}))
