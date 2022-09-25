import React from 'react'

import Grid from '@mui/material/Grid'
import Popover from '@mui/material/Popover'

import { ReactComponent as Catalog } from '../../assets/icons/каталог.svg'

import Button from './Button'

function DropdownMenu({ text, children }) {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   const childrenWithNewProps = React.Children.map(children, (child) =>
      React.cloneElement(child, { onClose: () => setAnchorEl(null) })
   )

   return (
      <div>
         <Grid item xs>
            <Button
               startIcon={<Catalog />}
               variant="contained"
               onClick={(event) => setAnchorEl(event.currentTarget)}
            >
               {text}
            </Button>
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

export default DropdownMenu
