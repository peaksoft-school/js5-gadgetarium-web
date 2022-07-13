import React, { forwardRef } from 'react'

import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

const Input = forwardRef((props) => {
   const { ref, type, placeholder, name, id, onChange, ...others } = props
   return (
      <StyledInput
         ref={ref}
         type={type}
         placeholder={placeholder}
         name={name}
         id={id}
         onChange={onChange}
         {...others}
      />
   )
})

export default Input

const StyledInput = styled(OutlinedInput)((props) => ({
   boxSizing: 'borderBox',
   width: props.width || '100%',
   height: props.height,
   fontSize: props.fontSize,
   borderRadius: props.borderRadius,
   backgroundColor: props.backgroundColor,
   outline: 'none',

   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(19, 18, 18, 0.23) !important',
   },
}))
