import React from 'react'

import { styled } from '@mui/material'

function Button({ children, ...props }) {
   return <ButtonStyled {...props}>{children}</ButtonStyled>
}
export default Button
const ButtonStyled = styled('button')((props) => ({
   fontSize: '16px',
   color: props.color || 'white',
   background: props.background || '#E313BF',
   width: props.width,
   height: props.height || '43px',
   border: props.border || ' none',
   borderRadius: props.borderRadius || '4px',
   '&:hover': {
      ...props.hover,
   },
   '&:active': {
      ...props.active,
   },
}))
