import React from 'react'

import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Popover from '@mui/material/Popover'

function DropdownMenu(props) {
   const { text, color } = props

   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   const childrenWithNewProps = React.Children.map(props.children, (child) =>
      React.cloneElement(child, { onClose: () => setAnchorEl(null) })
   )

   return (
      <div>
         <Grid item xs>
            <StyledButton
               variant="contained"
               color={color}
               size="large"
               fullWidth
               onClick={(event) => setAnchorEl(event.currentTarget)}
            >
               {text}
            </StyledButton>
            <Popover
               id="dropdown-id"
               open={open}
               anchorEl={anchorEl}
               onClose={() => setAnchorEl(null)}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
            >
               <Grid
                  container
                  width="100%"
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="stretch"
               >
                  {childrenWithNewProps}
               </Grid>
            </Popover>
         </Grid>
      </div>
   )
}
const StyledButton = styled(Button)({
   backgroundColor: ' #CB11AB',
   '&:hover': {
      backgroundColor: '#92107cAB',
   },
})

export default DropdownMenu
