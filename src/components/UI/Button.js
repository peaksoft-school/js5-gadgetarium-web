import React from 'react'

import { styled } from '@mui/material'

function Button({ children, ...props }) {
   return <ButtonStyled {...props}>{children}</ButtonStyled>
}
export default Button
const ButtonStyled = styled('button')((props) => ({
   fontSize: '16px',
   color: props.color,
   background: props.background,
   width: props.width,
   height: props.height,
   border: props.border,
   borderRadius: props.border,
   '&:hover': {
      ...props.hover,
   },
   '&:active': {
      ...props.active,
   },
}))
