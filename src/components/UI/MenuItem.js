import React from 'react'

import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

function MenuItem({ text, onClose, onClick }) {
   const handleClick = () => {
      if (onClose) onClose()
      onClick()
   }
   return (
      <Grid container>
         <StyledButton onClick={handleClick} size="small" fullWidth>
            <p>{text}</p>
         </StyledButton>
      </Grid>
   )
}

export default MenuItem
const StyledButton = styled(Button)({
   '& p:hover': {
      fontFamily: 'Inter',
      color: '#292929',
   },
   '& p': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '19px',
      color: ' #8B8B9A',
      padding: '5px',
   },
   borderRadius: '30px',
   marginTop: '7px',
   minWidth: '293px',
   padding: '0px 10px',
   color: 'rgb(55, 65, 81)',
   display: 'flex',
   justifyContent: 'flex-start',
})
