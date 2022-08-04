import React, { forwardRef } from 'react'

import OutlinedInput from '@mui/material/OutlinedInput'
import styled from 'styled-components'

const Input = forwardRef((props, ref) => {
<<<<<<< HEAD
   const {
      type,
      placeholder,
      name,
      id,
      onChange,
      error,
      value,
      helperText,
      ...others
   } = props
=======
   const { type, placeholder, name, id, onChange, ...others } = props
>>>>>>> 43a52f25757f8ec72842a87619b9f0f7da33f122
   return (
      <StyledInput
         ref={ref}
         type={type}
         placeholder={placeholder}
         name={name}
         helperText={helperText}
         id={id}
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
   borderRadius: props.borderRadius,
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
