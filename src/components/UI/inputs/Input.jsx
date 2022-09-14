import React, { forwardRef } from 'react'

import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

const Input = forwardRef((props, ref) => {
   const {
      type,
      placeholder,
      name,
      id,
      onChange,
      error,
      value,
      autoComplete,
      maxLength,
      ...others
   } = props
   return (
      <StyledInput
         autoComplete={autoComplete}
         ref={ref}
         type={type}
         placeholder={placeholder}
         name={name}
         id={id}
         maxR
         value={value}
         error={error}
         onChange={onChange}
         {...others}
      />
   )
})

export default Input

const StyledInput = styled(OutlinedInput)((props) => ({
   boxSizing: 'border-box',
   width: props.width || '100%',
   height: props.height,
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   borderRadius: '6px',
   backgroundColor: '#FFFFFF;',

   background: `${props.variant === 'default' ? '#F7F7F7' : ''}`,
   color: `${props.variant === 'default' ? '#909CB5' : ''}`,

   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(19, 18, 18, 0.23) !important',
   },
   'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
      {
         '-webkit-box-shadow': '0 0 0 30px #F7F7F7 inset !important',
         maxHeight: '-webkit-fill-available',
         '-webkit-text-fill-color': '#909CB5',
         fontSize: '16px',
      },
}))
